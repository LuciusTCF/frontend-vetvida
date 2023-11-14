// import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import horses from "../assets/caballosInicioSesion.jpg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "../css/login.css";

const LoginScreen = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginUser, setLoginUser] = useState(null);

  const inicioSesion = async (data) => {
    setLoading(true);
    const respuesta = await login(data);
    console.log(respuesta);
    reset();
    setLoginUser(respuesta);
    setLoading(false);

    if (respuesta?.token) {
      localStorage.setItem("token", JSON.stringify(respuesta.token));
      navigate("/admin");
    } else if (respuesta?.msg) {
      Swal.fire({
        title: "Email o contraseña incorrectas.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `rgba(0,0,123,0.4)`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="container  w-75 shadow-lg rounded-3 p-0">
        <div className="row ">
          <div className="col-12 col-lg-6 d-none  d-lg-block">
            <img
              src={horses}
              className="w-100 h-100 rounded-2 shadow-lg"
              alt="horses"
            />
          </div>
          <form
            noValidate
            onSubmit={handleSubmit(inicioSesion)}
            className="col-12 col-lg-6 my-auto px-5"
          >
            <h1 className="mb-4  mt-4 ">Iniciar sesión</h1>
            <section>
              <fieldset className="form-floating  mb-3">
                <input
                  type="email"
                  className="form-control shadow-sm"
                  id="inputCorreo"
                  {...register("email", {
                    required: "Este campo es obligatorio.",
                    minLength: {
                      value: 5,
                      message: "Escribe un mínimo de 5 caracteres.",
                    },
                    maxLength: {
                      value: 21,
                      message: "Escribe un máximo de 20 caracteres.",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.com$/,
                      message:
                        "El correo debe llevar '@' y finalizar con dominio '.com' ",
                    },
                  })}
                  required
                  maxLength={30}
                  minLength={5}
                  disabled={loading ? true : false}
                />
                <p className="text-danger">{errors.email?.message}</p>
                <label htmlFor="inputCorreo">Email</label>
              </fieldset>
              <fieldset className="form-floating">
                <input
                  type="password"
                  className="form-control shadow-sm"
                  id="inputPassword"
                  minLength={8}
                  maxLength={16}
                  required
                  disabled={loading ? true : false}
                  {...register("password", {
                    required: `Este campo es obligatorio.`,
                    maxLength: {
                      value: 17,
                      message: "Escribe un máximo de 16 caracteres.",
                    },
                    pattern: {
                      value: /^.{8,16}$/,
                      message:
                        "La contraseña debe tener un máximo de 16 caracteres entre mayusculas y minusculas.",
                    },
                  })}
                />
                <p className="text-danger">{errors.password?.message}</p>
                <label htmlFor="inputPassword">Password</label>
              </fieldset>
              <div className="mt-4 d-grid">
                <button
                  type="submit"
                  className="btn bg-danger-subtle text-secondary shadow-lg mb-3 text-uppercase fw-bold"
                  disabled={loading ? true : false}
                >
                  Ingresar
                </button>
              </div>
              <p>Aun no tienes cuenta?</p>
              <Link
                to="/prueba"
                className="btn btn-outline-success mb-3 fw-bold "
              >
                Regístrate
              </Link>
              <hr className="text-secondary border-3" />
              <Link to="/prueba" className="btn btn-info fw-bold mb-3  ">
                <i className="bi bi-house-fill"> </i>
                Volver
              </Link>
            </section>
          </form>
        </div>
      </div>

      {loginUser?.errors && (
        <div className="row mt-3">
          {loginUser.errors.map((error, index) => (
            <div className="col" key={index}>
              <div className="alert alert-danger" role="alert">
                {error.msg}
              </div>
            </div>
          ))}
        </div>
      )}

      {loading && (
        <div className="position-fixed top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
          <div className="overlay"></div>
          <div className="text-center">
            <Spinner
              animation="grow"
              className="m-2"
              variant="primary"
              role="status"
            ></Spinner>
            <Spinner
              animation="grow"
              className="m-2"
              variant="primary"
              role="status"
            ></Spinner>
            <Spinner
              animation="grow"
              className="m-2"
              variant="primary"
              role="status"
            ></Spinner>
            <Spinner
              animation="grow"
              className="m-2"
              variant="primary"
              role="status"
            ></Spinner>
            <h2 className="d-flex justify-content-around text-info fw-bold">
              Cargando...
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginScreen;
