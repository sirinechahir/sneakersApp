import '../styles/Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-link">Accueil</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact" className="menu-link">Contact</Link>
        </li>
        <li className="menu-item">
          <Link to="/cart" className="menu-link">Panier</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
