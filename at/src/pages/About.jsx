import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>

      <p className="about-intro">
        Welcome to Student Portal, a platform designed
        to manage student information efficiently.
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make student management
          easier, faster and more organized.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Features</h2>

        <div className="about-features">
          <div className="feature-card">
            <h3>Student Profiles</h3>
            <p>Manage student information.</p>
          </div>

          <div className="feature-card">
            <h3>Departments</h3>
            <p>Organize department details.</p>
          </div>

          <div className="feature-card">
            <h3>Dashboard</h3>
            <p>View student information easily.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;