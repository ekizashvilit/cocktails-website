import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img
            src="https://img.freepik.com/free-vector/cocktail-lounge-logo-template-with-minimal-cocktail-glass_53876-117632.jpg?w=826&t=st=1677862961~exp=1677863561~hmac=6152831e2c8bd92036ee8042806bb36afe2b5b258e1ea980820ef0fbb6626151"
            alt="cocktail logo"
            height="100px"
          />
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
