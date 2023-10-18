import { useState } from 'preact/hooks';
import React from "react";
import './app.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosEM6, EventosEM7, MasSobreEventos } from './components/Eventos';
import { Padre } from './components/ComunicacionEntreComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelofHooks from './components/RelojHooks';
// ==========================================================================
import AjaxConHooks from './components/AjaxConHooks';
import HooksPersonalizados from './components/HooksPersonalizados';

export function App() {
  const [count, setCount] = useState(0)
  let name = 'Cristian';
  return (
    <>

      <section className="hidden">

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
        <hr />

        <EventosEM6 />
        <hr />

        <EventosEM7 />
        <hr />

        <MasSobreEventos />
        <hr />

        <Padre />
        <hr />

        <CicloVida />
        <hr />

        <AjaxApis />
        <hr />

        <ContadorHooks titulo = "Desde app.jsx" />
        <hr />

        <ScrollHooks />
        <hr />

        <RelofHooks />
        <hr />

      </section>

      <section >
        <HooksPersonalizados />
      </section>

    </>
  )
}
