import React from "react";
import PropTypes from "prop-types";


export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.name}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? "True" : "false"}</li>
        <li>{props.array.join(", ")}</li>
        <li>{props.objecto.nombre}</li>
        <li>{props.elementReact}</li>
        <li>{props.componentReact}</li>
      </ul>
    </div>
  )
}

Propiedades.defaultProps = {
  porDefecto: "Propiedad por defecto"
}

Propiedades.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number
}