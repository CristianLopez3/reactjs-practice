import React, { useState } from 'react';

export default function ContadorHooks(props){
  
  //console.log(useState());

  const[contador, setContador] = useState(0);
  
  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return(
    <>
      <h2>Contador con Hooks</h2>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <h3>Contador con titulo {props.titulo}</h3>
      <p><b>{contador}</b></p>
    </>
  );


}

ContadorHooks.defaultProps = {
  titulo: "titulo por defecto"
};