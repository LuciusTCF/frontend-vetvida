import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imgMainPlans from "../assets/BronzeMain1.jpg";
import imgSilverPlans from "../assets/PlanSilver.jpg";
import imgBronzePlans from "../assets/PlanBronze.png";
import imgGoldPlans from "../assets/PlanGold.png";
import FormPlans from "../components/FormPlans";

const PlansScreen = () => {
  return (
    <div>
      <div>
        <div className="position-relative mx-auto img-main-plans ">
          <img src={imgMainPlans} className="img-fluid" alt="Perro blanco y negro de portada" />
          <div className="position-absolute top-0 ">
            <h1 className="deslizar">
              Planes que se adaptan a tus necesidades!
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card-group">
          <div className="card cardPlans">
            <img
              className="card-img imgPlans mx-auto containerPlans"
              src={imgBronzePlans}
              alt="Huella de animal"
            />
            <div className="card-body">
              <h5 className="card-title ">Bronce</h5>
              <ul className="list-group">
                <li className="list-group-item">Una mascota</li>
                <li className="list-group-item">
                  15% de descuento en productos
                </li>
                <li className="list-group-item">
                  Servicios veterinarios de emergencia
                </li>
                <li className="list-group-item">Consultas online 24hs</li>
              </ul>
            </div>
          </div>

          <div className="card cardPlans">
            <img
              className="card-img imgPlans mx-auto containerPlans"
              src={imgSilverPlans}
              alt="figura perro y gato"
            />
            <div className="card-body">
              <h5 className="card-title">Plata</h5>
              <ul className="list-group">
                <li className="list-group-item">Hasta tres mascotas</li>
                <li className="list-group-item">
                  25% de descuento en cirujias
                </li>
                <li className="list-group-item">
                  Servicios veterinarios de emergencia
                </li>
                <li className="list-group-item"> Consultas online 24hs</li>
              </ul>
            </div>
          </div>

          <div className="card cardPlans">
            <img
              className="card-img imgPlans mx-auto containerPlans"
              src={imgGoldPlans}
              alt="figura animales varios"
            />
            <div className="card-body">
              <h5 className="card-title">Oro</h5>
              <ul className="list-group">
                <li className="list-group-item">Más de tres mascotas</li>
                <li className="list-group-item">
                  35% de descuento en alimentos
                </li>
                <li className="list-group-item">
                  Servicios veterinarios de emergencia
                </li>
                <li className="list-group-item"> Consultas online 24hs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-bottom" />
      <hr className="border-bottom" />
      <FormPlans />
    </div>
  );
};

export default PlansScreen;

