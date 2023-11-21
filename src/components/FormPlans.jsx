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
  
    const onSubmit = async (data) => {
      await usuarioAdd(data);
      reset();
    };


  
      return (
       
        <form
      
      onSubmit={handleSubmit(onSubmit)}
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
            id="Email-input"
            placeholder="Correo electrónico"
            className="form-control"
            {...register("email", {
              required: "Este campo es requerido",
            })}
            required
          />
          <p className="text-danger">{errors.email?.message}</p>
        </fieldset>


        <fieldset className="col-12 ">
    
    <input
      type="tel" 
      placeholder="Número de teléfono (opcional)"  
      id="number-input"
      className="form-control "
      {...register("mobilenumber", {
        required: true,
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
          <span>Cantidad de mascotas:</span>
            <select className="form-select"
             aria-label="Default select example">
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">Más</option>
             </select>
             </fieldset>

          

      </section>


      <button type="button" className="btn btn-light mt-4">Enviar</button>
    </form>
  );
};

export default FormPlans