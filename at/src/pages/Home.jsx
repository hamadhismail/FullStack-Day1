
import Card from "../Components/Card";

function Home() {
  const students = [
    { id: 1, name: "Hamadh", dept: "CSE", year: "2nd Year" },
    { id: 2, name: "Ahmed", dept: "IT", year: "3rd Year" },
    { id: 3, name: "Ali", dept: "ECE", year: "1st Year" }
  ];

  return (
    <div className="home">

      {/* Welcome Section */}
      <div className="welcome">
        <p>STUDENT MANAGEMENT SYSTEM</p>
        <h1>Student Dashboard</h1>
        <span>
          Welcome back! Manage your student information.
        </span>
      </div>

      {/* Dashboard Statistics */}
      <div className="dashboard-info">

        <div className="info-card">
          <h3>Total Students</h3>
          <h2>{students.length}</h2>
        </div>

        <div className="info-card">
          <h3>Departments</h3>
          <h2>3</h2>
        </div>

        <div className="info-card">
          <h3>Academic Status</h3>
          <h2>Active</h2>
        </div>

      </div>

      {/* Student Details */}
      <h2 className="section-title">Student Details</h2>

      <div className="card-container">
        {students.map((student) => (
          <Card
            key={student.id}
            name={student.name}
            dept={student.dept}
            year={student.year}
          />
        ))}
      </div>

    </div>
  );
}

export default Home;
