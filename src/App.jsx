import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterPrimary from "./routes/RouterPrimary.jsx";
import LoginScreen from "./views/LoginScreen.jsx";
import HomeScreen from './views/HomeScreen'
import PlansScreen from './views/PlansScreen.jsx';
import ProtectedRoutes from "../src/routes/ProtectedRoutes.jsx";
// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <RouterPrimary />
            </ProtectedRoutes>
          }
        />
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/plans" element={<PlansScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;