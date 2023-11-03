import { useParams, useNavigate } from 'react-router-dom';


const ProductoDetalle = ({productos}) => {

  
  const  obtenerProducto = (idParam) => productos.find((producto) => producto.id.toString() === idParam);
  

  const handleGoBack = () => navigate(-1);

  const { id } = useParams();
  const navigate = useNavigate();
  const producto = obtenerProducto(id);

  
  return (
    <div>
      <h2 style={{fontSize: '1.5rem', color: 'orangered'}}>Detalle del producto</h2>
      <h3>Nombre: {producto.nombre}</h3>
      <h4>Id: {producto.id}</h4>
      <h5>Precio: {producto.precio}</h5>
      <button onClick={handleGoBack}>Regresar</button>
    </div>
  )
}

export default ProductoDetalle;