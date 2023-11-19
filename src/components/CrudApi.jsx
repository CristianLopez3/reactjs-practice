import React, { useEffect, useState } from "react";
import { HashRouter, BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import { Loader } from "./Loader";
import { Message } from "./Message";
import './CrudApi.css';
import { Page404 } from './Page404.jsx';

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

    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
      },
    };

    api.post(url, options).then((res) => {
     // console.log("error");
      if (!res.err) {
        setDb([...db, data]);
      } else {
        setError(res);
      }
    });

    setDb([...db, data]);
  };

  // PUT METHOD
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`; // url a editar

    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
      },
    };

    // Solicitud a la api
    api
      .put(endpoint, options)
      .then((res) => {
        if (!res.err) {
          let newData = db.map((el) => (el.id === data.id ? data : el));
          setDb(newData);
        } else {
          setError(err); // actualizar el mensaje de error
        }
      })
      .catch((err) => err);
  };

  // DELETE METHOD
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Are you sure of delete the register with id ${id}`
    );

    let endpoint = `${url}/${id}`;
    let options = {
      headers: {
        "content-type": "application/json",
      },
    };

    if (isDelete) {
      api
        .del(endpoint, options)
        .then((res) => {
          if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
          } else {
            setError(err);
          }
        })
        .catch((err) => err);
    } else {
      return;
    }
    
  };

  return (
    <>



      <HashRouter>

        <header className="Navbar">
          <h2>Crud API</h2>
          <nav>
            <Link to="/animes">Home</Link>
            <Link to="/animes/add" > Add </Link>
          </nav>
        </header>

        <Routes>



          <Route path="/animes">


            <Route index errorElement={<Message />} element={
              <CrudTable
                  dataDb={db}
                  deleteData={deleteData}
                  setDataToEdit={setDataToEdit}
                  dataToEdit={dataToEdit}
              />
            } />

            <Route path="add" element={
              <CrudForm
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
              />
            } />

            <Route path="update/:id" element={
              <CrudForm
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
              />
            } />
          </Route>

          <Route path='*' element={<Page404 />} />
        </Routes>


      </HashRouter>
      {/*<article className="grid-1-2">*/}
      {/*  {loading && <Loader />}*/}
      {/*  {error && (*/}
      {/*    <Message*/}
      {/*      msg={`Error ${error.status}: ${error.statusText}`}*/}
      {/*      bgColor="#db3545"*/}
      {/*    />*/}
      {/*  )}*/}
      {/*</article>*/}
    </>
  );
}

export default CrudApi;
