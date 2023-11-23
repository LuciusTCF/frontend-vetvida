import React from 'react'
import logo from '../assets/logo.png'
import '../css/footer.css'

const FooterApp = () => {
  return (
 
    <div className="footer_bg text-white p-3 container-fluid logofooter">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={logo} alt="logo VetVida" />
        </div>

        <div className="col-md-4">
          <h5 className='text-center mb-4 mt-3 color'>Siguenos en nuestras redes sociales</h5>
          <div className="d-flex justify-content-evenly mb-4">
            <i className="fa fa-instagram fa-2x color"></i>
            <i className="fa fa-facebook fa-2x color"></i>
            <i className="fa fa-twitter fa-2x color"></i>
          </div>
          <div className="text-center">
            <a href="https://api.whatsapp.com/send?phone=0123456789" target="_blank" className="footer-whatsapp">
              <i className="fa fa-whatsapp fa-3x" aria-hidden="true"></i>
              <p className='fw-bolder'>Escríbenos por WhatsApp</p>
            </a>
          </div>
        </div>
    
        <div className="col-12 text-center mt-3 color">
          <p>&copy; Todos los derechos reservados.</p>
        </div>
      </div>
     </div>
  )
}

export default FooterApp