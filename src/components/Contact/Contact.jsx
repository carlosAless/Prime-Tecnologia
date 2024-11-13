import "./Contact.css";
import { Clients } from "../Clients/Clients";

const Contact = () => {
  return (
    <div className="container-contact">
      <Clients></Clients>

      <div>
        <form action="#" className="contact">
          <h2>Envie sua mensagem</h2>
          <div className="input-group">
            <input type="text" id="nome" name="nome" required />
            <label htmlFor="nome">Nome</label>
          </div>

          <div className="input-group">
            <input type="email" id="email" name="email" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-group">
            <input type="text" id="assunto" name="assunto" required />
            <label htmlFor="assunto">Assunto</label>
          </div>

          <div className="input-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              rows={5}
              cols={30}
              name="mensagem"
              id="mensagem"
            ></textarea>
          </div>

          <button type="submit">ENVIAR</button>
        </form>

        <div className="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5304.601907995231!2d-51.729100923518466!3d-17.89620267821518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93626c9e80a0c96b%3A0x53a44c516bb07a92!2sPrime%20Tecnologia!5e1!3m2!1spt-BR!2sbr!4v1729974360205!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            allowfullscreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
