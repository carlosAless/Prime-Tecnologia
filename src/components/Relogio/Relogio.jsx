import './Relogio.css'

import relogio from '../../assets/relogio.png'
import rhid from '../../assets/rhid.webp'

const Relogio = ()=>{
    return (
      <div className="section-relogio">
        <div className="title">
            <h2>Relogio de ponto</h2>
        </div>

        <main className='relogio'>
          <div>
          <section className="info">
              <div className="title-controle">
                <h2>Controle de acesso</h2>
              </div>

              <span className='descricao'>
                <p>
                    O controle de acesso da Control iD é equipado com o mais moderno recurso de identificação
                    , incluindo a prática e segura tecnologia de leitura de impressão digital 
                </p>
              </span>

              <div className="btn">
                <button><a href="#">Saiba mais</a></button>
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
                <p>Control iD</p>
                <p>Control iD</p>

              </div>
          </section>
          </div>
          
          <section className='rhid'>
            <img src={rhid} alt="" srcSet="" />
          </section>


        </main>
      </div>
    )
  }

  export default Relogio;