import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminScreen from "../views/AdminScreen";
import UserScreen from "../views/UserScreen";
import AppointmentScreen from "../views/AppointmentScreen";
import ErrorScreen from "../views/ErrorScreen";


const RouterPrimary = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminScreen />} />
      <Route path="/user" element={<UserScreen />} />
      <Route path="/appointment" element={<AppointmentScreen />} />
      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
};

export default RouterPrimary;
