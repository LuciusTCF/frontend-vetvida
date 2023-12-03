import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminScreen from "../views/AdminScreen";
import PlansScreen from "../views/PlansScreen";
import UserScreen from "../views/UserScreen";
import AppointmentScreen from "../views/AppointmentScreen";
import ErrorScreen from "../views/ErrorScreen";
import HomeScreen from "../views/HomeScreen";
import ContactScreen from "../views/ContactScreen";
import AboutUsScreen from "../views/AboutUsScreen";

const RouterPrimary = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutUsScreen />} />
      <Route path="/admin" element={<AdminScreen />} />
      <Route path="/adminuser" element={<UserScreen />} />
      <Route path="/adminappointment" element={<AppointmentScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/plans" element={<PlansScreen />} />
      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
};

export default RouterPrimary;
