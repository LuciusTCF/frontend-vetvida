
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import { useNavigate} from 'react-router-dom';
import horses from "../src/assets/caballosInicioSesion.jpg";
import Swal from 'sweetalert2'





const LoginScreen = (  ) => {
        const {handleSubmit,register,formState:{errors}} = useForm();
        const navigate = useNavigate();
        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
        
        

        const handleSubmitV =(e)=>{
            e.preventDefault();
            if(email == 'admin@admin.com' && password == '12345678'){
            localStorage.setItem('user',JSON.stringify(email));
            navigate("/admin");
        }else{
            Swal.fire({
                title: "Email o contraseña incorrectas.",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/images/trees.png)",
                backdrop: `rgba(0,0,123,0.4)`,
                icon:"error"
                });
        }
    }
        
    return (
        
    <div className="container  w-75 shadow-lg rounded-3 p-0">
            <div className="row ">
            <div className="col-12 col-lg-6 d-none  d-lg-block">
                    <img src={horses} className="w-100 h-100 rounded-2 shadow-lg" alt="horses" />
                </div>
                <form noValidate onSubmit={handleSubmit(handleSubmitV)}   className="col-12 col-lg-6 my-auto px-5">
                    <h1 className="mb-4  mt-4 ">Iniciar sesión</h1>
                    <section>
                            <fieldset className="form-floating  mb-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className="form-control shadow-sm"
                                    id="inputCorreo"
                                    {...register('correo',{
                                        required: "Este campo es obligatorio.",
                                        minLength:{
                                            value:5,
                                            message:"Escribe un mínimo de 5 caracteres."
                                        },
                                        maxLength:{
                                            value:21,
                                            message:"Escribe un máximo de 20 caracteres."
                                        },
                                        pattern:{
                                            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.com$/,
                                            message:"El correo debe llevar '@' y finalizar con dominio '.com' "
                                        }
                                    })}
                                    required
                                    maxLength={30}
                                    minLength={5}
                                />
                                <p className="text-danger">{errors.correo?.message}</p>
                                <label htmlFor="inputCorreo">Email</label>
                            </fieldset>
                            <fieldset className="form-floating">
                                <input
                                    type="password"
                                    className="form-control shadow-sm"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    id="inputPassword"
                                    required
                                    {...register('password',{
                                        required:`Este campo es obligatorio.`
                                        ,
                                        pattern:{
                                            value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,15}$/,
                                            message:"La contraseña ingresada es incorrecta."
                                        }
                                    })}
                                />
                                <p className="text-danger">{errors.password?.message}</p>
                                <label htmlFor="inputPassword">Password</label>
                            </fieldset>
                            <div className="mt-4 d-grid">
                                <button
                                    type="submit"
                                    className="btn bg-danger-subtle text-secondary shadow-lg mb-3 text-uppercase fw-bold"
                                >
                                    Ingresar
                                </button>
                            </div>
                            <p>Aun no tienes cuenta?</p>
                            <a href ="prueba" className="btn btn-outline-success mb-3 fw-bold ">
                            Regístrate
                            </a>
                            <hr className="text-secondary border-3" />
                            <a href ="prueba" className="btn btn-info fw-bold mb-3  "><i className="bi bi-house-fill"> </i>
                            Volver
                            </a>
                    </section>
                </form>
            </div>
        </div>
    )
};

export default LoginScreen;