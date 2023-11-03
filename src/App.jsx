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
import Servicios from './pages/Servicios';



function App() {

  const [productos, setProductos] = useState(
    [
      { id: 1, nombre: "producto 1", precio: 22.50 },
      { id: 2, nombre: "producto 2", precio: 32.50 },
      { id: 3, nombre: "producto 3", precio: 2.50 },
      { id: 4, nombre: "producto 4", precio: 123.50 },
      { id: 5, nombre: "producto 5", precio: 53.50 }
    ]
  );

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
            <Route path='/productos' element={<Productos productos={productos} />} />
            <Route path='/productos/:id' element={<ProductoDetalle productos={productos} />} />

            <Route path='/servicios' element={<Servicios />} >
              <Route index element={<h2>Cuerpo de los servicios </h2>}/>
              <Route path="/servicios/garantia" element={<h2>Garantia de nuestros servicios</h2>}/>
              <Route path="/servicios/lista" element={<h2>Lista de nuestros servicios</h2>}/>
            </Route>


            <Route path='*' element={<Error404 />} />

          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
