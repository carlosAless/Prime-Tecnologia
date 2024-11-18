import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrimeTecnologia } from "./pages/PrimeTecnologia/PrimeTecnologia";
import { NotFound } from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="Prime-Tecnologia/"
          element={<PrimeTecnologia></PrimeTecnologia>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
