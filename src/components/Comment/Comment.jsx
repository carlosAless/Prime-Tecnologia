import "./Comment.css";

export const Comment = () => {

  const comments = [
    {
      id: 1,
      name: "Luiz Felipe",
      stars: "⭐⭐⭐⭐⭐",
      text: "Quero expressar minha gratidão e satisfação pelo excelente serviço de instalação do office em meu notebook. Recomendo!!",
    },
    {
      id: 2,
      name: "IZABELLA BORGES RODRIGUES COSTA",
      stars: "⭐⭐⭐⭐⭐",
      text: "Excelente atendimento, ótima qualidade e rapidez.",
    },
    {
      id: 3,
      name: "Lucas Henrique",
      stars: "⭐⭐⭐⭐⭐",
      text: "Atendimento rápido, de qualidade e preço justo. Profissionais qualificados e atenciosos.",
    },
    {
      id: 4,
      name: "Celio Bernardo de Lima",
      stars: "⭐⭐⭐⭐⭐",
      text: "Tive um problema em um equipamento eletrônico que foi resolvido perfeitamente",
    },
    {
      id: 5,
      name: "Lucas Henrique",
      stars: "⭐⭐⭐⭐⭐",
      text: "Atendimento rápido, de qualidade e preço justo. Profissionais qualificados e atenciosos.",
    },
    {
      id: 6,
      name: "Helder Allucci",
      stars: "⭐⭐⭐⭐⭐",
      text: "Empresa de tecnologia focada em gestão de acesso e ponto",
    },
    {
      id: 7,
      name: "Joao Marcos Luca Costa",
      stars: "⭐⭐⭐⭐⭐",
      text: "Fabuloso serviço",
    },
    {
      id: 8,
      name: "Willer Silva de Morais",
      stars: "⭐⭐⭐⭐⭐",
      text: "Bom atendimento.",
    },
  ];

  const infiniteComments = [...comments, ...comments];

  return (
    <div className="comments">
      <h2>O que estão dizendo sobre nós</h2>
      <div className="wrapper">
        <div className="comment-track">
          {infiniteComments.map((comment, index) => (
            <div className="comment" key={index}>
              <div className="comment-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User Avatar"
                  className="comment-avatar"
                />
                <span className="comment-name">{comment.name}</span>
              </div>
              <div className="comment-stars">{comment.stars}</div>
              <div className="comment-text">{comment.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
