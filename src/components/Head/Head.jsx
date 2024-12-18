import "./Head.css";
import { ReactTyped } from "react-typed";

import Particles from "../Particles";

const Head = () => {
  return (
    <div className="head">
      <Particles id="particles" />

      <header>
        <h1>
          PRIME TRASENDO SOLUÇÕES EM T.I PARA A SUA{" "}
          <ReactTyped
            className=""
            strings={["EMPRESA", "CASA", "REDE", "EQUIPE"]}
            typeSpeed={100}
            backSpeed={100}
            loop
            showCursor={true}
          />
          <br></br>
          <img
            src="https://cdn.dribbble.com/users/1459765/screenshots/3563580/scrolling_mousewheel.gif"
            style={{ width: "100px", marginTop: "100px" }}
            alt=""
          />
        </h1>
      </header>
    </div>
  );
};

export default Head;
