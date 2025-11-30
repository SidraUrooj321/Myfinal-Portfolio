import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import "./style.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<section id="home"> <Home /></section>} />
            <Route path="/about" element={<section id="about"><About /></section>} />
            <Route path="/contact" element={<section id="contact"> <Contact /></section>} />
            <Route path="/education" element={<section id="education"><Education /></section>} />
            <Route path="/projects" element={<section id="projects"><Projects /></section>} />
            <Route path="/certificates" element={<section id="certificates"><Certificates /></section>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
