import "./Redes.css";
import starlink from "../../assets/starlink.glb";

const Redes = () => {
  return (
    <model-viewer
      src={starlink} // Substitua pelo caminho correto do seu modelo
      alt="Antena Starlink"
      auto-rotate
      camera-controls
      style={{ width: "80vw", height: "80vh" }}
    ></model-viewer>
  );
};

export default Redes;
