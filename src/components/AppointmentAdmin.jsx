import React, { useState } from "react";
import useGetAppointments from "../hooks/useGetAppointments";
import { appointmentDelete } from "../api/appointmentsApi";
import BtnPagination from "../components/BtnPagination";
import ModalAppointmentUpdate from "../components/ModalAppointmentUpdate";

const AppointmentAdmin = () => {
  const [page, setPage] = useState(0);
  const { data } = useGetAppointments(page);
  const [show, setShow] = useState(false);
  const [appointment, setappointment] = useState(null);

  const handleClose = () => {
    setappointment(null);
    setShow(false);
  };

  const handleShow = (data) => {
    setappointment(data);
    setShow(true);
  };

  const modifyAppointment = (data) => {
    setappointment(data);
  };

  const deleteAppointment = async (id) => {
    const validate = confirm("Está seguro que quiere borrar el turno?");
    if (validate) {
      const resp = await appointmentDelete(id);
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
              <th>Detalle</th>
              <th>Veterinario</th>
              <th>Fecha</th>
              <th>Usuario</th>
              <th>Mascotas</th>
              <th>Mascotas</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data?.appointments?.length > 0 &&
              data.appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.detail}</td>
                  <td>{appointment.veterinarian}</td>
                  <td>{appointment.date}</td>
                  {/* <td>{appointment.user}</td> */}
                  <td>{JSON.stringify(appointment.pet)}</td>
                  <td>
                    {appointment.pet.map((pet) => {
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
                        onClick={() => deleteAppointment(appointment._id)}
                      >
                        X
                      </button>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleShow(appointment)}
                      >
                        M
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {appointment && (
          <ModalAppointmentUpdate
            show={show}
            handleClose={handleClose}
            appointment={appointment}
            setappointment={modifyAppointment}
          />
        )}
      </div>
      <div className="col">
        <BtnPagination nextPage={nextPage} backPage={backPage} />
      </div>
    </>
  );
};

export default AppointmentAdmin;
