import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterPrimary from "./routes/RouterPrimary.jsx";
import LoginScreen from "./views/LoginScreen.jsx";
import ProtectedRoutes from "../src/routes/ProtectedRoutes.jsx";
import NavBarApp from "./components/NavBarApp.jsx";
import FooterApp from "./components/FooterApp.jsx";
import { useState } from "react";
import AdminScreen from "./views/AdminScreen.jsx";
import RegisterUser from "./views/RegisterUser.jsx";
import HomeScreen from "./views/HomeScreen.jsx";



function App() {
  const [estadoLogin, setEstadoLogin] = useState(false)
  return (
    <BrowserRouter>
    <NavBarApp estadoLogin={estadoLogin}/>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <RouterPrimary />
            </ProtectedRoutes>
          }
        />  
        <Route path="/admin" element={
          <ProtectedRoutes estadoLogin={estadoLogin}>
            <AdminScreen/>
          </ProtectedRoutes>
        }/>   
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/login" element={<LoginScreen setEstadoLogin={setEstadoLogin}/>} />       
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
      <FooterApp />
    </BrowserRouter>
  );
}

export default App;
