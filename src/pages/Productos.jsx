import {Link} from 'react-router-dom';

const Productos = () => {

  const productos = [
    { id: 1, nombre: "jabon", precio: 22.50 },
    { id: 2, nombre: "tela", precio: 32.50 },
    { id: 3, nombre: "escoba", precio: 2.50 },
    { id: 4, nombre: "escritorio", precio: 123.50 },
    { id: 5, nombre: "teclado", precio: 53.50 }
  ]

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map((el) => {
          return (
            <li key={el.id}>
              {el.nombre} - <Link to={`/productos/${el.id}`}><b>Ver detalle</b></Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Productos