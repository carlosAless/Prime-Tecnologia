import "./Relogio.css";

import rhid from "../../assets/rhid.webp";
import controleacesso from "../../assets/controleacesso.svg";
import repidclass from "../../assets/idclass.png";

const Relogio = () => {
  return (
    <>
      <div className="section-relogio">
        <div className="title">
          <h2>RELÓGIO DE PONTO</h2>
        </div>

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
            <div className="right">
              <div className="clockInformation info1">
                <p>Capacidade de bobina até 400 metros</p>
              </div>
              <div className="clockInformation info2">
                <p>Display colorido de 2,4 polegadas</p>
              </div>

              <div className="clockInformation info3">
                <p>Duas portas USB fiscal e geral</p>
              </div>
            </div>
            <div className="center">
              <div className="clockInformation info4">
                <p>Conexão de Internet</p>
              </div>

              <div className="imageContainer">
                <img src={repidclass} alt="idclass" className="idclass" />
                {/* SVG para as linhas com quebras */}
              </div>
            </div>
            <div className="left">
              <div className="clockInformation info5">
                <p>
                  RH<span>ID</span> + IDCLOUD integração com software de
                  apuração de ponto na nuvem
                </p>
              </div>

              <div className="clockInformation info6">
                <p>Leitor de digital</p>
              </div>
              <div className="clockInformation info7">
                <p>Leitor de código de barras</p>
              </div>
            </div>
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
    </>
  );
};

export default Relogio;
