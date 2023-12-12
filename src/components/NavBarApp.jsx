import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { NavLink, Link } from "react-router-dom";
import '../css/navbar.css'
import obtenerClima from '../helpers/obtener-clima'

const NavBarApp = ({estadoLogin}) => {
  const [tiempo, setTiempo] = useState(null);


  const clima = () => {
    navigator.geolocation.getCurrentPosition((pos)=>{
      const coords = pos.coords;
      const lat = coords.latitude;
      const long = coords.longitude;

      obtenerClima(lat,long)
      .then((resultado)=>{       
        const {main,weather} = resultado;
       
        setTiempo({
          temp: main.temp,
          clima: weather[0],
        });
        // console.log(tiempo.clima)
      })
      .catch((error) => console.log(error));
    });
  };


  useEffect(()=>{
    clima();
  },[]);

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

    <div className='navbarhome d-flex justify-content-end'>
    {tiempo ? (
              <div className="d-flex gap-2 align-items-center justify-content-center me-4 mb-1">
              <img src={`https://openweathermap.org/img/wn/${tiempo.clima.icon}@2x.png`} className='icon-tiempo' alt={tiempo.clima.description} title={tiempo.clima.description} />

              <span>{Math.round(tiempo.temp)}°C </span>
            </div>
            ) : (
              <div className="spinner-border me-5 mb-2" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
            )
          }   
    </div>

</div>
  )
}

export default NavBarApp