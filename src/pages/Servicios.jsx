import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Servicios = () => {
  return (
    <div>
      <h1>Servicios</h1>
      <nav style={{padding: '1rem 3rem'}}>
        <Link to="/servicios"> Servicios / </Link>
        <Link to="/servicios/garantia">Garantia / </Link>
        <Link to="/servicios/lista">Listar / </Link>
        <Link to="/servicios/politicas">Politicas / </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Servicios