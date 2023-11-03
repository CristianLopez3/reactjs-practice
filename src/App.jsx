import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import { Header } from './components/Header';
import Menu from './components/Menu';
import { Error404 } from './pages/Error404';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';



function App() {


  return (
    <>
      <div>

        <Header />

        <BrowserRouter>
        <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/acerca' element={<Acerca />} />
            <Route path='/about' element={<Navigate to="/acerca" />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/productos/:id' element={<ProductoDetalle />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
