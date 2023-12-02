import React, { useState } from "react";
import useGetAppointments from "../hooks/useGetAppointments";
import { appointmentDelete } from "../api/appointmentsApi";
import BtnPagination from "../components/BtnPagination";
import ModalAppointmentUpdate from "../components/ModalAppointmentUpdate";
import Table from "react-bootstrap/Table";

const AppointmentAdmin = () => {
  const [page, setPage] = useState(0);
  const dataInfo = useGetAppointments(page);
  const [show, setShow] = useState(false);
  const [appointment, setAppointment] = useState(null);
  // console.log(dataInfo);
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
  };

  const deleteAppointment = async (id) => {
    const validate = confirm("Está seguro que quiere borrar el turno?");
    if (validate) {
      const resp = await appointmentDelete(id);
      console.log(resp);
    }
  };

  const nextPage = () => {
    const totalPages = dataInfo.total / 10;
    console.log(totalPages);
    if (page + 1 < totalPages) {
      setPage(page + 10);
    }
  };

  const backPage = () => {
    if (page >= 10) {
      setPage(page - 10);
    }
  };

  return (
    <div className="col">
      <div className="row">
        <h3 className="my-3">Turnos</h3>
        {dataInfo?.appointment ? (
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
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.detail}</td>
                  <td>{item.veterinarian}</td>
                  <td>{item.date}</td>
                  <td>{`${item?.user.name} (ID:${item?.user.uid})`}</td>
                  <td>
                    <div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteAppointment(item._id)}
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
        ) : (
          <h3>Cargando data...</h3>
        )}

        {/* {dataInfo ? (
          <table className="table">
            <thead>
              <tr>
                <th>Detalle</th>
                <th>Veterinario</th>
                <th>Fecha</th>
                <th>Usuario</th>

                <th></th>
              </tr>
            </thead>

            <tbody>
              {dataInfo?.appointment.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.detail}</td>
                  <td>{appointment.veterinarian}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.user}</td>
                  
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
        ) : (
          <h3>Cargando info...</h3>
        )}

      */}
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
