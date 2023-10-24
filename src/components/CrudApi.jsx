import React, { useEffect, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import { Loader } from "./Loader";
import { Message } from "./Message";

function CrudApi() {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:9898/protas";

  // GET METHOD
  useEffect(() => {
    setloading(true);
    api
      .get(url)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }

        setloading(false);
      })
      .catch((err) => err);
  }, [url]); // actualizar cada que se cambie la url

  /* Los elementos hijos se comunican a traves de funciones */
  // POST METHOD
  const createData = (data) => {
    data.id = Date.now();

    let options  = {
      body: data, 
      headers: {
        "content-type": "application/json",
      }
    }

    api.post(url, options ).then((res) => {
      console.log("error");
      if(!res.err){
        setDb([...db, data]);
      } else {
        setError(res);
      }


    });

    setDb([...db, data]);
  };

  // PUT METHOD
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  // DELETE METHOD
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Are you sure of delete the register with id ${id}`
    );
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <>
      <h3> Crud Api </h3>

      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#db3545"
          />
        )}
        {db && (
          <CrudTable
            dataDb={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
            dataToEdit={dataToEdit}
          />
        )}
      </article>
    </>
  );
}

export default CrudApi;
