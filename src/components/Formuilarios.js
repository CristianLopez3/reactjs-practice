import React, { useState } from 'react';


/**
 * Codigo con una varias variables de estado
 * @returns <></>
 */


/*
export default function Formularios() {

  const [nombre, setNombre] = useState('');
  const [sabor, setSabor] = useState('');
  const [favorito, setFavorito] = useState('');
  const [terminos, setTerminos] = useState(false);

  return (
    <>
      <h2>Formularios con React</h2>
      <form>

        <label htmlFor='nombre'>Nombre: </label>
        <input
          type='text'
          id='nombre'
          name='nombre'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        /> <br />

        <p> Escoge tu sabor Js favorito: </p>
        <input
          type='radio'
          id='angular'
          name='sabor'
          value='angular'
          onChange={(e) => setSabor(e.target.value)}
          defaultChecked
        />
        <label htmlFor='sabor'>Angular</label> <br />

        <input
          type='radio'
          id='react'
          value='react'
          name='sabor'
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor='sabor'>React</label> <br />

        <input
          type='radio'
          id='vue'
          name='sabor'
          value='vue'
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor='sabor'>Vue</label> 
        <br />
        <br />

        <select name='lenguajes' defaultSelect='' onChange={(e) => setFavorito(e.target.value)}>
          <option value=''>---</option>
          <option value='java'>Java</option>
          <option value='php'>php</option>
          <option value='python'>python</option>
          <option value='go'>go</option>
        </select>
        <br />
        <br />
        <label htmlFor='terminos'>Aceptas terminos y condiones</label>
        <input
          type='checkbox'
          id='terminos'
          name='terminos'
          onChange={(e) => setTerminos(e.target.checked)}
        />

      </form>
    </>
  );

}
*/

/**
 * Codigo con una sola variable de estado (objeto)
 * @returns <></>
 */

export default function Formularios() {

  const [form, setForm] = useState({});

  // Metodo para cambiar los valores de todos los input que toman un valor
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // Metodo para cambiar los valores de los input tipo checkbox
  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked
    })
  }

  return (
    <>
      <h2>Formularios con React</h2>
      <form>

        <label htmlFor='nombre'>Nombre: </label>
        <input
          type='text'
          id='nombre'
          name='nombre'
          onChange={handleChange}
        /> <br />

        <p> Escoge tu sabor Js favorito: </p>
        <input
          type='radio'
          id='angular'
          name='sabor'
          value='angular'
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor='sabor'>Angular</label> <br />

        <input
          type='radio'
          id='react'
          value='react'
          name='sabor'
          onChange={handleChange}
        />
        <label htmlFor='sabor'>React</label> <br />

        <input
          type='radio'
          id='vue'
          name='sabor'
          value='vue'
          onChange={handleChange}
        />
        <label htmlFor='sabor'>Vue</label>
        <br />
        <br />

        <select
          name='lenguajes'
          defaultSelect=''
          onChange={handleChange}
        >
          <option value=''>---</option>
          <option value='java'>Java</option>
          <option value='php'>php</option>
          <option value='python'>python</option>
          <option value='go'>go</option>

        </select>
        
        <br />
        <br />

        <label htmlFor='terminos'>Aceptas terminos y condiones</label>
        <input
          type='checkbox'
          id='terminos'
          name='terminos'
          onChange={handleChecked}
        />

      </form>
    </>
  );

}