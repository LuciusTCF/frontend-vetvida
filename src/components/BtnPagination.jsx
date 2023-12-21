import React from "react";
import "font-awesome/css/font-awesome.min.css";

const BtnPagination = ({
  nextPage,
  backPage,
  nextPageDisabled,
  backPageDisabled,
}) => {
  return (
    <div className="container d-flex justify-content-center mb-4">
      <div className="row">
        <div className="col-12 d-flex gap-2">
          <button
            disabled={backPageDisabled}
            className="btn btn-success"
            onClick={backPage}
          >
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button
            disabled={nextPageDisabled}
            className="btn btn-success"
            onClick={nextPage}
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BtnPagination;
