
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>Student Portal</h2>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#attendance">Attendance</a></li>
        <li><a href="#assignments">Assignments</a></li>
        <li><a href="#profile">Profile</a></li>
      </ul>

      <div className="student">
        <span>Student</span>
        <div className="avatar">S</div>
      </div>

    </nav>
  );
}

export default Navbar;
