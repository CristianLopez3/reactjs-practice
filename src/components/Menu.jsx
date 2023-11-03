import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (

    <>
      <nav>
        <Link to="/">Home / </Link>
        <Link to="/acerca">Acerca / </Link>
        <Link to="/about">About / </Link>
        <Link to="/contacto">Contacto / </Link>
        <Link to="/productos">Productos / </Link>
        <Link to="/inexistente">Error 404 / </Link>
      </nav>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link" : null}>Home  / </NavLink>
        <NavLink to="/acerca" className={({ isActive }) => isActive ? "nav-link" : null}>Acerca  / </NavLink>
        <NavLink to="/contacto" className={({ isActive }) => isActive ? "nav-link" : null}>Contacto  /  </NavLink>
      </nav>

    </>
  )
}

export default Menu;
