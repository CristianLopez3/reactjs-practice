import React from 'react';
import './Estilos.css';
import modulos from './Estilos.module.css';
import './Estilos.scss'

export default function Estilos(){

  let myStyles = {
    padding: '1rem',
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: '.5rem'
  }

  return (
    <>
      <h2>Estilos CSS con react</h2>
      <h3 className='bg-react'>Estilos es una hoja de estilos externa</h3>
      <h3 className='bg-react' style={{borderRadius:'.4rem', color:'#000'}}>Estilos en linea</h3>
      <h3 className='bg-react' style={myStyles} >Estilos en linea con variable</h3>
      <h3 className={modulos.success} >Estilos con modulos</h3>
      <h3 className={modulos.error} >Estilos con modulos</h3>
      <br />
      <br />
      <h3 className='bg-sass' >Estilos con Sass</h3>

    </>
  );

}