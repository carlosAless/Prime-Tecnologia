import React from 'react';
import './Head.css'
import suporte from '../../assets/suporte.png'
import pessoas from '../../assets/pessoas.png'
import experiencia from '../../assets/experiencia.png'
import mapa from '../../assets/mapa.png'
import Particles from '../Particles'


const Head = () => {
return (
    <div className='head'>

<Particles id="particles"/>

<header>
    <h1>
        Prime trazendo soluções em T.I para a sua empresa
    </h1>
</header>

<section className="services-section">
        <div className="service-item">
            <img src={suporte} alt="suporte" srcSet="" />
          <p>Suporte 24/7</p>
        </div>
        <div className="service-item">
          <img src={pessoas} alt="+12 empresas mensalistas" className="icon" />
          <p>+12 empresas mensalistas</p>
        </div>
        <div className="service-item">
          <img src={experiencia} alt="+9 anos de experiência" className="icon" />
          <p>+9 anos de experiência</p>
        </div>
        <div className="service-item">
          <img src={mapa} alt="Atendimento em Jataí e região" className="icon" />
          <p>Atendimento em Jataí e região</p>
        </div>
      </section>
    </div>



);
};

export default Head;