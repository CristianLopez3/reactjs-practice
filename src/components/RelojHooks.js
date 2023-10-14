import React, { useState, useEffect } from 'react';

function Reloj({hora}){
  return (
    <>
      <p>Son las: {hora}</p>
    </>
  );
}

export default function RelojHooks() {

  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString())
      }, 1000)
    } else {
      clearInterval(temporizador);
    }

    return (() => {
      console.log('Fase de desmontaje');
      clearInterval(temporizador);
    })

  })

return (
  <>
    <h2>Reloj con Hooks</h2>
    {visible && <Reloj hora={hora} />}
    <button onClick={() => setVisible(true)}>+</button>
    <button onClick={() => setVisible(false)}>-</button>
  </>
);

}