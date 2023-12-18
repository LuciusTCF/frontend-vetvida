import Lottie from "lottie-react";
import errorAnimation from "../assets/error404.json";
import "../css/login.css";
import { Link } from "react-router-dom";

const ErrorScreen = () => {
  return (
    <div className="error404-container m-auto vh-100">
      <Lottie animationData={errorAnimation} />
      <div className="d-flex justify-content-center">
      <Link to="/" className="btn btn-primary  fw-bold">volver</Link>
      </div>
    </div>
  );
};

export default ErrorScreen;
