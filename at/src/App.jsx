
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <h1>Student Dashboard</h1>

      <div className="card-container">
        <Card name="Hamadh" dept="CSE" year="2nd Year" />
        <Card name="Ahmed" dept="IT" year="3rd Year" />
        <Card name="Ali" dept="ECE" year="1st Year" />
      </div>
    </div>
  );
}

export default App;
