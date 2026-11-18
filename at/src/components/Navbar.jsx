import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student Portal</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/form">Student Form</Link>
      </div>
    </nav>
  );
}

export default Navbar;