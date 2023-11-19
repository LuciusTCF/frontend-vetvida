import React from "react";
import UserAdmin from "../components/UserAdmin";
import AppointmentAdmin from "../components/AppointmentAdmin";
import "../css/admin.css";

const AdminScreen = () => {
  return (
    <div className="container-fluid row main">
      <div className="col pt-5 tables">
        <div className="row">
          <h1>Administrador</h1>
        </div>
        {/* <div className="row"> */}
        <div className="row">
          <hr />
          <UserAdmin />
          <hr />
          <AppointmentAdmin />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AdminScreen;
