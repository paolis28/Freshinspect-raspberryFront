import '../assets/Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
        <section className='menuOpc'>
        <Link to="/chequeo"><div>
            <h2>Chequeo</h2>
        </div>
        </Link>
        <Link to="/monitoreo"><div>
            <h2>Monitoreo</h2>
        </div>
        </Link>
        </section>
        </div>
    );

};


export default Menu;