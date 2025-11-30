import React from "react";
import './ExperiencePage.css'
const ExperiencePage = () => {
  return (
    <div className="experience-page">
      <h1>My Experience</h1>

      <div className="exp-card">
        <h2>Frontend Developer</h2>
        <p className="exp-company">Arfa Karim Technology and Incubation Centre • 2023 - Present</p>
        <p>Worked on React-based UI development, reusable components, and responsive design implementation.</p>
      </div>

      <div className="exp-card">
        <h2>Web Developer Intern</h2>
        <p className="exp-company">Smart-tech Rawalpindi • 2022 - 2023</p>
        <p>Assisted with website maintenance, UI improvements, and basic backend tasks.</p>
      </div>
    </div>
  );
};

export default ExperiencePage;
