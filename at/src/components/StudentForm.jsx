import { useState } from "react";
import "./StudentForm.css";

function StudentForm() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [age, setAge] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
    setName("");
    setDepartment("");
    setAge("");
  }

  return (
    <div className="student-form-container">
      <h1>Student Registration</h1>
      <p className="form-subtitle">Enter your student details below</p>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Department</label>
        <input
          type="text"
          placeholder="Enter your department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

        <label>Age</label>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          min="1"
          required
        />

        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="success-popup">
            <div className="success-icon">✓</div>

            <h2>Submitted Successfully!</h2>
            <p className="popup-message">
              Your student details have been submitted.
            </p>

            <div className="submitted-details">
              <div className="detail-row">
                <span>Name</span>
                <strong>{name}</strong>
              </div>

              <div className="detail-row">
                <span>Department</span>
                <strong>{department}</strong>
              </div>

              <div className="detail-row">
                <span>Age</span>
                <strong>{age}</strong>
              </div>
            </div>

            <button className="close-popup-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentForm;