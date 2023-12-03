import { useEffect } from 'react';
import Swal from 'sweetalert2';
const GrettingAdminApp = () => {
    
  useEffect(() => {
    // Función para mostrar el mensaje de bienvenida
    const welcomeMessage =()=> {
      Swal.fire({
        title: '¡Bienvenido!',
        icon: 'success',
        timer: 3000, // El mensaje se cerrará automáticamente después de 3 segundos
        showConfirmButton: false // Oculta el botón de confirmación
      });
    }
    welcomeMessage();
  }, []);
    
    
    
    


  return (
    <>
    </>
  )
}

export default  GrettingAdminApp ;