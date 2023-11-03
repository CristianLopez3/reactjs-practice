import {Link} from 'react-router-dom';

const Productos = ({productos}) => {

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