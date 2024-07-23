import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login.jsx";
import CrearUsuario from "./Pages/CrearCuenta.jsx";
import ContraseniaOlvidada from "./Pages/contraOlvidada.jsx";
import Monitoreo from "./Pages/Monitoreo.jsx";
import Menu from './Pages/Menu.jsx';
import Graficacircular from './Pages/Graficacirculo.jsx';
import Tabla from "./Pages/Tabla.jsx";
import Chequeo from "./Pages/Chequeo.jsx"

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/crearUsuario" element={<CrearUsuario />} />
      <Route path="/contraseniaOlvidada" element={<ContraseniaOlvidada />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/grafica" element={<Graficacircular />} />
      <Route path="/monitoreo" element={<Monitoreo />} />
      <Route path="/tabla" element={<Tabla />} />
      <Route path="/chequeo" element={<Chequeo />} />
    </Routes>
  );
};

export default Rutas;
