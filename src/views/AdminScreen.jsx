import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { obtainDataAuth } from "../api/auth";
import UserAdmin from "../components/UserAdmin";
import AppointmentAdmin from "../components/AppointmentAdmin";
import "../css/admin.css";

const AdminScreen = () => {
  const [role, setRole] = useState(null);
  const [message, setMessage] = useState(null);
  const token = JSON.parse(localStorage.getItem("token")) || null;

  useEffect(() => {
    whatRole();
  }, []);

  const whatRole = async () => {
    const resp = await obtainDataAuth(token);

    if (resp?.msg) {
      setMessage(resp.msg);
    } else {
      setRole(resp.role);
    }
    // console.log(resp);
  };

  return (
    <>
      {/* {message ? (
        <div className="container">
          <div className="row pt-5">
            <div className="col">
              <h3>{message}</h3>
              <Link className="nav-link" to="/login">
                Iniciar Seción
              </Link>
            </div>
          </div>
        </div>
      ) : role ? (
        role === "ADMIN_ROLE" ? ( */}
      <div className="container-fluid row main-admin mx-0">
        <div className="col pt-5 tables">
          <div className="row">
            <h1>Bienvenido a la página de administrador</h1>
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
                <UserAdmin />
                <hr />
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

      {/* {message ? (
        <div className="container">
          <div className="row pt-5">
            <div className="col">
              <h3>{message}</h3>
              <Link className="nav-link" to="/login">
                Iniciar Seción
              </Link>
            </div>
          </div>
        </div>
      ) : role ? (
        role === "ADMIN_ROLE" ? (
          <div className="container-fluid row main-admin mx-0">
            <div className="col pt-5 tables">
              <div className="row">
                <h1>Bienvenido a la página de administrador</h1>
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
        )
      ) : (
        <div className="container">
          <div className="row pt-5">
            <div className="col">
              <h3>Esperando respuesta...</h3>
            </div>
          </div>
        </div>
      )} */}

      {/* <div className="container-fluid row main-admin">
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
    </div> */}
    </>
  );
};

export default AdminScreen;
