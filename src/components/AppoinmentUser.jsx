import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { maxDate, minDate } from "../helpers/obtain-dates";
import useGetAppointments from "../hooks/useGetAppointments";
import useGetUsers from "../hooks/useGetUsers";
import { appointmentAdd } from "../api/appointmentsApi";
import { getAuthData } from "../api/auth";
import Swal from "sweetalert2";

const AppoinmentUser = () => {
  const [page, setPage] = useState(0);
  const [pageUser, setPageUser] = useState(0);
  const dataInfo = useGetAppointments(page);
  const dataUsers = useGetUsers(pageUser);
  const [id, setId] = useState(null);
  const [message, setMessage] = useState(null);
  const token = JSON.parse(localStorage.getItem("token")) || null;
  const [dataAppointment, setDataAppointment] = useState(null);
  const { reset } = useForm();

  useEffect(() => {
    whatId();
  }, []);

  const whatId = async () => {
    const resp = await getAuthData(token);

    if (resp?.msg) {
      setMessage(resp.msg);
    } else {
      setId(resp.id);
    }
    console.log(resp?.id);
  };

  const handleAdd = async (e) => {
    const userIndex = dataUsers.users.find((item) => item.uid === id);

    console.log(userIndex);

    if (e.target.name === "date") {
      setDataAppointment({
        ...dataAppointment,
        [e.target.name]: e.target.value + ":00.000Z",
        client: {
          nameuser: userIndex.name,
          emailuser: userIndex.email,
          phoneuser: userIndex.phone,
          iduser: userIndex.uid,
        },
      });
    } else {
      setDataAppointment({
        ...dataAppointment,
        [e.target.name]: e.target.value,
        client: {
          nameuser: userIndex.name,
          emailuser: userIndex.email,
          phoneuser: userIndex.phone,
          iduser: userIndex.uid,
        },
      });
    }
    console.log(dataAppointment);
  };

  const add = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    console.log(dataAppointment);
    try {
      await appointmentAdd(dataAppointment);
      Swal.fire({
        icon: "success",
        title: "¡Turno registrado!",
        text: "El turno se ha registrado exitosamente.",
      });

      reset();
    } catch (error) {
      console.error("Error al registrar turno:", error);
      Swal.fire({
        icon: "error",
        title: "¡El turno no pudo registrarse!",
        text: "El turno no se ha podido registrar.",
      });
    }

    reset();
  };
  return (
    <div className="container">
      <div className="col">
        {token ? (
          <>
            <form onSubmit={add} className="row my-3 g-3 ">
              <h3 className="text-center  fw-bold text-uppercase mb-2">
                Reservar turno
              </h3>
              <fieldset className="col-md-6">
                <label htmlFor="date-input" className="form-label">
                  Fecha y hora
                </label>
                <input
                  type="datetime-local"
                  name="date"
                  required
                  placeholder="Selecione fecha y hora"
                  className="form-control"
                  value={dataInfo?.appointment?.date}
                  onChange={handleAdd}
                  id="date-input"
                  min={minDate}
                  max={maxDate}
                />
              </fieldset>
              <fieldset className="col-md-6">
                <label htmlFor="vet-input" className="form-label">
                  Veterinario
                </label>
                <select
                  className="form-select"
                  aria-label="Elegir veterinario"
                  onChange={handleAdd}
                  id="vet-input"
                  name="veterinarian"
                >
                  <option value="" disabled selected>
                    Elegir veterinario
                  </option>
                  <option value="Diego Torres">Diego Torres</option>
                  <option value="Patricia Sosa">Patricia Sosa</option>
                </select>
              </fieldset>

              <fieldset className="col-md-6">
                <label htmlFor="pet-input" className="form-label">
                  Mascota
                </label>
                <input
                  type="text"
                  minLength={1}
                  maxLength={100}
                  required
                  placeholder="nombre de mascota y especie"
                  className="form-control"
                  onChange={handleAdd}
                  name="pet"
                  id="pet-input"
                  value={dataInfo?.appointment?.pet}
                />
              </fieldset>
              <fieldset className="col-md-12">
                <label htmlFor="detail-input" className="form-label">
                  Detalle
                </label>
                <textarea
                  type="text"
                  placeholder="motivo de consulta"
                  minLength={5}
                  maxLength={500}
                  name="detail"
                  className="form-control"
                  value={dataInfo?.appointment?.detail}
                  onChange={handleAdd}
                  id="detail-input"
                  required
                />
              </fieldset>
              <div className="d-grid">
                <button className="btn btn-primary fw-bold text-uppercase">
                  confirmar
                </button>
              </div>
            </form>
          </>
        ) : (
          <div>
            <h2 className="text-center my-2">No está registrado</h2>
            <h5 className="mb-2">
              Para poder pedir un turno online debe comunicarse con la
              veterinaria a través de:
            </h5>
            <p className="mb-1">Tel: 10987654321</p>
            <p className="">Email: vetvida979@gmail.com</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppoinmentUser;
