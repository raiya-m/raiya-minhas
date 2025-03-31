import React from "react";

  function Skills() {
    const technologies = [
      "JavaScript", "TypeScript", "Python", "C", "C++",
      "SQL", "MATLAB", "HTML", "CSS", "LaTeX", "React.js", "Next.js", "Node.js", "FastAPI", "Flask", "Django",
      "Tailwind CSS", "NumPy", "pandas", "scikit-learn", "Transformers", "Git", "Docker", "Google Cloud", 
      "MySQL", "PostgreSQL", "MongoDB"
    ];
  
    return (
      <div className="p-6">
        <div className="grid grid-cols-4 gap-4 items-start">
          <h2 className="text-xl font-normal pl-14 text-black col-span-1">
            <span className="font-semibold">Technologies</span> I <br />Build With . . .
          </h2>
  
          <div className="col-span-3 flex flex-wrap gap-3 pr-7">
            {technologies.map((tech) => (
              <div key={tech} className="relative group">
                <div className="relative z-10 px-3 py-1 bg-gray-100 text-black rounded-md text-sm font-medium transition-all duration-200 group-hover:scale-[1.02]">
                  {tech}
                </div>
                <div
                  className="absolute inset-0 z-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-md"
                  style={{
                    background: 'linear-gradient(to bottom, #fed7aa, #f9a8d4, #d8b4fe, #93c5fd)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  
export default Skills;