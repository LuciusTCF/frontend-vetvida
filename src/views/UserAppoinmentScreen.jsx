import React from "react";
import perritos from "../assets/imagenTurnos.jpg";
import AppoinmentUser from "../components/AppoinmentUser";
import "../css/appoinmentsUser.css";

const UserAppoinmentScreen = () => {
  return (
    <>
      <div className="imgFondoAppoinments">
        <img src={perritos} className="imgAppoinments " alt="perros" />
      </div>
      <div className="contenedorFormAppoinments border-3 border border-info mt-5  rounded-2 container">
        <AppoinmentUser />
      </div>
    </>
  );
};

export default UserAppoinmentScreen;
