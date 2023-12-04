import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminScreen from "../views/AdminScreen";
import UserScreen from "../views/UserScreen";
import AppointmentScreen from "../views/AppointmentScreen";

const RouterPrimary = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminScreen />} />
      <Route path="/adminuser" element={<UserScreen />} />
      <Route path="/adminappointment" element={<AppointmentScreen />} />
    </Routes>
  );
};

export default RouterPrimary;
