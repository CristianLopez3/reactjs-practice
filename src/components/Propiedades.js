import React from "react";


export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.name}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? "True" : "false"}</li>
      </ul>
    </div>
  )
}

Propiedades.defaultProps = {
  porDefecto: "Propiedad por defecto"
}