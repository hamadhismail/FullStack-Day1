import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import StudentForm from "./components/StudentForm";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<StudentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;