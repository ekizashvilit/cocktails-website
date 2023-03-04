import { Link } from 'react-router-dom';
import logo from '../logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cocktail logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" className="link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
