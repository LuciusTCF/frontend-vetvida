
const CardsContact = () => {
    return (
    <div className='container'>
        <div className="row">
        <div className="col-12 col-md-4 mt-4 mb-3 mb-sm-0">
                        <div className="card border-danger-subtle border-2 h-100 p-3">
                            <div className="card-body">
                                <h5 className="card-title"><i className="bi bi-geo-alt-fill fs-1"></i></h5>
                                <strong>CLINICA VETERINARIA</strong>
                                <p className="card-text">Cmte. Martín Quenon 825, X5800 Río Cuarto, Córdoba</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                        <div className="card border-danger-subtle border-2 h-100 p-3">
                            <div className="card-body">
                                <h5 className="card-title"><i className="bi bi-telephone-fill fs-1"></i></h5>
                                <strong>TELEFONOS</strong>
                                <h6>Llamá gratis al</h6>
                                <p>0800-555-222</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                        <div className="card  shadow-sm h-100 p-3">
                            <div className="card-body ">
                                <h5 className="card-title"><i className="bi bi-envelope-fill fs-1"></i></h5>
                                <strong>CORREO</strong>
                                <h6>Dejános tu mensaje</h6>
                                <p className="card-text ">vetvida979@gmail.com</p>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
    )
};

export default CardsContact;