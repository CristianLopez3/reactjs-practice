import React, { useEffect, useState } from 'react';

let initialForm = {
  character: '',
  anime: '',
  id: null,
}

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      // Actualizamos los valores de los input con los datos que se ejecutaron desde la fila de la tabla
      setForm(dataToEdit);
    } else {
      setForm(initialForm); // Dejamos el formulario vacio.
    }
  }, [dataToEdit])


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.character || !form.anime) {
      alert('Incomplete form inputs');
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();

  }

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="character"
          id="character"
          placeholder="Goku..."
          onChange={handleChange}
          value={form.character}
        />
        <input
          type="text"
          name="anime"
          id="anime"
          placeholder="Dragon Ball..."
          onChange={handleChange}
          value={form.anime}
        />

        <input type="submit" value="Submit" />
        <input type="reset" value="Clear" onClick={handleReset} />
      </form>
    </div>

  );
}

export default CrudForm;
