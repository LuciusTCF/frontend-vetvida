import React from "react";
import CardApp from "../components/CardApp";
import { infoProfessionals } from "../data/dataProfessionals";
import { infoComment } from "../data/dataComment";
import imagenhome from "../assets/home.jpg";
import SponsorsApp from "../components/SponsorsApp";
import CarouselApp from "../components/CarouselApp";
import "../css/home.css";
import CarouselProdHomeApp from "../components/CarouselProdHomeApp";

const HomeScreen = () => {
  return (
    <div>
      <div className="overlay-container">
        <img src={imagenhome} className="imghome" alt="imagen de gato" />
        <div className="overlay overlay-home d-flex h-100 w-100 align-items-center text-white">
          <p>
            En <b> Vet Vida </b>
            <br /> Bindamos servicios <br /> dignos de calidez <br /> y
            excelencia
          </p>
        </div>
      </div>

      <div className="servicios d-flex parrafoshome justify-content-center text-center">
        <p className="mx-5 my-4 lh-lg ">
          <b>En VetVida te ofrecemos: </b>
          <br />
          <br />
          Consulta general <i className="fa fa-paw" aria-hidden="true"></i>{" "}
          Medicina preventiva: vacunación y desparasitación{" "}
          <i className="fa fa-paw" aria-hidden="true"></i> Limpieza dental{" "}
          <i className="fa fa-paw" aria-hidden="true"></i> Esterilizaciones{" "}
          <i className="fa fa-paw" aria-hidden="true"></i> Cirugías{" "}
          <i className="fa fa-paw" aria-hidden="true"></i> Rayos x{" "}
          <i className="fa fa-paw" aria-hidden="true"></i> Fisioterapia y
          rehabilitación <i className="fa fa-paw" aria-hidden="true"></i>{" "}
          Laboratorio clínico <i className="fa fa-paw" aria-hidden="true"></i>{" "}
          Baño y peluquería <br /> <br />
        </p>
      </div>

      <CarouselApp />

      <div>
        <div className="row mx-2 my-2 g-3 profesionales">
          <p>
            <b>Tus mascotas en las mejores manos.. nuestros profesionales:</b>
          </p>
          {infoProfessionals.map((item, index) => (
            <CardApp key={index} item={item} />
          ))}
        </div>
      </div>

      <div className=" parrafoshome mx-3 my-2">
        <p>
          <b>Todo lo que tu mascota necesita, lo encotras aqui en VetVida</b>
        </p>
        <CarouselProdHomeApp />
      </div>

      <SponsorsApp />

      <div>
        <div className="card mx-3 mb-5">
          <div className="card-header bgComentario">Gracias por confiar en nosotros:</div>
          <ul className="list-group list-group-flush">
            {infoComment.map((item, index) => (
              <li key={index} className="list-group-item servicios">
                {item.date + item.name + item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
