import React, { useState, useEffect } from "react";
import { userList, userUpdate } from "../api/usersApi";

import Modal from "react-bootstrap/Modal";

const ModalUserUpdate = ({ show, handleClose, user, setUser }) => {
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const { user } = await userList();
    setDataUser(user);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const update = async (e) => {
    e.preventDefault();

    await userUpdate(user._id, console.log(user));

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar {user?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={update}
          className="bg-light text-dark p-3 rounded w-100"
        >
          <section className="row">
            <fieldset className="col-12 mb-3">
              <label htmlFor="name-input" className="form-label fs-4">
                Nombre de usuario:
              </label>
              <input
                type="text"
                id="name-input"
                name="name"
                className="form-control"
                value={user.name}
                onChange={handleChange}
                required
              />
            </fieldset>
            <hr />
            <fieldset className="col-12 mb-3">
              <label htmlFor="name-input" className="form-label fs-4">
                Mascotas:
              </label>
              {user?.pet.map((item, index) => (
                <div>
                  <h6>{`Mascota ${index + 1}`}</h6>
                  <div className="d-flex">
                    <label
                      htmlFor="pet-input"
                      className="form-label align-self-center"
                    >
                      Nombre:
                    </label>
                    <input
                      type="text"
                      id="pet-input"
                      name="pet"
                      className="form-control"
                      value={item.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="d-flex">
                    <label
                      htmlFor="pet-input"
                      className="form-label align-self-center"
                    >
                      Especie:
                    </label>
                    <input
                      type="text"
                      id="pet-input"
                      name="pet"
                      className="form-control"
                      value={item.specie}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="d-flex">
                    <label
                      htmlFor="pet-input"
                      className="form-label align-self-center"
                    >
                      Raza:
                    </label>
                    <input
                      type="text"
                      id="pet-input"
                      name="pet"
                      className="form-control"
                      value={item.breed}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="d-flex">
                    <label
                      htmlFor="pet-input"
                      className="form-label align-self-center"
                    >
                      Edad:
                    </label>
                    <input
                      type="text"
                      id="pet-input"
                      name="pet"
                      className="form-control"
                      value={item.age}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              ))}
            </fieldset>
            <hr />
            <fieldset className="col-12 mb-3">
              <label htmlFor="role-input" className="form-label fs-4">
                Rol:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleChange}
                name="role"
              >
                <option value="0">Elegir Rol</option>
                <option value="ADMIN_ROLE">Admin</option>
                <option value="USER_ROLE_NP">Usuario sin plan</option>
                <option value="USER_ROLE_P1">Usuario con plan Plata</option>
                <option value="USER_ROLE_P2">Usuario con plan Bronce</option>
                <option value="USER_ROLE_P3">Usuario con plan Oro</option>
                {/* {user?.length > 0 &&
                  user.map((item, index) => (
                    <option key={index} value={index}>
                      {item.role}
                    </option>
                  ))} */}
              </select>
            </fieldset>
          </section>
          <div className="text-end mt-2">
            <button type="submit" className="btn btn-primary">
              Guardar cambios
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalUserUpdate;
