import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, I’m</h3>
        <h1>Sidra Malik</h1>
        <h3>And I’m a <span>Frontend Developer</span></h3>
        <p>Passionate about crafting interactive web experiences using modern frontend tools and technologies.</p>

        <div className="btn-bo">
          <Link to="/contact" className="btn-1">Hire Me</Link>
        </div>
      </div>

      <div className="img-bo">
        <img src="/hijaban.jpeg" alt="Sidra Malik" />
      </div>
    </section>
  );
};

export default Home;
