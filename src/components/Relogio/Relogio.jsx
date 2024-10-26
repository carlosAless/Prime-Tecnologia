import './Relogio.css'

import relogio from '../../assets/relogio.png'

const Relogio = ()=>{
    return (
      <div className="section-relogio">
        <div className="title">
            <h2>Relogio de ponto</h2>
        </div>

        <main>
          <img src={relogio} alt="relogio" srcset="" style={{width:"1000px"}}/>
        </main>
      </div>
    )
  }

  export default Relogio;