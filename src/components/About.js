import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about-img">
        <img src="/hijab queen.jpg" alt="Sidra" />
      </div>

      <div className="about-content">
        <h2>About <span>Me</span></h2>
        <h3>Frontend <span>Developer</span></h3>
        <p>Hello and welcome to my portfolio. I am a passionate learner exploring the world of development. I enjoy learning new programming languages, problem-solving techniques, and building projects.</p>

        <div className="about-buttons">
          <Link to="/contact" className="btn-2">Contact</Link>
          <Link to="/certificates" className="btn-2">Certificates</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
