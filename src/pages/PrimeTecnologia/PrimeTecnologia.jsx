import Navbar from "../../components/Navbar/Navbar";
import Head from "../../components/Head/Head";
import Relogio from "../../components/Relogio/Relogio";
import Footer from "../../components/Footer/Footer";
import Infra from "../../components/Infra/Infra";
import Contact from "../../components/Contact/Contact";
import { Services } from "../../components/Services/Services";
import { Comment } from "../../components/Comment/Comment";
import "./PrimeTecnologia.css";

export const PrimeTecnologia = () => {
  return (
    <div className="pageContainer">
      <div className="title-section about">
        <h2>SOBRE</h2>
      </div>
      <div className="title-section dot">
        <h2>RELÓGIO DE PONTO</h2>
      </div>
      <div className="title-section infra">
        <h2>INFRAESTRUTURA DE T.I</h2>
      </div>
      <div className="title-section contact">
        <h2>CONTATO</h2>
      </div>
      <Navbar></Navbar>
      <Head />
      <div className="layoutWrapper">
        <main className="main">
          <Services></Services>
          <Relogio></Relogio>
        </main>
        <Infra></Infra>
        <Comment></Comment>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
};
