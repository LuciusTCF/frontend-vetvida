import React from "react";
import SobreNos2 from "../assets/sobrenosotrosVET2.jpg";
import "../css/aboutUs.css";
import Alejandra from "../assets/ALEVET.jpg";
import Abigail from "../assets/ABIVET.jpg";
import Flavia from "../assets/FAVIAVET.png";
import Lucas from "../assets/LUCASVET.png";
import { Link } from "react-router-dom";

const AboutUsScreen = () => {
  return (
    <>
      <div className="image-container-about">
        <img
          className="imgabout"
          src={SobreNos2}
          alt="Descripción de la imagen"
        />
        <div className="text-overlay textabout ">
          <p>THE ENCODERS</p>
        </div>
      </div>
      <div></div>
      <div className="container text-center ">
        <div className="row align-items-start">
          <div className="col containerAb">
            <div>
              <img
                className="w-100 img-container-avatar"
                src={Alejandra}
                alt="Alejandra"
              />
            </div>
            <div>
              <b>Alejandra Alaniz</b>
            </div>
          </div>
          <div className="col containerAb">
            <img
              className="w-100 img-container-avatar"
              src={Flavia}
              alt="Flavia"
            />
            <div>
              <b>Flavia Walther</b>
            </div>
          </div>
          <div className="col containerAb">
            <div>
              <img
                className="w-100 img-container-avatar"
                src={Lucas}
                alt="Lucas"
              />
              <div>
                <b>Lucas Chocobar</b>
              </div>
            </div>
          </div>
          <div className="col containerAb">
            <div>
              <img
                className="w-100 img-container-avatar"
                src={Abigail}
                alt="Abigail"
              />
              <div>
                <b>Abigail Bruno</b>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="card textAbout">
          <div className="card-body ">
            <h3 className="card-title">¿Quienes somos?</h3>
            <p className="card-text">
              Somos un apasionado equipo de desarrolladores web Full Stack
              comprometidos con la creación de experiencias en línea
              excepcionales. En nuestro equipo, la colaboración es clave.
              Creemos en la transparencia, la comunicación abierta y el trabajo
              conjunto para superar obstáculos y lograr resultados
              extraordinarios. Cada miembro aporta una perspectiva única y
              habilidades especializadas que se fusionan para crear un equipo
              Full Stack eficiente. Trabajamos para garantizar la satisfacción y
              el éxito continuo de cada proyecto.
            </p>
          </div>
        </div>

        <div className="card text-center containerAb cardAbout mb-3">
          <div className="card-body mb-4">
            <h5 className="card-title">Contactate con nuestro equipo!</h5>
            <p className="card-text">
              Nos asociamos contigo desde el primer día, trabajando juntos para
              entender tus objetivos y necesidades. Tu éxito es nuestro éxito.
            </p>
            <button target="_blank" className="btn btn-outline-dark">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsScreen;
