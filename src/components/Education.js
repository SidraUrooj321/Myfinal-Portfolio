import React from "react";

const Education = () => {
  const educationList = [
    { title: "Matriculation", school: "FG College", grade: "A+" },
    { title: "Intermediate", school: "Jinnah Grammar College", year: "2016", grade: "A" },
    { title: "Bachelor's Degree", school: "Punjab College", grade: "A" },
    { title: "Master Degree", school: "Arid Agricultural University", grade: "A" },
    { title: "Bachelor of Education", school: "Punjab College", grade: "B" },
  ];

  return (
    <section className="education">
      <h1>My Education</h1>
      <div className="education-container">
        {educationList.map((item, index) => (
          <div className="education-item" key={index}>
            <h2>{item.title}</h2>
            <p>{item.school}</p>
            {item.year && <p>Year of Passing: {item.year}</p>}
            <p>Grade: {item.grade}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
