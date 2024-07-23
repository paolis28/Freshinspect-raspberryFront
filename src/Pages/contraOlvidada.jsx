import '../assets/contraOlvidada.css';

const ContraseniaOlvidada = () => {
  return (
    <div className="contenedorContra">
    <div className="circulo-superiorContra"></div>
    <div className="circulo-inferiorContra"></div>
    <h2>¿Olvidaste tu contraseña?</h2>
    <form>
      <input type="password" placeholder="Contraseña" className="inputContra" />
      <input type="password" placeholder="Confirmar contraseña" className="inputContra" />
      <button type="submit" className="botonContra">Guardar</button>
    </form>
  </div>
  );
};

export default ContraseniaOlvidada;