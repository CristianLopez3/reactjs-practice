import { useState } from 'react'
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import ServiciosGarantia from './pages/ServiciosGarantia';
import ServiciosList from './pages/ServiciosList';
import ServiciosPoliticas from './pages/ServiciosPoliticas';
import ServiciosHome from './pages/ServiciosHome';
import ServicioDetalle from './pages/ServicioDetalle';



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

  const [servicios, setServicios] = useState([
    { id: 1, nombre: "servicio 1", precio: 1000 },
    { id: 2, nombre: "servicio 2", precio: 2000 },
    { id: 3, nombre: "servicio 3", precio: 3000 },
    { id: 4, nombre: "servicio 4", precio: 4000 },
    { id: 5, nombre: "servicio 5", precio: 5000 }
  ]);

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
              <Route index element={<ServiciosHome />}/>
              <Route path="garantia" element={<ServiciosGarantia />}/>
              <Route path="lista" element={<ServiciosList servicios={servicios} />}/>
              <Route path=":id" element={
                <>
                  <ServiciosList servicios={servicios}/>
                  <ServicioDetalle servicios={servicios}/>
                </>
              } />
              <Route path="politicas" element={<ServiciosPoliticas />}/>
            </Route>


            <Route path='*' element={<Error404 />} />

          </Routes>
        </BrowserRouter>

        <hr />

        <h2>Rutas con hash router</h2>
        {/* <HashRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/acerca' element={<Acerca />} />
            <Route path='/about' element={<Navigate to="/acerca" />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/productos' element={<Productos productos={productos} />} />
            <Route path='/productos/:id' element={<ProductoDetalle productos={productos} />} />

            <Route path='/servicios' element={<Servicios />} >
              <Route index element={<ServiciosHome />}/>
              <Route path="garantia" element={<ServiciosGarantia />}/>
              <Route path="lista" element={<ServiciosList servicios={servicios} />}/>
              <Route path=":id" element={
                <>
                  <ServiciosList servicios={servicios}/>
                  <ServicioDetalle servicios={servicios}/>
                </>
              } />
              <Route path="politicas" element={<ServiciosPoliticas />}/>
            </Route>


            <Route path='*' element={<Error404 />} />

          </Routes>
        </HashRouter> */}

      </div>
    </>
  )
}

export default App
