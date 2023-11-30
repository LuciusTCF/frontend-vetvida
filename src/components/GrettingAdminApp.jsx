// import React from 'react';
import Swal from 'sweetalert2';
const GrettingAdminApp = () => {
    

    // Función para mostrar el mensaje de bienvenida
    const mostrarMensajeDeBienvenida =()=> {
      Swal.fire({
        title: '¡Bienvenido Administrador!',
        icon: 'success',
        timer: 5000, // El mensaje se cerrará automáticamente después de 3 segundos
        showConfirmButton: false // Oculta el botón de confirmación
      });
    }
    
    // Llama a la función para mostrar el mensaje de bienvenida al cargar la página
    window.addEventListener('load', mostrarMensajeDeBienvenida);
    
    


  return (
    <>
    </>
  )
}

export default GrettingAdminApp