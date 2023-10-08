import { useState } from 'preact/hooks';
import React from "react";
import './app.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';

export function App() {
  const [count, setCount] = useState(0)
  let name = 'Cristian';
  return (
    <>

      <section>
        <Componente msg="Hola, soy un mensaje en las props" />
        <br />
        <Propiedades
          name="Cristian"
          number={123}
          boolean={true}
          objecto={{ nombre: "Cristian" }}
          array={[4, 5, 6]}
          elementReact={<i>Hola, soy un elemento de react</i>}
          componentReact={<Componente msg="Hola, soy  un componente de react" />}
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
      </section>
    </>
  )
}
