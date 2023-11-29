import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, Link } from "react-router-dom";
import '../css/navbar.css'

const NavBarApp = ({estadoLogin}) => {
  return (
  <div className="sticky-top">
    <nav className="navbar navbar-expand-lg  navbarhome">
      <div className="container-fluid logonav">
        <Link to='/'>
          <img src={logo} alt="logo VetVida" />
        </Link> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="#">Nosotros</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="#">Contacto</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="#">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="#">Planes</NavLink>
            </li>
            {estadoLogin && <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/admin">Administrador</NavLink>
            </li>}
          </ul>
       
          <Link className='btn btn-outline-dark' to='/login'>{estadoLogin ? 'LogOut' : 'LogIn'}</Link>
        </div>
        
      </div>
    </nav>

</div>
  )
}

export default NavBarApp