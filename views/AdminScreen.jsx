import { Link } from "react-router-dom";


const AdminScreen = () => {

  
  return (
    <>
      <h1>Bienvenido Administrador</h1>
      <Link to= "/error" className="btn btn-info">volver</Link>
    </>
  );
};

export default AdminScreen;
