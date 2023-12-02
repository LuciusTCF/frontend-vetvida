import React, { useState, useEffect } from "react";
import { userAdd, userList, userUpdate } from "../api/usersApi";

import Modal from "react-bootstrap/Modal";

const ModalUserUpdate = ({ show, handleClose, user, setUser }) => {
  const [dataUser, setDataUser] = useState(null);
  const [dataPet, setDataPet] = useState(null);

  useEffect(() => {
    getUser();
  }, [dataUser]);

  const getUser = async () => {
    const { user } = await userList();
    setDataUser(user);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePetChange = (e, petIndex) => {
    const updatedPets = [...user.pet];
    updatedPets[petIndex] = {
      ...updatedPets[petIndex],
      [e.target.name]: e.target.value,
    };
    setUser({ ...user, pet: updatedPets });
  };

  const update = async (e) => {
    e.preventDefault();

    await userUpdate(user.uid, user);

    handleClose();
  };

  // const handleAdd = () => {
  //   setDataUser({
  //     ...user.pet,
  //     [user.pet.length]: {
  //       namepet: "",
  //       specie: "",
  //       breed: "",
  //       age: "",
  //     },
  //   });
  // };
  const addPet = async (e) => {
    e.preventDefault();
    // setDataPet({
    //   ...dataPet,
    //   [user.pet.length]: {
    //     namepet: "",
    //     specie: "",
    //     breed: "",
    //     age: "",
    //   },
    // });

    user.pet.push({
      namepet: "",
      specie: "",
      breed: "",
      age: "",
    });

    await userUpdate(user.uid, user);
    console.log(user);
    console.log(user.pet);
  };

  const deletePet = async (e, index) => {
    e.preventDefault();
    user.pet.splice(index, 1);

    await userUpdate(user.uid, user);
    console.log(user);
    console.log(user.pet);
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
                aria-label={user.name}
                value={user.name}
                onChange={handleChange}
                required
              />
            </fieldset>
            <hr />
            <fieldset className="col-12 mb-3">
              <p className="fs-4">Mascotas:</p>
              {user?.pet.map((item, index) => (
                <div key={index}>
                  <h6 className="mt-3">{`Mascota ${index + 1}`}</h6>
                  <button
                    className="btn btn-danger btn-sm mb-3"
                    onClick={(e) => deletePet(e, index)}
                  >
                    Eliminar mascota
                  </button>
                  <div className="d-flex">
                    <label
                      htmlFor={`pet-name-input${index + 1}`}
                      className="form-label align-self-center"
                    >
                      Nombre:
                    </label>
                    <input
                      type="text"
                      id={`pet-name-input${index + 1}`}
                      name="namepet"
                      className="form-control"
                      value={item.namepet}
                      onChange={(e) => handlePetChange(e, index)}
                      required
                    />
                  </div>
                  <div className="d-flex">
                    <label
                      htmlFor={`pet-specie-input${index + 1}`}
                      className="form-label align-self-center"
                    >
                      Especie:
                    </label>
                    <input
                      type="text"
                      id={`pet-specie-input${index + 1}`}
                      name="specie"
                      className="form-control"
                      value={item.specie}
                      onChange={(e) => handlePetChange(e, index)}
                      required
                    />
                  </div>
                  <div className="d-flex">
                    <label
                      htmlFor={`pet-breed-input${index + 1}`}
                      className="form-label align-self-center"
                    >
                      Raza:
                    </label>
                    <input
                      type="text"
                      id={`pet-breed-input${index + 1}`}
                      name="breed"
                      className="form-control"
                      value={item.breed}
                      onChange={(e) => handlePetChange(e, index)}
                      required
                    />
                  </div>
                  <div className="d-flex">
                    <label
                      htmlFor={`pet-age-input${index + 1}`}
                      className="form-label align-self-center"
                    >
                      Edad:
                    </label>
                    <input
                      type="text"
                      id={`pet-age-input${index + 1}`}
                      name="age"
                      className="form-control"
                      value={item.age}
                      onChange={(e) => handlePetChange(e, index)}
                      required
                    />
                  </div>
                </div>
              ))}
              <div className="text-center my-2">
                <button onClick={addPet} className="btn btn-success">
                  Añadir mascota
                </button>
              </div>
            </fieldset>
            <hr />
            <fieldset className="col-12 mb-3">
              <label htmlFor="role-input" className="form-label fs-4">
                Rol:
              </label>
              <select
                className="form-select"
                aria-label="Elegir Rol"
                onChange={handleChange}
                id="role-input"
                name="role"
              >
                <option value="" disabled>
                  Elegir rol
                </option>
                <option value="ADMIN_ROLE">Admin</option>
                <option value="USER_ROLE_NP">Usuario sin plan</option>
                <option value="USER_ROLE_P1">Usuario con plan Plata</option>
                <option value="USER_ROLE_P2">Usuario con plan Bronce</option>
                <option value="USER_ROLE_P3">Usuario con plan Oro</option>
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
