import "./Redes.css";
import computer from "../../assets/computer.svg";
import network from "../../assets/network.svg";

const Redes = () => {
  return (
    <div className="redesContainer">
      <div className="network">
        <img src={network} alt="redes" srcSet="" />
      </div>

      <h2>Seu computador está</h2>
      <h1>LENTO?</h1>

      <div className="computer">
        <img src={computer} alt="computer" />
      </div>
    </div>
  );
};

export default Redes;
