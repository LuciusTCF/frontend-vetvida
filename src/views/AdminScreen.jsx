import React from "react";
import UserAdmin from "../components/UserAdmin";
import AppointmentAdmin from "../components/AppointmentAdmin";

const AdminScreen = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col">
          <h1>Administrador</h1>
        </div>
      </div>
      <UserAdmin />
      <AppointmentAdmin />
    </div>
  );
};

export default AdminScreen;
