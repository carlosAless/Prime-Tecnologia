import "./Infra.css";
import computer from "../../assets/computer.svg";
import network from "../../assets/network.png";
import { ReactTyped } from "react-typed";

const Infra = () => {
  return (
    <div className="redesContainer">
      <h2>Serviços de rede e manutenção</h2>

      <div className="network">
        <img src={network} alt="redes" />
      </div>

      <div>
        <h2>Seu computador está</h2>

        <ReactTyped
          className="typewriterContainer"
          strings={["LENTO?", "SUJO?", "ESQUENTANDO?"]}
          typeSpeed={100}
          backSpeed={30}
          loop
          showCursor={true}
        />
      </div>

      <div className="computer">
        <img src={computer} alt="computer" />
      </div>
    </div>
  );
};

export default Infra;
