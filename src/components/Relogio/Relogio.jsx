import './Relogio.css'



import idclass from '../../assets/idclass.png'
import idflex from '../../assets/idflex.png'
import idlock from '../../assets/idlock.webp'
import catracaid from '../../assets/catracaid.png'

const Relogio = ()=>{
    return (
      <div className="section-relogio">
        <div className="title">
            <h2>Relogio de ponto</h2>
        </div>

        <main className='relogio'>
          
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

              <section className='produtosid'>
                 <img src={idclass} alt="idclass" id='idclass' srcSet="" />
                 <img src={idflex} alt="idflex" id='idflex' srcset="" />
                 <img src={idlock} alt="idclock" id='idlock' srcset="" />
                 <img src={catracaid} alt="catracaid" id='catracaid' srcset="" />
              </section>
          </section>

        </main>
      </div>
    )
  }

  export default Relogio;