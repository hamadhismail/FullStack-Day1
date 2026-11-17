import "./Card.css";

function Card(props) {
  return (
    <div className="student-card">
      <div className="student-avatar">
        {props.name.charAt(0).toUpperCase()}
      </div>

      <h2>{props.name}</h2>
      <p>Department: <strong>{props.dept}</strong></p>
      <p>Year: <strong>{props.year}</strong></p>

      <span className="student-status">
        Active Student
      </span>
    </div>
  );
}

export default Card;