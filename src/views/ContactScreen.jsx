import { useForm } from 'react-hook-form';
import MapContact from '../components/MapContact';
import  { useRef } from 'react';
import emailJS from '@emailjs/browser';
import Swal from 'sweetalert2';
import { detailCardContact } from '../data/dataContact';
import MyCardContactUI from '../components/MyCardContactUI';
import FooterApp from '../components/FooterApp';
import NavBarApp from '../components/NavBarApp';



const ContactScreen = () => {

    const {
        handleSubmit, register, reset, formState: { errors } } = useForm();

    // La función es para trabajar con emailJS:
    const form = useRef();
    const sendEmail = () => {
        emailJS.sendForm('service_bosmq1h', 'template_l8kavhl', form.current, '-aMU4NqZGzQuCQ3BW')
            .then((result) => {
                Swal.fire({
                    title: "¡Gracias por comunicarte!",
                    text: "Te responderemos a la brevedad...",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2500
                });
                console.log(result.text);
                reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    const center = [-33.137419, -64.3653236];
    const zoom = 17;

    return (
        <div>
            <NavBarApp/>
            <h3 className='text-uppercase  fw-bold mt-4'>contáctanos</h3>
            <p className='p-3'>Como verdaderos apasionados de los animales, sabemos que cada mascota que recibimos es parte de una familia.Estamos aquí para responder cualquier pregunta que pueda tener. No dudes en comunicarte con nosotros a través de cualquiera de los siguientes medios :</p>
            <div className="container">
                <div className="row">
                    {detailCardContact.map((item, index) => (
                        <MyCardContactUI key={index} item={item} />
                    ))}
                </div>
            </div>
            <div className="container mt-5">
                <div className="row ">
                    <form noValidate ref={form} onSubmit={handleSubmit(sendEmail)} className="col-12 col-lg-6 mt-3">
                        <h2 className='py-4 text-center'>¡Déjanos tu mensaje!</h2>
                        <section>
                            <fieldset className="form-floating">
                                <input type="text" className="form-control shadow-sm " name="user_name" id="inputNameContact" required
                                    minLength={5}
                                    maxLength={22}
                                    {...register("user_name", {
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
                                <p className="text-danger">{errors.user_name?.message}</p>
                                <label htmlFor='inputNameContact'>Nombre completo</label>
                            </fieldset>
                            <fieldset className="form-floating mt-4 mb-3">
                                <input type="email" name="user_email" className="form-control shadow-sm" id="inputEmailContact"
                                    minLength={5}
                                    maxLength={25}
                                    required
                                    {...register("user_email", {
                                        required: "Este campo es obligatorio.",
                                        minLength: {
                                            value: 5,
                                            message: "Escribe un mínimo de 5 caracteres.",
                                        },
                                        maxLength: {
                                            value: 25,
                                            message: "Escribe un máximo de 20 caracteres."
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.com$/,
                                            message: "El correo debe llevar '@' y finalizar con dominio '.com' ",
                                        },
                                    })}
                                />
                                <p className="text-danger">{errors.user_email?.message}</p>
                                <label htmlFor='inputEmailContact'>Correo Electrónico</label>
                            </fieldset>
                            <fieldset className="form-floating mt-3">
                                <textarea className="form-control shadow-sm" name="message" required
                                    minLength={10}
                                    maxLength={150}
                                    id='textareaContact'
                                    {...register("message", {
                                        required: "Este campo es requerido,por favor escriba su comentario.",
                                        minLength: {
                                            value: 10,
                                            message: "Escribe un mínimo de 10 caracteres."
                                        },
                                        maxLength: {
                                            value: 145,
                                            message: "Permitido hasta 145 caracteres."
                                        }
                                    })}
                                />
                                <p className="text-danger">{errors.message?.message}</p>
                                <label htmlFor='textareaContact'>Déjanos tu comentario</label>
                            </fieldset>
                            <div className="mt-3  d-grid">
                                <button className=' btnContact btn  shadow-lg fw-bold text-uppercase border-danger-subtle border-3' type='submit' >Enviar</button>
                            </div>
                        </section>
                    </form>
                    <div className="col-12 col-lg-6 mt-5 ">
                        <h2 className='text-center'>¿Cómo llegar?</h2>
                        <MapContact center={center} zoom={zoom} />
                    </div>
                </div>
            </div>
            <FooterApp/>
        </div>
    )
}

export default ContactScreen;