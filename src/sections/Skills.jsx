import React from "react";
import Skillsheader from "../components/Skillsheader";

function Skills() {
  const technologies = [
    "JavaScript", "TypeScript", "Python", "C", "C++",
    "SQL", "Solidity", "MATLAB", "HTML", "CSS", "LaTeX", "React.js", "Next.js", "Node.js", "FastAPI", "Flask", "Django",
    "Tailwind CSS", "NumPy", "pandas", "scikit-learn", "Git", "Docker", "Google Cloud", 
    "MySQL", "PostgreSQL", "MongoDB"
  ];

  return (
    <div
      id="skills"
      className="px-1 sm:px-0 md:px-3 pt-16 flex flex-col items-center justify-start bg-white font-dm overflow-x-hidden"
    >
      <div className="w-full max-w-4xl px-4 mx-auto">
        <div className="flex justify-center">
          <Skillsheader />
        </div>

        {/* tag section matches About width */}
        <div className="w-[80vw] max-w-2xl mx-auto flex flex-wrap justify-start gap-3 mt-10 pb-4 overflow-visible">
          {technologies.map((tech) => (
            <div key={tech} className="group">
              <div className="px-3 py-1 bg-gradient-to-r from-gray-50 via-gray-100 to-[#ebedf2] text-black border-[1px] border-gray-300 rounded-md text-sm font-medium transition duration-200 group-hover:shadow-[0_0_16px_6px_rgba(165,180,252,0.75)]">
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

