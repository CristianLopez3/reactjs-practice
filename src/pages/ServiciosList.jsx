import React from 'react'
import { Link } from 'react-router-dom'

const ServiciosList = ({servicios}) => {
  return (
    <div>
      <h2>Nuestra lista de servicios</h2>
      <ul>
        {servicios.map((servicio) => {
          return (
            <li key={servicio.id}>
              {servicio.nombre} - <Link to={`/servicios/${servicio.id}`}><b>{servicio.nombre}</b></Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ServiciosList