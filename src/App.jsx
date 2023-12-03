import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterPrimary from "./routes/RouterPrimary.jsx";
import LoginScreen from "./views/LoginScreen.jsx";
import ProtectedRoutes from "../src/routes/ProtectedRoutes.jsx";
import AboutUsScreen from "./views/AboutUsScreen.jsx";
import PlansScreen from "./views/PlansScreen.jsx";
// import "./App.css";
import NavBarApp from "./components/NavBarApp.jsx";
import FooterApp from "./components/FooterApp.jsx";
import { useState } from "react";
import AdminScreen from "./views/AdminScreen.jsx";
import RegisterUser from "./views/RegisterUser.jsx";


function App() {
  const [estadoLogin, setEstadoLogin] = useState(false);
  return (
    <BrowserRouter>
      <NavBarApp estadoLogin={estadoLogin} />
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes estadoLogin={estadoLogin}>
              <RouterPrimary />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/login"
          element={<LoginScreen setEstadoLogin={setEstadoLogin} />}
        />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
      <FooterApp />

    </BrowserRouter>
  );
}

export default App;
