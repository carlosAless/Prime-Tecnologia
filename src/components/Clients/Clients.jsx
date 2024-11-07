import venus from "../../assets/venus.png";
import prefeitura from "../../assets/prefeiturajatai.png";
import metra from "../../assets/metra.png";
import "./Clients.css";

export const Clients = () => {
  return (
    <div className="clients">
      <h2>Clientes que confiam</h2>
      <div className="carrocel">
        <div className="venus client">
          <img src={venus} alt="venus" />
        </div>
        <div className="prefeitura client">
          <img src={prefeitura} alt="prefeitura" />
        </div>
        <div className="metra client">
          <img src={metra} alt="metra" />
        </div>
      </div>
    </div>
  );
};
