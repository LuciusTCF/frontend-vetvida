import React from 'react'
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/plans.css"



const FormPlans = () => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
  
    const newUser = async (data) => {
      await usuarioAdd(data);
      reset();
    };

  
      return (
       
        <form
          noValidate
          onSubmit={handleSubmit(newUser)}
          className=" text-dark p-3 rounded w-50 mx-auto formPlans"
        >
          <h2 className="text-center mb-4">Dejá tus datos y nuestro equipo se pondrá en contacto!</h2>

          <section className="row">
            <fieldset className="col-12 ">
              <input
                type="text"
                placeholder="Nombre completo" 
                id="nameUser-input"
                className="form-control"
                {...register("name", {
                  required: "Este campo es requerido",
                  minLength: {
                    value: 3,
                    message: "Este campo tiene un mínimo de 3 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Este campo tiene un máximo de 20 caracteres",
                  },
                })}
                required
                minLength={3}
                maxLength={20}
              />
              <p className="text-danger">{errors.name?.message}</p>
            </fieldset>
  
  
  
            <fieldset className="col-12 ">
              <input
                type="email"
                placeholder="Correo electrónico" 
                id="Email-input"
                className="form-control"
                {...register("email", {
                  required: "Este campo es requerido",
                })}
                required
              />
              <p className="text-danger">{errors.email?.message}</p>
            </fieldset>


            <fieldset className="col-12 mb-3">
              <input
                type="tel" placeholder="Número de teléfono (opcional)"  
                id="Email-input"
                className="form-control "
                {...register("mobile number", {
                  required: "Este campo es requerido",
                  minLength: {
                    value: 3,
                    message: "Este campo tiene un mínimo de 3 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Este campo tiene un máximo de 20 caracteres",
                  },
                })}
                required
                minLength={3}
                maxLength={20} />
            </fieldset>


  


            <fieldset className="col-12 ">
            <select className="form-select" aria-label="Default select example">
               <option value>Cantidad de mascotas</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">Más</option>
             </select>
             </fieldset>
  
          </section>

          <div className="text-end mt-4">
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </div>

        </form>
  
        
      );
  };


export default FormPlans
