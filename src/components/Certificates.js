import React from "react";
import "./Certificates.css";
import certificateImage from "../images/Certificate.jpg";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "My Certificate",
      description: "This is my certification awarded for completing the course.",
      image: certificateImage
    }
  ];

  return (
    <div className="certificates-page">
      <h1 className="certificates-title">My Certificates</h1>

      <div className="certificates-container">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img src={cert.image} alt={cert.title} />
            <h2>{cert.title}</h2>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
