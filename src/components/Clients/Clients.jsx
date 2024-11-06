import React from "react";
import venus from "../../assets/venus.png"
import prefeitura from "../../assets/prefeiturajatai.png"
import "./Clients.css"

export const Clients = () => {
  return (
    <div className="clients">
      <h2>Clientes que confiam</h2>
      <div className="carrocel">
        <div className="venus client">
          <img src={venus} alt="vens"/>
        </div>
        <div className="prefeitura client">
          <img src={prefeitura} alt="prefeitura" />
        </div>
      </div>
    </div>
  );
};
