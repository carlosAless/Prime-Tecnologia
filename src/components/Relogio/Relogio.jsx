import "./Relogio.css";

import rhid from "../../assets/rhid.webp";
import controleacesso from "../../assets/controleacesso.svg";
import repidclass from "../../assets/idclass.png";
import bobina from "../../assets/bobina.svg";
import display from "../../assets/display.svg";
import usb from "../../assets/usb.svg";
import Internet from "../../assets/Internet.svg";
import nuvem from "../../assets/nuvem.svg";
import digital from "../../assets/digital.svg";
import codigo from "../../assets/codigo.svg";

const Relogio = () => {
  return (
    <div>
      <div className="section-relogio">
        <main className="relogio">
          <section className="info">
            <div className="title-controle">
              <h2>Controle de acesso</h2>
            </div>

            <span className="descricao">
              <p>
                O controle de acesso da Control iD é equipado com o mais moderno
                recurso de identificação , incluindo a prática e segura
                tecnologia de leitura de impressão digital
              </p>
            </span>

            <div className="btn">
              <button>
                <a href="#">Saiba mais</a>
              </button>
            </div>
          </section>
          <section className="controle-acesso">
            <div className="escrito">
              <p>Control iD</p>
              <p>Control iD</p>
              <p>Control iD</p>
              <p>Control iD</p>
              <p>Control iD</p>
              <p>Control iD</p>
              <p>Control iD</p>
            </div>

            <section className="produtosid">
              <img src={controleacesso} alt="idclass" id="idclass" srcSet="" />
            </section>
          </section>
        </main>
        <section className="revenda">
          <p>
            <span>Revendedor autorizado</span> Control <span>iD</span>
          </p>
        </section>

        <section className="sectionClock">
          <h2>REP IDClass Equipamento líder em vendas</h2>
          <div className="containerClock">
            {/* Coluna Direita */}
            <div className="right">
              <div className="clockInformation info1">
                <p>Capacidade de bobina até 400 metros</p>
                <img src={bobina} alt="bobina" />
              </div>
              <div className="clockInformation info2">
                <p>Display colorido de 2,4 polegadas</p>
                <img src={display} alt="display" />
              </div>
              <div className="clockInformation info3">
                <p>Leitor de código de barras</p>
                <img src={codigo} alt="codigo" />
              </div>
            </div>

            {/* Coluna Central */}
            <div className="center">
              <div className="clockInformation info4">
                <p>Conexão de Internet</p>
                <img src={Internet} alt="Internet" />
              </div>
              <div className="imageContainer">
                <img src={repidclass} alt="idclass" className="idclass" />
                {/* SVG para as linhas */}
              </div>
            </div>

            {/* Coluna Esquerda */}
            <div className="left">
              <div className="clockInformation info5">
                <img src={nuvem} alt="nuvem" />
                <p>
                  RH<span>ID</span> + IDCLOUD integração com software de
                  apuração de ponto na nuvem
                </p>
              </div>
              <div className="clockInformation info6">
                <img src={usb} alt="usb" />
                <p>Duas portas USB fiscal e geral</p>
              </div>
              <div className="clockInformation info7">
                <img src={digital} alt="digital" />
                <p>Leitor de digital</p>
              </div>
            </div>
            <svg className="svgLines">
              {/* Linha quebrada para "Capacidade de bobina até 400 metros" */}
              <line
                x1="50%"
                y1="15%"
                x2="50%"
                y2="28%"
                stroke="red"
                strokeWidth="1"
              />

              {/* Linha quebrada para "Display colorido de 2,4 polegadas" */}
              <line
                x1="40%"
                y1="17%"
                x2="45%"
                y2="30%"
                stroke="red"
                strokeWidth="1"
              />
              <line
                x1="30%"
                y1="17%"
                x2="40%"
                y2="17%"
                stroke="red"
                strokeWidth="1"
              />

              {/* Outras linhas para conectar os outros textos conforme necessário */}

              <line
                x1="30%"
                y1="50%"
                x2="39%"
                y2="50%"
                stroke="red"
                strokeWidth="1"
              />

              <line
                x1="30%"
                y1="84%"
                x2="41%"
                y2="84%"
                stroke="red"
                strokeWidth="1"
              />

              <line
                x1="60%"
                y1="17%"
                x2="55%"
                y2="30%"
                stroke="red"
                strokeWidth="1"
              />
              <line
                x1="70%"
                y1="17%"
                x2="60%"
                y2="17%"
                stroke="red"
                strokeWidth="1"
              />

              <line
                x1="70%"
                y1="50%"
                x2="60%"
                y2="50%"
                stroke="red"
                strokeWidth="1"
              />

              <line
                x1="70%"
                y1="84%"
                x2="60%"
                y2="84%"
                stroke="red"
                strokeWidth="1"
              />
            </svg>
          </div>
        </section>

        <section className="rhid">
          <h2>Sistema de ponto integrado ao RHID</h2>
          <p>RHID para gerenciamento de RH</p>

          <div className="rhidImage">
            <img src={rhid} alt="rhid" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Relogio;
