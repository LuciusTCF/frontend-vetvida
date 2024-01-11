import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import "../css/navbar.css";
import obtenerClima from "../helpers/obtener-clima";
import { getAuthData } from "../api/auth";

const NavBarApp = ({ estadoLogin }) => {
  const [tiempo, setTiempo] = useState(null);

  const clima = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords;
      const lat = coords.latitude;
      const long = coords.longitude;

      obtenerClima(lat, long)
        .then((resultado) => {
          const { main, weather } = resultado;

          setTiempo({
            temp: main.temp,
            clima: weather[0],
          });
        })
        .catch((error) => console.log(error));
    });
  };

  useEffect(() => {
    clima();
  }, []);


  const [role, setRole] = useState(null);
  const [message, setMessage] = useState(null);
  const token = JSON.parse(localStorage.getItem("token")) || null;

  const whatRole = async () => {
    const resp = await getAuthData(token);

    if (resp?.msg) {
      setMessage(resp.msg);
    } else {
      setRole(resp.role);
    }
    
  };
  
  useEffect(() => {
    whatRole();
  }, []);


  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg  navbarhome">
        <div className="container-fluid logonav">
          <Link className="nav-link" to="/">
            <img src={logo} alt="logo VetVida" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/products"
                >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/plans">
                  Planes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/appointmentuser"
                >
                  Turnos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/contact">
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                  Nosotros
                </NavLink>
              </li>
              {(localStorage.getItem("token") && (role === "ADMIN_ROLE")) && (
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/admin">
                    Administrador
                  </NavLink>
                </li>
              )}
            </ul>

            {!localStorage.getItem("token") && (
              <Link className="btn btn-outline-dark mx-1 btnNav" to="/register">
                Register
              </Link>
            )}

            <Link className="btn btn-outline-dark btnNav" to="/login">
              {localStorage.getItem("token") ? "LogOut" : "LogIn"}
            </Link>
          </div>
        </div>
      </nav>

      <div className="navbarhome d-flex justify-content-end">
        {tiempo ? (
          <div className="d-flex gap-2 align-items-center justify-content-center me-4 mb-1">
            <img
              src={`https://openweathermap.org/img/wn/${tiempo.clima.icon}@2x.png`}
              className="icon-tiempo"
              alt={tiempo.clima.description}
              title={tiempo.clima.description}
            />

            <span>{Math.round(tiempo.temp)}°C </span>
          </div>
        ) : (
          <div className="spinner-border me-5 mb-2" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBarApp;
