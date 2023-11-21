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
    if (e.target.name === "state") {
      setUser({ ...user, [e.target.name]: e.target.checked });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const update = async (e) => {
    e.preventDefault();

    await userUpdate(user._id, user);

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
                <div key={item._id}>
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
            <fieldset className="col-12">
              <label htmlFor="role-input" className="form-label fs-4">
                Rol:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleChange}
                name="role"
              >
                <option value="">Elegir Rol</option>
                {dataUser?.length > 0 &&
                  dataUser.map((user) => (
                    <option key={user._id} value={user._id}>
                      {user.role}
                    </option>
                  ))}
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
