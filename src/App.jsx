import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterPrimary from "./routes/RouterPrimary.jsx";
import LoginScreen from "./views/LoginScreen.jsx";
import HomeScreen from './views/HomeScreen'
import ProtectedRoutes from "../src/routes/ProtectedRoutes.jsx";
import NavBarApp from "./components/NavBarApp.jsx";
import FooterApp from "./components/FooterApp.jsx";
import { useState } from "react";
import AdminScreen from "./views/AdminScreen.jsx";

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
      </Routes>
      <FooterApp />
    </BrowserRouter>
  );
}
// function App() {
//   // const [ stateLogin, setStateLogin] = useState(false);
//   return (
// <>
//     {/* <LoginScreen/> */}
//     <BrowserRouter>
//     <Routes>
//     <Route path = "/login" element = { <LoginScreen /> }/>
//     <Route path = "/admin" element = {
//       <ProtectedRoutes >
//         <AdminScreen />
//       </ProtectedRoutes>} />
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

export default App;
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import LoginScreen from '../views/LoginScreen.jsx';
// import './App.css'
// import  ProtectedRoutes  from '../src/routes/ProtectedRoutes.jsx'

// import { useState } from 'react';

// function App() {

//   // const [ stateLogin, setStateLogin] = useState(false);

//   return (

// <>
//     {/* <LoginScreen/> */}

//     <BrowserRouter>
//     <Routes>
//     <Route path = "/login" element = { <LoginScreen /> }/>
//     <Route path = "/admin" element = {
//       <ProtectedRoutes >
//         <AdminScreen />
//       </ProtectedRoutes>} />
//     </Routes>
//     </BrowserRouter>

//     </>
//   )
// }

// export default App;
