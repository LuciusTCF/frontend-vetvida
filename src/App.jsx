import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginScreen from '../src/views/LoginScreen.jsx';
import './App.css'
import PrimaryRoutes from '../src/routes/PrimaryRoutes.jsx';
import ProtectedRoutes from '../src/routes/ProtectedRoutes.jsx';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/*' element= {
    <ProtectedRoutes>
        <PrimaryRoutes/>
    </ProtectedRoutes>
    }
    />
    <Route path = "/login"  element = { <LoginScreen /> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
