import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminScreen from "../views/AdminScreen";
import PlansScreen from "../views/PlansScreen";
import UserScreen from "../views/UserScreen";
import AppointmentScreen from "../views/AppointmentScreen";

const RouterPrimary = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminScreen />} />
      <Route path="/admin-user" element={<UserScreen />} />
      <Route path="/admin-appointment" element={<AppointmentScreen />} />
      <Route path="/plans" element={<PlansScreen />} />
    </Routes>
  );
};

export default RouterPrimary;
