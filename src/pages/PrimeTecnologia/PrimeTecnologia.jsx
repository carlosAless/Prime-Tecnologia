import Navbar from "../../components/Navbar/Navbar";
import Head from "../../components/Head/Head";
import Relogio from "../../components/Relogio/Relogio";
import Footer from "../../components/Footer/Footer";
import Redes from "../../components/Redes/Redes";
import Contact from "../../components/Contact/Contact";
import { Services } from "../../components/Services/Services";
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
      <main className="main">
        <Services></Services>
        <Relogio></Relogio>
      </main>
      <Redes></Redes>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};
