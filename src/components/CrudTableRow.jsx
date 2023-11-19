import React from 'react';
import {Link, redirect, useNavigate} from "react-router-dom";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {

  const {character, anime, id} = el;
  let navigate = useNavigate();

  // When the button "update" is clicked this redirect to respective url and change the values of the form
  const  handleEdit = () => {
      setDataToEdit(el);
      // redirect(`/animes/update/${el.id}`);
      navigate(`/animes/update/${el.id}`);
  }

  return (
    <tr>
      <td> { character } </td>
      <td> { anime } </td>
      <td>
        {/* Actualizamos el estado del formulario desde un elemento de la tabla */}
        <button onClick={handleEdit} >update</button>
        <button onClick={() => deleteData(id)} >delete</button>
      </td>
    </tr>
  );

}

export default CrudTableRow;