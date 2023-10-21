import React from 'react';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {

  const {character, anime, id} = el;

  return (
    <tr>
      <td> { character } </td>
      <td> { anime } </td>
      <td>
        {/* Actualizamos el estado del formulario desde un elemento de la tabla */}
        <button onClick={() => setDataToEdit(el)} >update</button> 
        <button onClick={() => deleteData(id)} >delete</button>
      </td>
    </tr>
  );
  
}

export default CrudTableRow;