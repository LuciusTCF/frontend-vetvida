// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginScreen from '../views/LoginScreen.jsx';
import './App.css'
import AdminScreen from '../views/AdminScreen.jsx';
import  ProtectedRoutes  from '../src/routes/ProtectedRoutes.jsx'


// import { useState } from 'react';


function App() {

  // const [ stateLogin, setStateLogin] = useState(false);
  

  return (
    
<>
    {/* <LoginScreen/> */}
    
    <BrowserRouter>
    <Routes>
    <Route path = "/login" element = { <LoginScreen /> }/>
    <Route path = "/admin" element = {
      <ProtectedRoutes >
        <AdminScreen /> 
      </ProtectedRoutes>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
