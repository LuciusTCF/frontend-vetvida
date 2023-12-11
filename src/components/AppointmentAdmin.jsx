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
  const dataInfo = useGetAppointments(page);
  const dataUsers = useGetUsers(page);
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

  const handleAdd = async (e) => {
    if (e.target.name === "date") {
      setDataAppointment({
        ...dataAppointment,
        [e.target.name]: e.target.value + ":00.000Z",
      });
    } else if (e.target.name === "email") {
      const userIndex = dataUsers?.users.find(
        (item) => item.email === e.target.value
      );
      setDataAppointment({
        ...dataAppointment,
        user: userIndex?.uid,
      });
      console.log(dataUsers.users);
      console.log(userIndex);
      console.log(userIndex.uid);
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
                  {/* <Controller
                    name="date"
                    control={control}
                    rules={{ required: "La fecha es requerida" }}
                    render={({ field }) => (
                      <div>
                        <input
                          name="date"
                          className="form-control"
                          type="datetime-local"
                          id="date-input"
                          value={dataInfo?.appointment?.date}
                          onChange={handleAdd}
                          {...field}
                          min={minDate}
                          max={maxDate}
                        />
                        {errors.date && (
                          <p className="text-danger">{errors.date?.message}</p>
                        )}
                      </div>
                    )}
                  /> */}
                  {/* <input
                    type="datetime-local"
                    id="date-input"
                    name="date"
                    className="form-control"
                    value={dataInfo?.appointment?.date}
                    onChange={handleAdd}
                    {...field("date", {
                      required: "Este campo es obligatorio.",
                      min: {
                        value: minDate,
                        message: `La fecha no puede ser anterior a ${minDate}.`,
                      },
                      max: {
                        value: maxDate,
                        message: `La fecha no puede ser posterior a ${maxDate}.`,
                      },
                    })}
                  />
                  {errors.date && (
                    <p className="text-danger">{errors.date?.message}</p>
                  )} */}
                </fieldset>
                <hr />
                <fieldset className="col-12 mb-3">
                  <label htmlFor="detail-input" className="form-label fs-4">
                    Detalle:
                  </label>
                  {/* <Controller
                    name="detail"
                    control={control}
                    rules={{
                      required: "Este campo es obligatorio.",
                      minLength: {
                        value: 5,
                        message: "Escribe un mínimo de 5 caracteres.",
                      },
                      maxLength: {
                        value: 500,
                        message: "Escribe un máximo de 500 caracteres.",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <input
                          className="form-control"
                          type="text"
                          id="detail-input"
                          value={dataInfo?.appointment?.detail}
                          onChange={handleAdd}
                          {...field}
                        />
                        {errors.detail && (
                          <p className="text-danger">
                            {errors.detail?.message}
                          </p>
                        )}
                      </div>
                    )}
                  /> */}
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
                  {/* <Controller
                    name="veterinarian"
                    control={control}
                    rules={{
                      required: "Este campo es obligatorio.",
                    }}
                    render={({ field }) => (
                      <div>
                        <select
                          className="form-select"
                          aria-label="Elegir veterinario"
                          onChange={handleAdd}
                          id="vet-input"
                          {...field}
                        >
                          <option value="0" disabled>
                            Elegir veterinario
                          </option>
                          <option value="Diego Torres">Diego Torres</option>
                          <option value="Patricia Sosa">Patricia Sosa</option>
                        </select>
                        {errors.veterinarian && (
                          <p className="text-danger">
                            {errors.veterinarian?.message}
                          </p>
                        )}
                      </div>
                    )}
                  /> */}
                  <select
                    className="form-select"
                    aria-label="Elegir veterinario"
                    onChange={handleAdd}
                    id="vet-input"
                    name="veterinarian"
                    required
                  >
                    <option value="0" disabled>
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
                  {/* <Controller
                    name="pet"
                    control={control}
                    rules={{
                      required: "Este campo es obligatorio.",
                      maxLength: {
                        value: 100,
                        message: "Escribe un máximo de 100 caracteres.",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <input
                          className="form-control"
                          type="text"
                          id="pet-input"
                          value={dataInfo?.appointment?.pet}
                          onChange={handleAdd}
                          {...field}
                        />
                        {errors.pet && (
                          <p className="text-danger">{errors.pet?.message}</p>
                        )}
                      </div>
                    )}
                  /> */}
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
                  <label htmlFor="user-input" className="form-label fs-4">
                    Usuario:
                  </label>
                  {/* <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Este campo es obligatorio.",
                      minLength: {
                        value: 1,
                        message: "Ingrese al menos 1 persona",
                      },
                      maxLength: {
                        value: 100,
                        message: "No más de 10 personas permitidas",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.com$/,
                        message:
                          "El campo debe tener formato de correo electrónico.",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <input
                          className="form-control"
                          type="text"
                          id="user-input"
                          value={dataInfo?.appointment?.user?._id}
                          onChange={handleAdd}
                          {...field}
                        />
                        {errors.email && (
                          <p className="text-danger">{errors.email?.message}</p>
                        )}
                      </div>
                    )}
                  /> */}
                  <input
                    type="text"
                    id="user-input"
                    name="email"
                    className="form-control"
                    value={dataInfo?.appointment?.user?.email}
                    onChange={handleAdd}
                    required
                    minLength={1}
                    maxLength={100}
                    pattern={"/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+.com$/"}
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
                  <th>Detalle</th>
                  <th>Veterinario</th>
                  <th>Fecha</th>
                  <th>Usuario</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-center">
                {dataInfo.appointment.map((item, index) => (
                  <tr key={index}>
                    <td>{item.detail}</td>
                    <td>{item.veterinarian}</td>
                    <td>{item.date}</td>
                    <td>{`${item?.user.name} (${item?.user.email})`}</td>
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
        <BtnPagination nextPage={nextPage} backPage={backPage} />
      </div>
    </div>
  );
};

export default AppointmentAdmin;
