import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminScreen from "../views/AdminScreen";
import PlansScreen from "../views/PlansScreen";
import ErrorScreen from "../views/ErrorScreen"

const RouterPrimary = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminScreen />} />
      <Route path="/plans" element={<PlansScreen />} />
      <Route path="*" element = {<ErrorScreen/>} />
    </Routes>
  );
};

export default RouterPrimary;
