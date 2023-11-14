import React, { useState } from "react";
import useGetUsers from "../hooks/useGetUsers";
import { userDelete } from "../api/usersApi";
import BtnPagination from "../components/BtnPagination";
import ModalUserUpdate from "../components/ModalUserUpdate";

const UserAdmin = () => {
  const [page, setPage] = useState(0);
  const dataUsers = useGetUsers(page);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  // console.log(data);
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
    const totalPages = dataUsers.total / 15;
    console.log(totalPages);
    if (page + 1 < totalPages) {
      setPage(page + 15);
    }
  };

  const backPage = () => {
    if (page >= 15) {
      setPage(page - 15);
    }
  };

  return (
    <>
      <div className="col">
        {dataUsers?.users ? (
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Télefono</th>
                <th>Rol</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {dataUsers.users.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.role}</td>
                  <td>
                    <div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteUser(item._id)}
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
          </table>
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
      <div className="col">
        <BtnPagination nextPage={nextPage} backPage={backPage} />
      </div>
    </>
  );
};

export default UserAdmin;
