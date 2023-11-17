import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginScreen from '../views/LoginScreen.jsx';
import './App.css'
import PrimaryRoutes from './routes/PrimaryRoutes.jsx';
import ProtectedRoutes from './routes/ProtectedRoutes.jsx';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/login"  element = { <LoginScreen /> }/>
    <Route path='/*' element= {
    <ProtectedRoutes>
        <PrimaryRoutes/>
    </ProtectedRoutes>
    }
    />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
