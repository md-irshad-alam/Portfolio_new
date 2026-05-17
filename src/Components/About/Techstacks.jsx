import React from "react";
import "./Techstacks.css";

export const Techstacks = () => {
  const skills = [
    "Java",
    "Javascript",
    "Typescript",
    "HTML & CSS",
    "React.js",
    "Redux",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDb",
    "NPM",
    "Netlify",
    "Github",
    "Tailwind"
  ];

  return (
    <>
      <div className="section mainTech">
        <h2 className="section__title different" data-aos="fade-down">
          Technical <span className="different">Skills</span>
        </h2>
        <div className="techsection">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card" 
              data-aos="unfold" 
              data-aos-delay={index * 100}
            >
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
