import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/plans.css"
import Swal from "sweetalert2";


export const FormPlans = () => {
  const form = useRef();

  const {
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await usuarioAdd(data);
    reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wv4tbgi', 'template_4tzbupq', form.current, 'EmZk4erSQRl74webE')
      .then((result) => {
          console.log(result.text);
          Swal.fire(
            'Hecho!',
            'Por favor, verifique su email.',
            'success'
          )
      form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className=" text-dark p-3 rounded w-50 mx-auto formPlans mt-4">

<h2 className="text-center mb-4">Dejá tus datos y nuestro equipo se pondrá en contacto!</h2>
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

      <input type="email" name="emailPlans" placeholder="Correo electrónico" className="form-control"
      {...register("emailPlans", {
        required: "Este campo es requerido",
      })}
      required/>
      <p className="text-danger">{errors.emailPlans?.message}</p>

      </fieldset>


      <fieldset className="col-12 ">
          <input
      type="tel" 
      placeholder="Número de teléfono (opcional)"  
      name='mobileNumber'
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


    <fieldset className="col-12 " >
    <span>Cantidad de mascotas:</span>
            <select className="form-select"
             aria-label="Default select example" type="email" name='AmountOfPet' >
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">Más</option>
             </select>
    </ fieldset>
     
 
      <button type="submit" value="Send"  className="btn btn-light mt-4">Enviar</button>
</section>
    </form>
  );
};


export default FormPlans;