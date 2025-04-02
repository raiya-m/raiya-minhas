import React from "react";
import Skillsheader from "../components/Skillsheader";

function Skills() {
  const technologies = [
    "JavaScript", "TypeScript", "Python", "C", "C++",
    "SQL", "MATLAB", "HTML", "CSS", "LaTeX", "React.js", "Next.js", "Node.js", "FastAPI", "Flask",
    "Tailwind CSS", "NumPy", "pandas", "scikit-learn", "Transformers", "Git", "Docker", "Google Cloud", 
    "MySQL", "PostgreSQL", "MongoDB"
  ];

  return (
    <div
      id="skills"
      className="px-6 pt-16 flex flex-col items-center justify-start bg-white"
    >
      <div className="w-full max-w-4xl px-4 mx-auto">
        <div className="flex justify-center">
          <Skillsheader/>
        </div>

        {/* Tag section matches About width */}
        <div className="w-[90vw] max-w-2xl mx-auto flex flex-wrap justify-start gap-3 mt-6">
          {technologies.map((tech) => (
            <div key={tech} className="relative inline-flex group overflow-visible">
              {/* Glow background */}
              <div
                className="absolute -inset-2 rounded-md z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, #fb923c, #f472b6, #c084fc, #60a5fa)',
                }}
              />
              {/* Tag content */}
              <div className="relative z-10 px-3 py-1 bg-gray-100 text-black rounded-md text-sm font-medium transition-transform duration-200 group-hover:scale-[1.02]">
                {tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
