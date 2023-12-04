import React from "react";
import imagen2 from "../assets/plan-plata.jpg";
import imagen3 from "../assets/plan-bronce.jpg";
import { Link } from "react-router-dom";

const CarouselApp = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner container-carousel">
          <div className="carousel-item active">
            <img
              src={imagen2}
              className="d-block w-100"
              alt="imagen de animales"
            />
          </div>
          <div className="carousel-item">
            <img
              src={imagen3}
              className="d-block w-100"
              alt="imagen de animales"
            />
          </div>

          <div className="overlay">
            <div className="h-100 d-flex flex-column align-items-center justify-content-center text-white p-3">
              <p className="text-center">
                Informate de nuestros plane mensuales para obtener <br />{" "}
                descuentos en servicios y productos
              </p>
              <button className="btn btn-outline-light btn-sm">
                <Link className="nav-link" to="/plans">
                  Conoce más
                </Link>
              </button>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default CarouselApp;
