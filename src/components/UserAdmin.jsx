import React, { useState } from "react";
import useGetUsers from "../hooks/useGetUsers";
import BtnPagination from "../components/BtnPagination";
import ModalUserUpdate from "../components/ModalUserUpdate";

const UserAdmin = () => {
  const [page, setPage] = useState(0);
  const { data } = useGetUsers(page);
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
    const validate = confirm("Está seguro que quiere borrar el usuario?");
    if (validate) {
      const resp = await userDelete(id);
      console.log(resp);
    }
  };

  const nextPage = () => {
    const totalPages = data.total / 15;
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
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Télefono</th>
              <th>Rol</th>
              <th>Mascotas</th>
              <th>Mascotas</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data?.users.length > 0 &&
              data.users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>{JSON.stringify(user.pet)}</td>
                  <td>
                    {user.pet.map((pet) => {
                      <ul>
                        <li>Nombre: {pet.name}</li>
                        <li>Especie: {pet.specie}</li>
                        <li>Raza: {pet.breed}</li>
                        <li>Edad: {pet.age}</li>
                      </ul>;
                    })}
                  </td>
                  <td>
                    <div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteUser(user._id)}
                      >
                        X
                      </button>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleShow(user)}
                      >
                        M
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

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
