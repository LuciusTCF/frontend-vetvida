import React, { useState } from "react";
import useGetAppointments from "../hooks/useGetAppointments";
import { appointmentAdd, appointmentDelete } from "../api/appointmentsApi";
import BtnPagination from "../components/BtnPagination";
import ModalAppointmentUpdate from "../components/ModalAppointmentUpdate";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";

const AppointmentAdmin = () => {
  const [page, setPage] = useState(0);
  const dataInfo = useGetAppointments(page);
  const [show, setShow] = useState(false);

  const [appointment, setAppointment] = useState(null);
  const [dataAppointment, setDataAppointment] = useState(null);
  const handleClose = () => {
    setAppointment(null);
    setShow(false);
  };

  const handleShow = (data) => {
    setAppointment(data);
    setShow(true);
  };

  const modifyAppointment = (data) => {
    setAppointment(data);
    console.log(appointment);
  };

  // **
  const deleteAppointment = async (id) => {
    // Utiliza SweetAlert2 para mostrar un cuadro de diálogo de confirmación
    const { isConfirmed } = await Swal.fire({
      title: "¿Desea eliminar el turno?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, borrarlo",
      cancelButtonText: "Cancelar",
    });

    if (isConfirmed) {
      const resp = await appointmentDelete(id);
      console.log(resp);
      // Aquí puedes realizar más acciones después de la confirmación
    }
  };

  const nextPage = () => {
    const totalPages = dataInfo.total;
    console.log(totalPages);
    if (page + 10 < totalPages) {
      setPage(page + 10);
    }
  };

  const backPage = () => {
    if (page >= 10) {
      setPage(page - 10);
    }
  };

  const handleAdd = (e) => {
    if (e.target.name === "date") {
      setDataAppointment({
        ...dataAppointment,
        [e.target.name]: e.target.value + ":00.000Z",
      });
    } else if (e.target.name === "_id") {
      setDataAppointment({
        ...dataAppointment,
        user: { [e.target.name]: e.target.value },
      });
    } else {
      setDataAppointment({
        ...dataAppointment,
        [e.target.name]: e.target.value,
      });
    }
    console.log(appointment);
    console.log(dataAppointment);
  };

  const add = async (e) => {
    e.preventDefault();
    console.log(dataAppointment);
    await appointmentAdd(dataAppointment);
    // console.log(appointment);
    // console.log(dataAppointment);
  };

  return (
    <div className="col">
      <div className="row">
        {dataInfo?.appointment ? (
          <>
            <form
              onSubmit={add}
              className="bg-light text-dark p-3 rounded w-100"
            >
              <h3>Crear turno</h3>
              <section className="row">
                <fieldset className="col-12 mb-3">
                  <label htmlFor="date-input" className="form-label fs-4">
                    Fecha:
                  </label>
                  <input
                    type="datetime-local"
                    id="date-input"
                    name="date"
                    className="form-control"
                    value={dataInfo?.appointment?.date}
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
                    name="detail"
                    className="form-control"
                    value={dataInfo?.appointment?.detail}
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
                    name="veterinarian"
                  >
                    <option value="0" disabled>
                      Elegir veterinario
                    </option>
                    <option value="José Luis Olivares">
                      José Luis Olivares
                    </option>
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
                    name="pet"
                    className="form-control"
                    value={dataInfo?.appointment?.pet}
                    onChange={handleAdd}
                    required
                  />
                </fieldset>
                <hr />
                <fieldset className="col-12 mb-3">
                  <label htmlFor="user-input" className="form-label fs-4">
                    Usuario:
                  </label>
                  <input
                    type="text"
                    id="user-input"
                    name="_id"
                    className="form-control"
                    value={dataInfo?.appointment?.user?._id}
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
            <hr />
            <h3 className="my-3">Turnos</h3>
            <Table striped bordered hover responsive="lg" variant="dark">
              <thead className="text-center">
                <tr>
                  <th>ID</th>
                  <th>Detalle</th>
                  <th>Veterinario</th>
                  <th>Fecha</th>
                  <th>Usuario</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-center">
                {dataInfo.appointment.map((item) => (
                  <tr key={item.aid}>
                    <td>{item.aid}</td>
                    <td>{item.detail}</td>
                    <td>{item.veterinarian}</td>
                    <td>{item.date}</td>
                    <td>{`${item?.user.name} (ID:${item?.user._id})`}</td>
                    <td>
                      <div>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteAppointment(item.aid)}
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
          </>
        ) : (
          <h3>Cargando data...</h3>
        )}
        {appointment && (
          <ModalAppointmentUpdate
            show={show}
            handleClose={handleClose}
            appointment={appointment}
            setAppointment={modifyAppointment}
          />
        )}
      </div>
      <div className="row">
        <BtnPagination nextPage={nextPage} backPage={backPage} />
      </div>
    </div>
  );
};

export default AppointmentAdmin;
