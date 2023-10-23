import React, { useEffect, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";

function CrudApi() {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  let api = helpHttp();
  let url = "http://localhost:9898/protas";

  useEffect(() => {
    api
      .get(url)
      .then((res) =>{ 
        console.log(res)
        if(!res.err){
          setDb(res);
        } else {
          setDb(null);
        }
      })
      .catch((err) => err);
  }, []);

  /* Los elementos hijos se comunican a traves de funciones */
  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

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
        <CrudTable
          dataDb={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
          dataToEdit={dataToEdit}
        />
      </article>
    </>
  );
}

export default CrudApi;
