import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterPrimary from "./routes/RouterPrimary.jsx";
import LoginScreen from "./views/LoginScreen.jsx";
import ProtectedRoutes from "../src/routes/ProtectedRoutes.jsx";
import NavBarApp from "./components/NavBarApp.jsx";
import FooterApp from "./components/FooterApp.jsx";
import { useEffect, useState } from "react";
import RegisterUser from "./views/RegisterUser.jsx";
import PlansScreen from "./views/PlansScreen";
import ErrorScreen from "./views/ErrorScreen.jsx";
import HomeScreen from "./views/HomeScreen";
import ContactScreen from "./views/ContactScreen";
import AboutUsScreen from "./views/AboutUsScreen";
import UserAppoinmentScreen from "./views/UserAppoinmentScreen.jsx";

function App() {
  const [estadoLogin, setEstadoLogin] = useState(1);

  useEffect(() => {
    setEstadoLogin(JSON.parse(window.sessionStorage.getItem("1")));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("1", 1);
  }, [1]);

  return (
    <BrowserRouter>
      <NavBarApp estadoLogin={estadoLogin} />
      <Routes>
        <Route
          path="/admin/*"
          element={
            <ProtectedRoutes estadoLogin={estadoLogin}>
              <RouterPrimary />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<ErrorScreen />} />
        <Route
          path="/login"
          element={<LoginScreen setEstadoLogin={setEstadoLogin} />}
        />
        <Route path="/appointmentuser" element={<UserAppoinmentScreen />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutUsScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/plans" element={<PlansScreen />} />
      </Routes>
      <FooterApp />
    </BrowserRouter>
  );
}

export default App;
