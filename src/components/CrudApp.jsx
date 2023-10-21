import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

// Base de Datos ficticia
const initialDb = [
  {
    character: 'Naruto',
    anime: 'Naruto',
    id: 10
  },
  {
    character: 'Goku',
    anime: 'Dragon Ball',
    id: 2
  },
  {
    character: 'Brook',
    anime: 'One piece',
    id: 3
  },
  {
    character: 'Seiya',
    anime: 'Saint Seiya',
    id: 4
  }
]

function CrudApp() {

  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  /* Los elementos hijos se comunican a traves de funciones */
  const createData = (data) => {
    data.id = Date.now();
    setDb([
      ...db,
      data
    ])
  }

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id) ? data : el);
    setDb(newData);
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(`Are you sure of delete the register with id ${id}`);
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  }

  return (
    <>
      <h3> {dataToEdit ? 'Editar' : 'Agregar'} </h3>

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

export default CrudApp;