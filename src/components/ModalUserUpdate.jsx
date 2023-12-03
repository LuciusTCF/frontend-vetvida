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

  // actualizacion mascota
  const handlePetChange = (e, petIndex) => {
    const updatedPets = [...user.pet];
    updatedPets[petIndex] = {
      ...updatedPets[petIndex],
      [e.target.name]: e.target.value
    };
    setUser({ ...user, pet: updatedPets });
  };
  
  
  

  const update = async (e) => {
    e.preventDefault();

console.log(user)



    await userUpdate(user.uid, user);

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
    <fieldset className="col-12  mb-3">
              <label htmlFor="name-input" className="form-label fs-4">
                Mascotas:
              </label>
              </fieldset>
              {/* Modificación para mostrar campos de mascotas vacíos si no hay mascotas registradas */}
              {(!user.pet || user.pet.length === 0) && (
            <div className="row">
              <div className="col-6 mb-3">
                <label htmlFor={`pet-name-input-0`} className="form-label ">
                  Nombre:
                </label>
                <input
                  type="text"
                  id={`pet-name-input-0`}
                  name="namepet"
                  className="form-control"
                  value={user.namepet}
                  onChange={(e) => handlePetChange(e, 0)}
                  required
                />
                </div>
            </div>
          )}
              {/* para renderizar campos cuando hay mascotas cargadas*/}
              {/* {user.pet && user.pet.length > 0 && user.pet.map((item, index) => (
                <div key={item} className="mb-3 border p-3"> */}

              {user?.pet.map((item, index) => (
                <div key={index}>

                  <h6>{`Mascota ${index + 1}`}</h6>
                  <div className="col-12">
                    <label
                      htmlFor={`pet-name-input-${index}`}
                      className="form-label align-self-center"
                    >
                      Nombre:
                    </label>
                    <input
                      type="text"
                      id={`pet-name-input-${index}`}
                      name="namepet"
                      className="form-control"
                      value={item.namepet}
                      onChange={(e) => handlePetChange(e, index)}
                      required
                    />
                  </div>
                  <div className="col-12 mt-1">
                    <label
                      htmlFor={`pet-specie-input-${index}`}
                      className="form-label "
                    >
                      Especie:
                    </label>
                    <input
                      type="text"
                      id={`pet-specie-input-${index}`}
                      name="specie"
                      className="form-control"
                      value={item.specie}
                      onChange={(e) => handlePetChange(e, index)}
                      required
                    />
                  </div>
                  <div className="col-12 mt-1">
                    <label
                      htmlFor={`pet-breed-input-${index}`}
                      className="form-label align-self-center"
                    >
                      Raza:
                    </label>
                    <input
                      type="text"
                      id={`pet-breed-input-${index}`}
                      name="breed"
                      className="form-control"
                      value={item.breed}
                      onChange={(e) => handlePetChange(e, index)}
                      required
                    />
                  </div>
                  <div className="col-12 mt-1">
                    <label
                      htmlFor={`pet-age-input-${index}`}
                      className="form-label"
                    >
                      Edad:
                    </label>
                    <input
                      type="text"
                      id={`pet-age-input-${index}`}
                      name="age"
                      className="form-control"
                      value={item.age}
                      onChange={(e) => handlePetChange(e, index)}
                      required
                    />
                  </div>
                </div>
              ))}
            
            {/* </fieldset> */}
            {/* ))} */}
  
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
                {user?.length > 0 &&
                  user.map((item, index) => (
                    <option key={index} value={index}>
                      {item.role}

                    </option>
                  ))}
          //     </select>
          //   </fieldset>
          // </section>
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
