import React from "react";
import Skillsheader from "../components/Skillsheader";

  function Skills() {
    const technologies = [
      "JavaScript", "TypeScript", "Python", "C", "C++",
      "SQL", "MATLAB", "HTML", "CSS", "LaTeX", "React.js", "Next.js", "Node.js", "FastAPI", "Flask", "Django",
      "Tailwind CSS", "NumPy", "pandas", "scikit-learn", "Transformers", "Git", "Docker", "Google Cloud", 
      "MySQL", "PostgreSQL", "MongoDB"
    ];
  
    return (
        <div
        id="about"
        className="min-h-screen px-6 pt-28 sm:pt-20 lg:pt-25 flex flex-col items-center justify-center bg-white"
      >
        <Skillsheader></Skillsheader>
            {technologies.map((tech) => (
              <div key={tech} className="relative group">
                <div className="relative z-10 px-3 py-1 bg-gray-100 text-black rounded-md text-sm font-medium transition-all duration-200 group-hover:scale-[1.02]">
                  {tech}
                </div>
                <div
                  className="absolute inset-0 z-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-md"
                  style={{
                    background: 'linear-gradient(to bottom, #fb923c, #f472b6, #c084fc, #60a5fa)',
                  }}
                />
              </div>
            ))}
          </div>
    );
  }
  
  
export default Skills;