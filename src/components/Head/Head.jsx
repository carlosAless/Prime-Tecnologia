import "./Head.css";
import suporte from "../../assets/suporte.png";
import empresas from "../../assets/empresas.png";
import avaliacao from "../../assets/avaliacao.png";
import mapa from "../../assets/mapa.png";
import Particles from "../Particles";

const Head = () => {
  return (
    <div className="head">
      <Particles id="particles" />

      <header>
        <h1>
          PRIME TRASENDO SOLUÇÕES EM T.I PARA A SUA EMPRESA
          <br></br>
          <img
            src="https://cdn.dribbble.com/users/1459765/screenshots/3563580/scrolling_mousewheel.gif"
            style={{ width: "100px", marginTop: "100px" }}
            alt=""
          />
        </h1>
      </header>

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
    </div>
  );
};

export default Head;
