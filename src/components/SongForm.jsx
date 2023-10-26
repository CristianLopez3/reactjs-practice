import React, { useState } from "react";

const initalForm = {
  artist: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initalForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.artist) {
      alert("Datos incompletos");
      return;
    }

    handleSearch(form); // Enviar los datos del formulario a la busqueda.
    setForm(initalForm); // Limpiar los valores del formulario.

  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="artist"
        id="artist"
        placeholder="Nombre del artista"
        onChange={handleChange}
        value={form.artist}
      />

      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SongForm;
