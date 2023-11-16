import React from 'react'
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';





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
          className="bg-light text-dark p-3 rounded w-100"
        >
          <h1 className="text-center">Deja tus datos para contactarnos!</h1>
          <section className="row">
            <fieldset className="col-12 ">
              <label htmlFor="nameUser-input" className="form-label">
                Nombre y apellido
              </label>
              <input
                type="text"
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
              <label htmlFor="Email-input" className="form-label">
                Correo
              </label>
              <input
                type="email"
                id="Email-input"
                className="form-control"
                {...register("email", {
                  required: "Este campo es requerido",
                })}
                required
              />
              <p className="text-danger">{errors.email?.message}</p>
            </fieldset>
            <fieldset className="col-12 ">
            <select className="form-select" aria-label="Default select example">
               <option value>Cantidad de mascotas</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="3">4</option>
               <option value="3">5</option>
               <option value="3">más</option>
               
             </select>
             </fieldset>
  



          </section>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </div>
        </form>
  
        
      );
  };


export default FormPlans
