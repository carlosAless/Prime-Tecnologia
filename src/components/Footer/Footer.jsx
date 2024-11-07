import logowhite from "../../assets/logowhite.png"; // Ajuste o caminho da sua imagem
import whatsapp from "../../assets/whatsapp.svg"; // Ajuste o caminho da sua imagem
import facebook from "../../assets/facebook.svg";
import gmail from "../../assets/gmail.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logowhite} alt="logo" />
      </div>
      <div className="infoPrime">
        <p>Guia de navegação</p>
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Planos</li>
          </a>
          <a href="#">
            <li>Planos</li>
          </a>
          <a href="#">
            <li>Suporte</li>
          </a>
        </ul>
      </div>
      <div className="network">
        <span>Siga-nos nas redes</span>
        <ul>
          <li>
            <img src={whatsapp} alt="whatsapp" />
          </li>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={gmail} alt="gmail" />
          </li>
        </ul>
      </div>
      <div className="primetecnologia">&copy;Prime Tecnologia 2015 - 2024</div>
    </footer>
  );
};

export default Footer;
