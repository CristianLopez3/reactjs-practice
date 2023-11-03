import { useParams, useNavigate } from 'react-router-dom';


const ProductoDetalle = ({productos}) => {

  
  const  obtenerProducto = (idParam) => productos.find((producto) => producto.id.toString() === idParam);
  

  const handleGoBack = () => navigate(-1);

  const { id } = useParams();
  const navigate = useNavigate();
  const producto = obtenerProducto(id);

  
  return (
    <div>
      <h1>Detalle del producto</h1>
      <h2>Nombre: {producto.nombre}</h2>
      <h3>Id: {producto.id}</h3>
      <h4>Precio: {producto.precio}</h4>
      <button onClick={handleGoBack}>Regresar</button>
    </div>
  )
}

export default ProductoDetalle;