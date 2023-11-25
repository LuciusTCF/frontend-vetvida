import React, { useState } from "react";
import useGetUsers from "../hooks/useGetUsers";
import { userDelete } from "../api/usersApi";
import BtnPagination from "../components/BtnPagination";
import ModalUserUpdate from "../components/ModalUserUpdate";
import Table from "react-bootstrap/Table";

const UserAdmin = () => {
  const [page, setPage] = useState(0);
  const dataUsers = useGetUsers(page);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  // console.log(dataUsers);
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
    const validate = confirm("Está seguro que quiere borrar el usuario?");
    if (validate) {
      const resp = await userDelete(id);
      console.log(resp);
    }
  };

  const nextPage = () => {
    const totalPages = dataUsers.total / 10;
    console.log(totalPages);
    if (page + 1 < totalPages) {
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
          <Table striped bordered hover responsive="lg" variant="dark">
            <thead className="text-center">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Télefono</th>
                <th>Rol</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="text-center">
              {dataUsers.users.map((item) => (
                <tr key={item.uid}>
                  <td>{item.uid}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.role}</td>
                  <td>
                    <div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteUser(item.uid)}
                      >
                        X
                      </button>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleShow(item)}
                      >
                        M
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
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
        <BtnPagination nextPage={nextPage} backPage={backPage} />
      </div>
    </div>
  );
};

export default UserAdmin;
