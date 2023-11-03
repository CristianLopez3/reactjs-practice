import { useParams, useNavigate } from 'react-router-dom';


const ProductoDetalle = () => {

  
  const  obtenerProducto = (idParam) => {
    const productos = [
      { id: 1, nombre: "jabon", precio: 22.50 },
      { id: 2, nombre: "tela", precio: 32.50 },
      { id: 3, nombre: "escoba", precio: 2.50 },
      { id: 4, nombre: "escritorio", precio: 123.50 },
      { id: 5, nombre: "teclado", precio: 53.50 }
    ]
    return productos.find((producto) => producto.id.toString() === idParam);
  }

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