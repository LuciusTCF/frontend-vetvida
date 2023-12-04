import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { getAuthData } from "../api/auth";
import AppointmentAdmin from "../components/AppointmentAdmin";
import "../css/admin.css";

const AppointmentScreen = () => {
  const [role, setRole] = useState(null);
  const [message, setMessage] = useState(null);
  const token = JSON.parse(localStorage.getItem("token")) || null;

  useEffect(() => {
    whatRole();
  }, []);

  const whatRole = async () => {
    const resp = await getAuthData(token);

    if (resp?.msg) {
      setMessage(resp.msg);
    } else {
      setRole(resp.role);
    }
  };

  return (
    <>
      <div className="container-fluid row main-admin mx-0">
        <div className="col pt-5 tables">
          <div className="row">
            <h1>Bienvenido a la página de turnos</h1>
          </div>

          {message ? (
            <div className="row pt-5">
              <div className="col">
                <h3>{message}</h3>
                <Link className="nav-link" to="/login">
                  Iniciar Seción
                </Link>
              </div>
            </div>
          ) : role ? (
            role === "ADMIN_ROLE" ? (
              <div className="row">
                <hr />
                <div className="text-center my-2">
                  <button type="submit" className="btn btn-primary">
                    <Link className="nav-link" to="/admin">
                      Ir a la página de administrador
                    </Link>
                  </button>
                </div>
                <AppointmentAdmin />
              </div>
            ) : (
              <Navigate to="/" />
            )
          ) : (
            <div className="row pt-5">
              <div className="col">
                <h3>Esperando respuesta...</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppointmentScreen;
