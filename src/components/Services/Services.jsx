import React from "react";
import suporte from "../../assets/suportewhite.svg";
import empresas from "../../assets/empresawhite.svg";
import avaliacao from "../../assets/experienciawhite.svg";
import mapa from "../../assets/mapawhite.svg";
import "./Services.css";
import { Clients } from "../Clients/Clients";
export const Services = () => {
  return (
    <section className="services-section">
      <div className="highlights-container">
        <div className="highlight-item">
          <img src={suporte} alt="suporte" />
          <p>Suporte 24/7</p>
        </div>
        <div className="highlight-item">
          <img src={empresas} alt="+12 empresas mensalistas" className="icon" />
          <p>+12 empresas mensalistas</p>
        </div>
        <div className="highlight-item">
          <img src={avaliacao} alt="+9 anos de experiência" className="icon" />
          <p>+9 anos de experiência</p>
        </div>
        <div className="highlight-item">
          <img
            src={mapa}
            alt="Atendimento em Jataí e região"
            className="icon"
          />
          <p>Atendimento em Jataí e região</p>
        </div>
      </div>

      <div className="services-list">
        <div className="service-item">
          <div className="service-icon"></div>
          <h4>Relógio de ponto</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>

        <div className="service-item">
          <div className="service-icon"></div>
          <h4>Relógio de ponto</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>

        <div className="service-item">
          <div className="service-icon"></div>
          <h4>Redes e infraestrutura</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>

        <div className="service-item">
          <div className="service-icon"></div>
          <h4>Suporte em T.I</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>

        <div className="service-item">
          <div className="service-icon"></div>
          <h4>Venda de equipamentos</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
};
