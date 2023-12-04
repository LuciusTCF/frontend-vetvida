import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/plans.css";
import Swal from "sweetalert2";

export const FormPlans = () => {
  const form = useRef();

  const {
    register,
    formState: { errors },
  } = useForm();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wv4tbgi",
        "template_4tzbupq",
        form.current,
        "EmZk4erSQRl74webE"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("Hecho!", "Por favor, verifique su email.", "success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );

    onSubmit = (event) => {
      event.preventDefault();
      this.setState({ isLoading: true });
      console.log(this.state);
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    };

    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({ isLoading: true });
      console.log(this.state);
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    };
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className=" text-dark p-3 rounded w-50 mx-auto formPlans mt-4 mb-4"
    >
      <h2 className="text-center mb-4">
        <b>Dejá tus datos y nuestro equipo se pondrá en contacto!</b>
      </h2>
      <section className="row">
        <fieldset className="col-12 ">
          <input
            type="text"
            placeholder="Nombre completo"
            className="form-control"
            name="fullName"
            {...register("name", {
              required: "Este campo es requerido",
              minLength: {
                value: 4,
                message: "Este campo tiene un mínimo de 4 letras",
              },
              maxLength: {
                value: 30,
                message: "Este campo tiene un máximo de 30 letras",
              },
            })}
            required
            minLength={4}
            maxLength={30}
          />
          <p className="text-danger">{errors.name?.message}</p>
        </fieldset>

        <fieldset className="col-12 ">
          <input
            type="email"
            name="emailPlans"
            placeholder="Correo electrónico"
            className="form-control"
            {...register("emailPlans", {
              required: "Este campo es requerido",
            })}
            required
          />
          <p className="text-danger">{errors.emailPlans?.message}</p>
        </fieldset>

        <fieldset className="col-12 ">
          <input
            type="tel"
            placeholder="Número de teléfono"
            name="mobileNumber"
            className="form-control "
            {...register("mobilenumber", {
              required: "Por favor, ingrese su número.",
              minLength: {
                value: 11,
                message: "Mínimo 11 números",
              },
              maxLength: {
                value: 11,
                message: "Máximo 11 números",
              },
            })}
            minLength={11}
            maxLength={11}
          />
          <p className="text-danger">{errors.mobilenumber?.message}</p>
        </fieldset>

        <fieldset className="col-12 ">
          <span>
            <b>Cantidad de mascotas:</b>
          </span>
          <select
            className="form-select"
            aria-label="Default select example"
            type="email"
            name="AmountOfPet"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">Más</option>
          </select>
        </fieldset>

        <span className="mt-4">
          <b>Mi consulta:</b>{" "}
        </span>
        <fieldset
          className="col-12 mx-auto mt-3 form-check-inline "
          name="checkPlans"
        >
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Información sobre costos.
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Coberturas y descuentos especiales.
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Otras.
            </label>
          </div>
        </fieldset>

        <button type="submit" value="Send" className="btn btn-light mt-4">
          Enviar
        </button>
      </section>
    </form>
  );
};

export default FormPlans;
