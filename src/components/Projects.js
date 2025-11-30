import React from "react";
import "./Projects.css";
import project1 from "../images/project1.jpeg";
import project2 from "../images/project2.jpeg";
import project3 from "../images/project3.jpeg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1",
      image: project1,
      link: "#"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of project 2",
      image: project2,
      link: "#"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of project 3",
      image: project3,
      link: "#"
    }
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">

            <img src={project.image} alt={project.title} className="project-img" />

            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <a href={project.link} className="project-btn">
              View Project
            </a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
