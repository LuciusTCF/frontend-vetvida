import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterPrimary from "./routes/RouterPrimary.jsx";
import LoginScreen from "./views/LoginScreen.jsx";
import HomeScreen from "./views/HomeScreen";
import ProtectedRoutes from "../src/routes/ProtectedRoutes.jsx";
import ContactScreen from "./views/ContactScreen.jsx";
import RegisterUser from "./views/RegisterUser.jsx";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<RegisterUser/>}/>
    <Route path='/*' element= {
    <ProtectedRoutes>
        <RouterPrimary/>
    </ProtectedRoutes>
    }
    />
    <Route path="/" element={<HomeScreen />}/>
    <Route path = "/login"  element = { <LoginScreen /> }/>
    <Route path="/contact" element = {<ContactScreen />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
