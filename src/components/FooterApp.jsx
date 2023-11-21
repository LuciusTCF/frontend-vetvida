import React from 'react'

const FooterApp = () => {
  return (
 
    <div className="footer_bg text-white p-3 container-fluid">
      <div className="row">
 
        <div className="col-12 text-center mb-4 mt-3">
          <h5>Siguenos en nuestras redes sociales</h5>
        </div>
        <div className="col-md-6 d-flex justify-content-evenly mb-4">
          <i className="fa fa-instagram fa-2x text-white"></i>
          <i className="fa fa-facebook fa-2x text-white"></i>
          <i className="fa fa-twitter fa-2x text-white"></i>
        </div>

        <div className="col-md-6">
          <div className="text-center">
            <a href="https://api.whatsapp.com/send?phone=0123456789" target="_blank" className="footer-whatsapp">
              <i className="fa fa-whatsapp fa-3x" aria-hidden="true"></i>
              <p className='fw-bolder'>Escríbenos por WhatsApp</p>
            </a>
          </div>
        </div>
    
        <div className="col-12 text-center mt-2">
          <p>&copy; Todos los derechos reservados.</p>
        </div>
      </div>

    </div>

  )
}

export default FooterApp