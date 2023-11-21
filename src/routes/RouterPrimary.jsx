import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminScreen from "../views/AdminScreen";
import PlansScreen from "../views/PlansScreen";

const RouterPrimary = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminScreen />} />
      <Route path="/plans" element={<PlansScreen />} />
    </Routes>
  );
};

export default RouterPrimary;
