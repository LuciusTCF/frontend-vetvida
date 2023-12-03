import React from 'react';
import '../css/contact.css';

const MyCardContactUI = ({ item }) => {
    console.log(item)
    return (
        <div className="col-12 col-md-4 mt-4 mb-3 mb-sm-0">
            <div className="card p-2 bg-danger-subtle border-2 border-danger-subtle shadow-lg h-100 p-3">
                <div className="card-body">
                    <h5 className="card-title"><i className={`fa ${item.icono} fa-3x text-secondary `} aria-hidden="true"></i></h5>

                    <strong className='text-uppercase'>{item.texto1}</strong>
                    <p>{item.texto2}</p>
                    <strong>{item.texto3}</strong>
                    <p>{item.texto4}</p>
                </div>
            </div>
        </div>
    )
}

export default MyCardContactUI;