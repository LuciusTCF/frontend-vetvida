import React from "react";
import UserAdmin from "../components/UserAdmin";

const AdminScreen = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col">
          <h1>Administrador</h1>
        </div>
      </div>
      <UserAdmin />
    </div>
  );
};

export default AdminScreen;
