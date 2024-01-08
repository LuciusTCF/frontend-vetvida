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
      <div className="vh-100">
        <div className="contenedorFormAppoinments border-3 border border-info my-5 rounded-2 container">
          <AppoinmentUser />
        </div>
      </div>
    </>
  );
};

export default UserAppoinmentScreen;
