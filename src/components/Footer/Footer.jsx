import "./Footer.css";
import logowhite from "../../assets/logowhite.png";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logowhite} alt="logo" srcSet="" />
      </div>
      <div className="network">facebook</div>
      <div className="primetecnologia">&copy;Prime Tecnologia 2015 - 2024</div>
    </footer>
  );
};

export default Footer;
