import { useState } from 'preact/hooks';
import React from "react";
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';

export function App() {
  const [count, setCount] = useState(0)
  let name = 'Cristian';
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <h2>{name}</h2>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p key={"123"}>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <section>
        <Componente msg="Hola, soy un mensaje en las props" />
        <br />
        <Propiedades
         name = "Cristian" 
         number = {123} 
         boolean = {true}  
         objecto = {{nombre: "Cristian"}} 
         array = {[4, 5, 6]} 
         elementReact = {<i>Hola, soy un elemento de react</i>} 
         componentReact = {<Componente msg="Hola, soy  un componente de react"/>} 
         />
         <hr />
         <Estado />
      </section>
    </>
  )
}
