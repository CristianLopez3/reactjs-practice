import React from 'react'
import { Outlet } from 'react-router-dom'

const Servicios = () => {
  return (
    <div>
      <h1>Servicios</h1>
      <Outlet />
    </div>
  )
}

export default Servicios