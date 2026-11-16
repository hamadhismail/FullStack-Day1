import "./Card.css";

function Card({ name, dept, year }) {
  return (
    <div className="card">
      <h2>Student Details</h2>

      <p>Name: {name}</p>
      <p>Department: {dept}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export default Card;