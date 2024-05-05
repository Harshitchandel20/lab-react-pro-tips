import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">Kalvium ❤️</Link>

      <ul className="navbar-menu">

        <li><Link to="/Contact" className="navbar-link">Contact</Link></li>

        <li><Link to="/registration" className="navbar-link">Registration Form</Link></li>

      </ul>
    </div>
  );
}

export default Navbar;
