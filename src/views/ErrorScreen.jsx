import Lottie from "lottie-react";
import errorAnimation from "../assets/error404.json";
import "../css/login.css";

const ErrorScreen = () => {
  return (
    <div className="error404-container m-auto vh-100">
      <Lottie animationData={errorAnimation} />
    </div>
  );
};

export default ErrorScreen;
