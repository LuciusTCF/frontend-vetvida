// import React, from 'react';
import { useForm } from 'react-hook-form';
import imagenFondo from "../assets/imagenRegistro.jpg";
import '../css/RegisterUser.css';




const RegisterUser = () => {

  const { handleSubmit, register, reset, formState: { errors } } = useForm();


  return (
    <>
      <div className="imgFondoUser">
        <img src={imagenFondo} className="imgUser " alt="perros" />
      </div>
      <div className="contenedorFormUser border-3 border border-danger mt-5 w-50 rounded-2 container">
        <form noValidate onSubmit={handleSubmit()} className="row g-3 p-5">
          <h2 className="text-primary fw-bolder  text-uppercase">Registro de usuario</h2>
          <fieldset
            className="col-12 col-lg-4">
            <label htmlFor='name'
              className="form-label fw-bolder text-light">Nombre</label>
            <input type="text"
              className="form-control"
              id="name"
              minLength={5}
              maxLength={21}
              required
              placeholder="propietario de mascota"
              {...register("name", {
                required: "Este campo es obligatorio.",
                minLength: {
                  value: 5,
                  message: "Escribe un mínimo de 5 caracteres.",
                },
                maxLength: {
                  value: 21,
                  message: "Escribe un máximo de 20 caracteres.",
                },
              })}
            />
            <p className="text-danger bg-danger-subtle my-2 rounded-2">{errors.name?.message}</p>
          </fieldset>
          <fieldset
            className="col-12 col-lg-4">
            <label htmlFor='phone'
              className="form-label fw-bolder text-light">Telefono</label>
            <input type="tel"
              id='phone'
              className="form-control"
              placeholder="Ingrese su nro"
              maxLength={14}
              required
              {...register("phone", {
                required: "Este campo es obligatorio.",
                maxLength: {
                  value: 14,
                  message: "Escribe un máximo de 15 caracteres.",
                },
              })}
            />
            <p className="text-danger bg-danger-subtle my-2 rounded-2">{errors.phone?.message}</p>
          </fieldset>
          <fieldset
            className="col-lg-4">
            <label htmlFor='pet'
              className="form-label fw-bolder text-light" >mascota</label>
            <input type="text"
              id='pet'
              required
              minLength={3}
              maxLength={10}
              className="form-control"
              placeholder="nombre de mascota"
              {...register("pet", {
                required: "Este campo es obligatorio.",
                minLength: {
                  value: 3,
                  message: "Escribe un mínimo de 3 caracteres."
                },
                maxLength: {
                  value: 10,
                  message: "Escribe un máximo de 10 caracteres.",
                },
              })}
            />
            <p className="text-danger bg-danger-subtle my-2 rounded-2">{errors.pet?.message}</p>
          </fieldset>
          <fieldset className="col-12 col-lg-4">
            <label className="form-label fw-bolder text-light">especie</label>
            <select className="form-select ">
              <optgroup label='seleccione especie'>
                <option value="1">Ave</option>
                <option value="2">Bovino</option>
                <option value="3">Canino</option>
                <option value="4">Caprino</option>
                <option value="5">Equino</option>
                <option value="6">Exótico</option>
                <option value="7">Felino</option>
                <option value="8">Porcino</option>
                <option value="9">Ovino</option>
              </optgroup>
            </select>
          </fieldset>
          <fieldset
            className="col-lg-4">
            <label htmlFor='breed'
              className="form-label fw-bolder text-light">raza</label>
            <input type="text"
              id='breed'
              required
              minLength={5}
              maxLength={20}
              className="form-control"
              placeholder="raza de mascota"
              {...register("breed", {
                required: "Este campo es obligatorio.",
                minLength: {
                  value: 5,
                  message: "Escribe un mínimo de 5 caracteres."
                },
                maxLength: {
                  value: 20,
                  message: "Escribe un máximo de 20 caracteres.",
                },
              })}
            />
            <p className="text-danger bg-danger-subtle my-2 rounded-2">{errors.breed?.message}</p>
          </fieldset>
          <fieldset
            className="col-lg-4">
            <label htmlFor='age'
              className="form-label fw-bolder text-light">edad</label>
            <input type="text"
              id='age'
              required
              minLength={5}
              maxLength={10}
              className="form-control"
              placeholder="edad de mascota"
              {...register("age", {
                required: "Este campo es obligatorio.",
                minLength: {
                  value: 5,
                  message: "Escribe un mínimo de 5 caracteres."
                },
                maxLength: {
                  value: 10,
                  message: "Escribe un máximo de 10 caracteres.",
                },
              })}
            />
            <p className="text-danger bg-danger-subtle my-2 rounded-2">{errors.age?.message}</p>
          </fieldset>
          <fieldset
            className="col-12 col-md-6">
            <label htmlFor='email'
              className="form-label fw-bolder text-light">Email</label>
            <input type="email"
              id='email'
              required
              minLength={5}
              maxLength={21}
              className="form-control"
              placeholder="correo electrónico"
              name='email'
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
            />
            <p className="text-danger bg-danger-subtle my-2 rounded-2">{errors.email?.message}</p>
          </fieldset>
          <fieldset
            className="col-12 col-md-6">
            <label htmlFor='password'
              className="form-label fw-bold text-light">Password</label>
            <input type="password"
              id='password'
              className="form-control"
              placeholder="contraseña"
              maxLength={17}
              required
              name='password'
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
            <p className="text-danger bg-danger-subtle my-2 rounded-2">{errors.password?.message}</p>
          </fieldset>
          <div
            className="d-grid">
            <button type="submit"
              className="btn btn-primary text-uppercase fw-bold">registrarse</button>
          </div>
        </form>
      </div>
    </>
  )
            }

export default RegisterUser;