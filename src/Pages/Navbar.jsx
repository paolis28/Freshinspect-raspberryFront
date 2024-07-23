import { Link } from 'react-router-dom';
import '../assets/Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-brand">Fresh-Inspect</div>
    <div className="navbar-links">
      <Link to={"/chequeo"}>Chequeo</Link>
      <span className="navbar-divider">|</span>
      <Link to={"/grafica"}>Grafica</Link>
      <span className="navbar-divider">|</span>
      <Link to={"/monitoreo"}>Monitoreo</Link>
    </div>
    </nav>
  );
}

export default Navbar;


