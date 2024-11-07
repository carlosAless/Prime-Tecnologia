import React from 'react'
import suporte from "../../assets/suportewhite.svg";
import empresas from "../../assets/empresawhite.svg";
import avaliacao from "../../assets/experienciawhite.svg";
import mapa from "../../assets/mapawhite.svg";
import "./Services.css"

export const Services = () => {
  return (
    <section className="services-section">
    <div className="service-item">
      <img src={suporte} alt="suporte" srcSet="" />
      <p>Suporte 24/7</p>
    </div>
    <div className="service-item">
      <img src={empresas} alt="+12 empresas mensalistas" className="icon" />
      <p>+12 empresas mensalistas</p>
    </div>
    <div className="service-item">
      <img src={avaliacao} alt="+9 anos de experiência" className="icon" />
      <p>+9 anos de experiência</p>
    </div>
    <div className="service-item">
      <img
        src={mapa}
        alt="Atendimento em Jataí e região"
        className="icon"
      />
      <p>Atendimento em Jataí e região</p>
    </div>
  </section>
  )
}
