import "./Comment.css";

export const Comment = () => {
  return (
    <>
      <div className="comments">
        <h2>O que estão dizendo sobre nós</h2>
        <div className="wrapper">
          <div className="comment">
            {/* Foto e Nome */}
            <div className="comment-header">
              <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="comment-avatar"
              />
              <span className="comment-name">Luiz Felipe</span>
            </div>

            {/* Estrelas */}
            <div className="comment-stars">
              ⭐⭐⭐⭐⭐ {/* Substitua por lógica dinâmica se necessário */}
            </div>

            {/* Comentário */}
            <div className="comment-text">
              Quero expressar minha gratidão e satisfação pelo excelente serviço
              de instalação do office em meu notebook, Recomendo!!
            </div>
          </div>

          <div className="comment">
            {/* Foto e Nome */}
            <div className="comment-header">
              <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="comment-avatar"
              />
              <span className="comment-name">
                IZABELLA BORGES RODRIGUES COSTA
              </span>
            </div>

            {/* Estrelas */}
            <div className="comment-stars">
              ⭐⭐⭐⭐⭐ {/* Substitua por lógica dinâmica se necessário */}
            </div>

            {/* Comentário */}
            <div className="comment-text">
              Excelente atendimento, ótima qualidade e rapidez.
            </div>
          </div>

          <div className="comment">
            {/* Foto e Nome */}
            <div className="comment-header">
              <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="comment-avatar"
              />
              <span className="comment-name">Lucas Henrique</span>
            </div>

            {/* Estrelas */}
            <div className="comment-stars">
              ⭐⭐⭐⭐⭐ {/* Substitua por lógica dinâmica se necessário */}
            </div>

            {/* Comentário */}
            <div className="comment-text">
              Atendimento rápido, de qualidade e preço justo. Profissionais
              qualificados e atenciosos.
            </div>
          </div>

          <div className="comment">
            {/* Foto e Nome */}
            <div className="comment-header">
              <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="comment-avatar"
              />
              <span className="comment-name">Celio Bernardo de Lima</span>
            </div>

            {/* Estrelas */}
            <div className="comment-stars">
              ⭐⭐⭐⭐⭐ {/* Substitua por lógica dinâmica se necessário */}
            </div>

            {/* Comentário */}
            <div className="comment-text">
              Tive um problema em um equipamento eletrônico que foi resolvido
              perfeitamente
            </div>
          </div>

          <div className="comment">
            {/* Foto e Nome */}
            <div className="comment-header">
              <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="comment-avatar"
              />
              <span className="comment-name">Helder Allucci</span>
            </div>

            {/* Estrelas */}
            <div className="comment-stars">
              ⭐⭐⭐⭐⭐ {/* Substitua por lógica dinâmica se necessário */}
            </div>

            {/* Comentário */}
            <div className="comment-text">
              Empresa de tecnologia focada em gestão de acesso e ponto
            </div>
          </div>

          <div className="comment">
            {/* Foto e Nome */}
            <div className="comment-header">
              <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="comment-avatar"
              />
              <span className="comment-name">Joao Marcos Luca Costa</span>
            </div>

            {/* Estrelas */}
            <div className="comment-stars">
              ⭐⭐⭐⭐⭐ {/* Substitua por lógica dinâmica se necessário */}
            </div>

            {/* Comentário */}
            <div className="comment-text">Fabuloso serviço</div>
          </div>

          <div className="comment">
            {/* Foto e Nome */}
            <div className="comment-header">
              <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="comment-avatar"
              />
              <span className="comment-name">Willer Silva de Morais</span>
            </div>

            {/* Estrelas */}
            <div className="comment-stars">
              ⭐⭐⭐⭐⭐ {/* Substitua por lógica dinâmica se necessário */}
            </div>

            {/* Comentário */}
            <div className="comment-text">Bom atendimento.</div>
          </div>
        </div>
      </div>
    </>
  );
};
