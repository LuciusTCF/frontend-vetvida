import React, { useState, useEffect } from "react";
import { userList } from "../api/usersApi";

import Modal from "react-bootstrap/Modal";

const ModalUserUpdate = ({ show, handleClose, user, setUser }) => {
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const { users } = await userList();
    setDataUser(users);
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

    await productUpdate(user._id, user);

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
            <fieldset className="col-12 ">
              <label htmlFor="Nombre-input" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="Nombre-input"
                name="nombre"
                className="form-control"
                value={user.name}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className="col-12">
              <label htmlFor="description-input" className="form-label">
                Mascota
              </label>
              <textarea
                type="text"
                id="description-input"
                name="descripcion"
                className="form-control"
                value={user.pet}
                onChange={handleChange}
                required
              ></textarea>
            </fieldset>
            <fieldset className="col-12">
              <label htmlFor="categoria-input" className="form-label">
                Rol
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleChange}
                name="categoria"
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
            <fieldset className="col-12 ">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="estado"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked={user.state}
                  onChange={handleChange}
                />
                <label className="form-check-label">Estado</label>
              </div>
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
