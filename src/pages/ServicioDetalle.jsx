import { useParams } from 'react-router-dom';


const ServicioDetalle = ({ servicios}) => {

  
  const  obtenerProducto = (idParam) => servicios.find((servicio) => servicio.id.toString() === idParam);
  

  const { id } = useParams();
  const producto = obtenerProducto(id);

  
  return (
    <div>
      <h2 style={{fontSize: '1.5rem', color: 'orangered'}}>Detalle del producto</h2>
      <h3>Nombre: {producto.nombre}</h3>
      <h4 style={{display: 'inline-block'}}>Id: {producto.id}</h4>
      <h4>Precio: {producto.precio}</h4>
    </div>
  )
}

export default ServicioDetalle;