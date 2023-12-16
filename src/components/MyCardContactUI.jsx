import React from "react";
import "../css/contact.css";

const MyCardContactUI = ({ item }) => {
  return (
    <div className="col-12 col-md-4 mt-4 mb-3 mb-sm-0">
      <div className="card p-2 bg-danger-subtle border-2 border-danger-subtle shadow-lg h-100 p-3">
        <div className="card-body">
          <h5 className="card-title text-center">
            <i
              className={`fa ${item.icono} fa-3x  text-secondary `}
              aria-hidden="true"
            ></i>
          </h5>

          <h6 className="text-uppercase text-center fw-bold">{item.texto1}</h6>
          <p className="text-center">{item.texto2}</p>
          <h6 className="text-uppercase text-center fw-bold" >{item.texto3}</h6>
          <p className="text-center">{item.texto4}</p>
        </div>
      </div>
    </div>
  );
};

export default MyCardContactUI;
