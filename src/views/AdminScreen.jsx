import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { getAuthData } from "../api/auth";

import "../css/admin.css";
import useGetAppointments from "../hooks/useGetAppointments";
import BtnPagination from "../components/BtnPagination";
import Table from "react-bootstrap/Table";

const AdminScreen = () => {
  const [role, setRole] = useState(null);
  const [message, setMessage] = useState(null);
  const token = JSON.parse(localStorage.getItem("token")) || null;
  const [page, setPage] = useState(0);
  const dataInfo = useGetAppointments(page);

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

  const nextPage = () => {
    const totalPages = dataInfo.total;
    if (page + 10 < totalPages) {
      setPage(page + 10);
    }
  };

  const backPage = () => {
    if (page >= 10) {
      setPage(page - 10);
    }
  };

  return (
    <>
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
              <>
                <div className="row">
                  <hr />
                  <div className="text-center my-2">
                    <button type="submit" className="btn btn-primary">
                      <Link className="nav-link" to="/admin/user">
                        Ir a la página de usuarios
                      </Link>
                    </button>
                  </div>
                  <div className="text-center my-2">
                    <button type="submit" className="btn btn-primary">
                      <Link className="nav-link" to="/admin/appointment">
                        Ir a la página de turnos
                      </Link>
                    </button>
                  </div>
                  <hr />
                  <Table striped bordered hover responsive="lg" variant="dark">
                    <thead className="text-center">
                      <tr>
                        <th>Detalle</th>
                        <th>Veterinario</th>
                        <th>Fecha</th>
                        <th>Cliente</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {dataInfo?.appointment.map((item) => (
                        <tr key={item.aid}>
                          <td>{item.detail}</td>
                          <td>{item.veterinarian}</td>
                          <td>{item.date}</td>
                          <td>{`${item?.client?.nameuser} (${item?.client?.emailuser})`}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                <div className="row">
                  <BtnPagination
                    nextPage={nextPage}
                    backPage={backPage}
                    nextPageDisabled={page + 10 > dataInfo?.total && true}
                    backPageDisabled={page == 0 && true}
                  />
                </div>
              </>
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

export default AdminScreen;
