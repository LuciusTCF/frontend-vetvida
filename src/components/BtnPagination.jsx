import React from "react";

const BtnPagination = ({ nextPage, backPage }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex gap-2">
          <button className="btn btn-success" onClick={backPage}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button className="btn btn-success" onClick={nextPage}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BtnPagination;
