import React, { useState } from "react";
import useGetUsers from "../hooks/useGetUsers";
import { userDelete } from "../api/usersApi";
import BtnPagination from "../components/BtnPagination";
import ModalUserUpdate from "../components/ModalUserUpdate";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";

const UserAdmin = () => {
  const [page, setPage] = useState(0);
  const dataUsers = useGetUsers(page, 10);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const handleClose = () => {
    setUser(null);
    setShow(false);
  };

  const handleShow = (data) => {
    setUser(data);
    setShow(true);
  };

  const modifyUser = (data) => {
    setUser(data);
  };

  const deleteUser = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "¿Desea eliminar usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, borrarlo",
      cancelButtonText: "Cancelar",
    });

    if (isConfirmed) {
      const resp = await userDelete(id);
    }
  };

  const nextPage = () => {
    const totalPages = dataUsers.total;
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
    <div className="col">
      <div className="row">
        <h3 className="my-3">Usuarios</h3>
        {dataUsers?.users ? (
          <div>
            <Table striped bordered hover responsive="lg" variant="dark">
              <thead className="text-center">
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Télefono</th>
                  <th>Rol</th>
                  <th></th>
                </tr>
              </thead>

              <tbody className="text-center">
                {dataUsers.users.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.role}</td>
                    <td>
                      <div>
                        <button
                          disabled={item.role === "ADMIN_ROLE" ? true : false}
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteUser(item.uid)}
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                        <button
                          disabled={item.role === "ADMIN_ROLE" ? true : false}
                          className="btn btn-warning btn-sm"
                          onClick={() => handleShow(item)}
                        >
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <h3>Cargando data...</h3>
        )}

        {user && (
          <ModalUserUpdate
            show={show}
            handleClose={handleClose}
            user={user}
            setUser={modifyUser}
          />
        )}
      </div>
      <div className="row">
        <BtnPagination
          nextPage={nextPage}
          backPage={backPage}
          nextPageDisabled={page + 10 > dataUsers?.total && true}
          backPageDisabled={page == 0 && true}
        />
      </div>
    </div>
  );
};

export default UserAdmin;
