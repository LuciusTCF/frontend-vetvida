import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import horses from "../assets/caballosInicioSesion.jpg";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { useEffect, useState } from "react";
import '../css/login.css';


const LoginScreen = ({setEstadoLogin}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginUser, setLoginUser] = useState(null);


  useEffect(() => {
    localStorage.removeItem('token');
    setLoginUser(false);
    setEstadoLogin(false);
  }, []);


  const logIn = async (data) => {
    setLoading(true);
    const respuesta = await login(data);
    console.log(respuesta);
    reset();
    setLoginUser(respuesta);
    setLoading(false);

    if (respuesta?.token) {
      localStorage.setItem("token", JSON.stringify(respuesta.token));
      setEstadoLogin(true);
      navigate("/admin");
    } else if (respuesta?.msg) {
      Swal.fire({
        title: "Email o contraseña incorrectas.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: rgba(0,0,123,0.4),
        icon: "error",
      });
    }
  };

  // ****Logica de cierre de sesión en el navBar:
  // useEffect(() => {
    // const token = localStorage.getItem("token");

    // if (!token) {
      // Si no hay un token almacenado, redirigir a la pantalla de inicio de sesión
  //     navigate("/login");
  //   }
  // }, [navigate]);

  // const logout = () => {
    // Limpiar el estado de autenticación
    // setLoginUser(null);
    // Eliminar el token de autenticación almacenado en el almacenamiento local
    // localStorage.removeItem("token");
    // Redirigir al usuario a la pantalla de inicio de sesión u otra pantalla pública
  //   navigate("/login");
  // };


  return (
    <>
      <div className="container  w-75 my-4 shadow-lg rounded-3 p-0">
        <div className="row ">
          <div className="col-12 col-lg-6 d-none  d-lg-block">
            <img
              src={horses}
              className="w-100 h-100 rounded-2 shadow-lg"
              alt="horses"
            />
          </div>
          <form noValidate onSubmit={handleSubmit(logIn)} className="col-12 col-lg-6 my-auto px-5">
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
                <label htmlFor="inputCorreo">Correo Electrónico</label>
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
                    required: "Este campo es obligatorio.",
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
                <label htmlFor="inputPassword">Contraseña</label>
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
                to="/register"
                className="btn btn-outline-success mb-3 fw-bold "
              >
                Regístrate
              </Link>
              <hr className="text-secondary border-3" />
              <Link to="/" className="btn btn-info fw-bold mb-3  ">
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
          <div className="overlay-login"></div>
          <div className="text-center  p-3">
            <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
              <div className="wheel"></div>
              <div className="hamster">
                <div className="hamster__body">
                  <div className="hamster__head">
                    <div className="hamster__ear"></div>
                    <div className="hamster__eye"></div>
                    <div className="hamster__nose"></div>
                  </div>
                  <div className="hamster_limb hamster_limb--fr"></div>
                  <div className="hamster_limb hamster_limb--fl"></div>
                  <div className="hamster_limb hamster_limb--br"></div>
                  <div className="hamster_limb hamster_limb--bl"></div>
                  <div className="hamster__tail"></div>
                </div>
              </div>
              <div className="spoke"></div>
            </div>
            <h2 className="d-flex justify-content-around text-black mt-2 fw-bold">CARGANDO...</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginScreen;
