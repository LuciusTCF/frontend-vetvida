// import React from 'react';
import Lottie from 'lottie-react';
import errorAnimation from '../assets/error404.json';
import "../css/login.css";
import { Link } from "react-router-dom";


const ErrorScreen = () => {
    return (
        <div className="error404-container vh-100">
        <Lottie animationData={errorAnimation} />
        <div className="d-block">
        <Link to='/' className='btn btn-success'><i className="bi bi-house-fill"></i> Volver</Link>
        </div>
      </div>
    )
}

export default ErrorScreen;


