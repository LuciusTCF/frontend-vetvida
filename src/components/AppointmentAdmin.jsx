import React, { useState } from "react";
import useGetAppointments from "../hooks/useGetAppointments";
import { appointmentAdd, appointmentDelete } from "../api/appointmentsApi";
import BtnPagination from "../components/BtnPagination";
import ModalAppointmentUpdate from "../components/ModalAppointmentUpdate";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useGetUsers from "../hooks/useGetUsers";
import "../css/admin.css";

const AppointmentAdmin = () => {
  const [page, setPage] = useState(0);
  const [pageUser, setPageUser] = useState(0);
  const [limit, setLimit] = useState(31);
  const dataInfo = useGetAppointments(page);
  const dataUsers = useGetUsers(pageUser, limit);
  const [show, setShow] = useState(false);
  const [appointment, setAppointment] = useState(null);
  const [dataAppointment, setDataAppointment] = useState(null);
  const { reset } = useForm();

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
    }
  };

  const nextPage = () => {
    const totalPages = dataInfo.total;
    if (page + 10 < totalPages) {
      setPage(page + 10);
    }
  };

  const backPage = () => {
    if (page >= 10) {
      setPage(page - 10);
    }
  };
  const nextUserPage = () => {
    const totalUserPages = dataUsers?.total;
    if (pageUser + 10 < totalUserPages) {
      setPageUser(pageUser + 10);
    }
  };

  const backUserPage = () => {
    if (pageUser >= 10) {
      setPageUser(pageUser - 10);
    }
  };

  for (let index = 0; index < dataUsers?.total / 10; index++) {}

  const changeLimit = () => {
    setLimit(dataUsers?.total);
    console.log(limit);
  };

  const handleAdd = async (e) => {
    if (e.target.name === "date") {
      setDataAppointment({
        ...dataAppointment,
        [e.target.name]: e.target.value + ":00.000Z",
      });
    } else if (e.target.name === "client") {
      const userIndex = dataUsers.users.find(
        (item) => item.uid === e.target.value
      );
      setDataAppointment({
        ...dataAppointment,
        [e.target.name]: {
          nameuser: userIndex.name,
          emailuser: userIndex.email,
          iduser: userIndex.uid,
        },
      });
    } else {
      setDataAppointment({
        ...dataAppointment,
        [e.target.name]: e.target.value,
      });
    }
    console.log(dataInfo);
  };

  const add = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    console.log(dataAppointment);
    await appointmentAdd(dataAppointment);
    reset();
  };

  const actualDate = new Date();

  const year = actualDate.getFullYear();
  let month = actualDate.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = actualDate.getDate() + 1;
  day = day < 10 ? `0${day}` : day;

  const minDate = `${year}-${month}-${day}T00:00`;

  const actualYear = actualDate.getFullYear();
  const maxDate = `${actualYear + 1}-12-31T23:59`;

  return (
    <div className="col">
      <div className="row justify-content-center">
        {dataInfo?.appointment ? (
          <>
            <form
              onSubmit={add}
              className={`bg-light text-dark p-3 rounded ${
                window.innerWidth > 1024 ? "w-50" : "w-100"
              } justify-content-center`}
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
                    min={minDate}
                    max={maxDate}
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
                    minLength={5}
                    maxLength={500}
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
                    required
                  >
                    <option value="" disabled selected>
                      Elegir veterinario
                    </option>
                    <option value="Diego Torres">Diego Torres</option>
                    <option value="Patricia Sosa">Patricia Sosa</option>
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
                    minLength={1}
                    maxLength={100}
                  />
                </fieldset>
                <hr />
                <fieldset className="col-12 mb-3">
                  <label htmlFor="client-input" className="form-label fs-4">
                    Cliente:
                  </label>
                  <div className="col-12">
                    <button
                      disabled={pageUser == 0 && true}
                      className="btn btn-success btn-sm"
                      onClick={backUserPage}
                    >
                      <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button
                      disabled={pageUser + 11 > dataUsers?.total && true}
                      className="btn btn-success btn-sm"
                      onClick={nextUserPage}
                    >
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                  </div>

                  <input
                    className="form-control"
                    list="clients"
                    name="client"
                    id="client-input"
                    onChange={handleAdd}
                    onClick={changeLimit}
                    required
                  />
                  <datalist id="clients">
                    {/* {
                    dataUsers?.total > 0 &&
                    (
                      for (let index = 0; index < dataUsers?.total/10; index++) {
                      dataUsers?.users.map((item, index) => (
                        <option key={index} value={item?.uid}>
                          {`${item?.name} (${item?.email})`}
                        </option>
                      ))
                      setPageUser(pageUser+10)
                    }
                    )
                    } */}
                    {dataUsers?.total > 0 &&
                      dataUsers?.users.map((item, index) => (
                        <option key={index} value={item?.uid}>
                          {`${item?.name} (${item?.email})`}
                        </option>
                      ))}
                    {dataUsers?.total > 0 &&
                      dataUsers?.users.map((item, index) => (
                        <option key={index} value={item?.uid}>
                          {`${item?.name} (${item?.email})`}
                        </option>
                      ))}
                  </datalist>

                  {/* <select
                    className="form-select"
                    placeholder="Elegir cliente"
                    onChange={handleAdd}
                    onClick={changeLimit}
                    id="client-input"
                    name="client"
                    required
                  >
                    <option value="" disabled selected>
                      Elegir cliente
                    </option>

                    {dataUsers?.users?.length > 0 &&
                      dataUsers?.users.map((item, index) => (
                        <option key={index} value={item?.uid}>
                          {`${item?.name} (${item?.email})`}
                        </option>
                      ))}
                  </select> */}
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
                  <th>Detalle</th>
                  <th>Veterinario</th>
                  <th>Fecha</th>
                  <th>Cliente</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-center">
                {dataInfo.appointment.map((item, index) => (
                  <tr key={index}>
                    <td>{item.detail}</td>
                    <td>{item.veterinarian}</td>
                    <td>{item.date}</td>
                    <td>{`${item?.client?.nameuser} (${item?.client?.emailuser})`}</td>
                    <td>
                      <div>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteAppointment(item.aid)}
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => handleShow(item)}
                        >
                          <i className="fa fa-pencil" aria-hidden="true"></i>
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
        <BtnPagination
          nextPage={nextPage}
          backPage={backPage}
          nextPageDisabled={page + 11 > dataInfo?.total && true}
          backPageDisabled={page == 0 && true}
        />
      </div>
    </div>
  );
};

export default AppointmentAdmin;
