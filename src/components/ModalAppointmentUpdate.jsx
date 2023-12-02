import React, { useState, useEffect } from "react";
import { appointmentList, appointmentUpdate } from "../api/appointmentsApi";

import Modal from "react-bootstrap/Modal";

const ModalAppointmentUpdate = ({
  show,
  handleClose,
  appointment,
  setAppointment,
}) => {
  const [dataAppointment, setDataAppointment] = useState(null);

  
 
  useEffect(() => {
    getAppointment();
  }, []);

  const getAppointment = async () => {
    const { appointments } = await appointmentList();
    setDataAppointment(appointments);
  };

  // cuando cambian los inputs
  const handleChange = (e) => {
    if (e.target.name === "state") {
      setAppointment({ ...appointment, [e.target.name]: e.target.checked });
    } else {
      setAppointment({ ...appointment, [e.target.name]: e.target.value });
    }
  };

  // actualizar
  const update = async (e) => {
    e.preventDefault();

    await appointmentUpdate(appointment._id, appointment);

    handleClose();
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={update}
          className="bg-light text-dark p-3 rounded w-100"
        >
          <section className="row">
            <fieldset className="col-12 ">
              <label htmlFor="date-input" className="form-label">
                Fecha
              </label>
              <input
                type="date"
                id="date-input"
                name="date"
                className="form-control"
                value={appointment.date}
                onChange={handleChange}
                required
              />
            </fieldset>
            <fieldset className="col-12">
              <label htmlFor="detail-input" className="form-label">
                Detalle
              </label>
              <textarea
                type="text"
                id="detail-input"
                name="detail"
                className="form-control"
                value={appointment.detail}
                onChange={handleChange}
                required
              ></textarea>
            </fieldset>
            <fieldset className="col-12 ">
              <label htmlFor="vet-input" className="form-label">
                Veterinario
              </label>
              <input
                type="text"
                id="vet-input"
                name="vet"
                className="form-control"
                value={appointment.veterinarian}
                onChange={handleChange}
                required
              />
            </fieldset>
            <fieldset className="col-12 ">
              <label htmlFor="pet-input" className="form-label">
                Mascota
              </label>
              <input
                type="text"
                id="pet-input"
                name="pet"
                className="form-control"
                value={appointment.pet}
                onChange={handleChange}
                required
              />
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

export default ModalAppointmentUpdate;
