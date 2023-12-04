import React, { useState, useEffect } from "react";
import { appointmentList, appointmentAdd } from "../api/appointmentsApi";

import Modal from "react-bootstrap/Modal";

const ModalAppointmentAdd = ({
  showAdd,
  handleCloseAdd,
  appointment,
  setAppointment,
}) => {
  const [dataAppointment, setDataAppointment] = useState(null);

  const handleAdd = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const add = async (e) => {
    e.preventDefault();

    await appointmentAdd(appointment.aid, appointment);

    handleCloseAdd();
  };

  return (
    <Modal showAdd={showAdd} onHide={handleCloseAdd}>
      <Modal.Header closeButton>
        <Modal.Title>Crear turno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={add} className="bg-light text-dark p-3 rounded w-100">
          <section className="row">
            <fieldset className="col-12 mb-3">
              <label htmlFor="date-input" className="form-label fs-4">
                Fecha:
              </label>
              <input
                type="text"
                id="date-input"
                name="date-input"
                className="form-control"
                value={dataAppointment?.appointment.date}
                onChange={handleAdd}
                required
              />
            </fieldset>
            <hr />
            <fieldset className="col-12 mb-3">
              <label htmlFor="detail-input" className="form-label fs-4">
                Detalle:
              </label>
              <textarea
                type="text"
                id="detail-input"
                name="detail-input"
                className="form-control"
                value={dataAppointment?.appointment.detail}
                onChange={handleAdd}
                required
              ></textarea>
            </fieldset>
            <hr />
            <fieldset className="col-12 mb-3">
              <label htmlFor="vet-input" className="form-label fs-4">
                Veterinario:
              </label>
              <select
                className="form-select"
                aria-label="Elegir veterinario"
                onChange={handleAdd}
                id="vet-input"
                name="vet-input"
              >
                <option value="0" disabled>
                  Elegir veterinario
                </option>
                <option value="José Luis Olivares">José Luis Olivares</option>
                <option value="Raúl Álvarez">Raúl Álvarez</option>
              </select>
            </fieldset>
            <hr />
            <fieldset className="col-12 mb-3">
              <label htmlFor="pet-input" className="form-label fs-4">
                Mascota:
              </label>
              <input
                type="text"
                id="pet-input"
                name="pet-input"
                className="form-control"
                value={dataAppointment?.appointment.pet}
                onChange={handleAdd}
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

export default ModalAppointmentAdd;
