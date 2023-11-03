import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'

function Acerca() {
  return (
    <>
      <h2>acerca</h2>
      <a href="/">home</a>
    </>

  )
}

function App() {


  return (
    <>
      <div>
        <h1>React Route</h1>

        <BrowserRouter>
          <nav>
            <Link to="/">Home / </Link> 
            <Link to="/acerca">Acerca</Link>
          </nav>
          <Routes>
            <Route path='/' element={<h2>home</h2>} />
            <Route path='/acerca' element={<Acerca />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
