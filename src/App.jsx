import Navbar from "./components/Navbar/Navbar";
import Head from "./components/Head/Head";
import Relogio from "./components/Relogio/Relogio";
import Footer from "./components/Footer/Footer";
import Redes from "./components/Redes/Redes";
import Contact from "./components/Contact/Contact";
import { Services } from "./components/Services/Services";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>

      <Head />
      <main>

      <Services></Services>
      </main>
      
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
