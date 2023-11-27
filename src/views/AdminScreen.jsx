// import React from "react";
import UserAdmin from "../components/UserAdmin";
import AppointmentAdmin from "../components/AppointmentAdmin";
// importar Navigate en caso de no tener el token válido:
import { Navigate } from "react-router-dom";
// Importando la funcion para obtenr datos:
import { getAuthData } from "../api/auth";
// importado por Ale
import { useState,useEffect } from "react"; 
// importado por ale
import { Link } from "react-router-dom";
import "../css/admin.css";

const AdminScreen = () => {

  const [role, setRole] = useState(null);
  const [mensaje, setMensaje] = useState(null);
  const token = JSON.parse(localStorage.getItem("token")) || null;

  useEffect(() => {
    queRolEs();
  }, []);

  const queRolEs = async () => {
    const respuesta = await getAuthData(token);

    if (respuesta?.msg) {
      setMensaje(respuesta.msg);
    } else {
      setRole(respuesta.role);
    }
    console.log(respuesta);
  };
  return (
    <>{mensaje ? (
      <div className="container">
        <div className="row pt-5">
          <div className="col">
            <h3>{mensaje}</h3>
            <Link className="nav-link" to="/login">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    ) : role ? (
      role === "ADMIN_ROLE" ? (
    <div className="container-fluid row  main-admin">
      <div className="col pt-5 tables">
        <div className="row">
          <h1>Administrador</h1>
        </div>
        <div className="row">
          <hr />
          <UserAdmin />
          <hr />
          <AppointmentAdmin />
        </div>
      </div>
      </div>
      ) : (
          <Navigate to="/" />
        )) : (
        <div className="container">
          <div className="row pt-5">
            <div className="col">
              <h3>Esperando respuesta...</h3>
            </div>
          </div>
        </div>
      )}
      </>
  );
};

export default AdminScreen;
