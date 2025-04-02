import React from "react";
import Projectsheader from "../components/Projectsheader";

const projects = [
  {
    title: "Inventory Tracker",
    tags: ["React", "Firebase", "Tailwind"],
    description: "Built a web app to track medical inventory usage in real time, syncing across users and devices.",
    github: "https://github.com/yourusername/inventory-tracker"
  },
  {
    title: "AutoGrader",
    tags: ["Python", "Flask", "CI/CD"],
    description: "A script-based grading system for engineering assignments that handles edge case detection.",
    github: "https://github.com/yourusername/autograder"
  },
  {
    title: "GeoTrivia",
    tags: ["Next.js", "Trivia API", "Framer Motion"],
    description: "A fast-paced trivia game that pulls from global geography databases with smooth animations.",
    github: "https://github.com/yourusername/geotrivia"
  },
  {
    title: "CircuitSim",
    tags: ["C++", "SFML", "Simulation"],
    description: "Simulates digital circuits using a custom-built logic gate engine and GUI.",
    github: "https://github.com/yourusername/circuitsim"
  },
  {
    title: "BrainWave",
    tags: ["Python", "EEG", "DataViz"],
    description: "Visualizes EEG brainwave data using interactive Python dashboards and ML smoothing filters.",
    github: "https://github.com/yourusername/brainwave"
  },
  {
    title: "Budgeteer",
    tags: ["TypeScript", "MongoDB", "Express"],
    description: "A full-stack budgeting app with customizable goals, real-time charting, and user auth.",
    github: "https://github.com/yourusername/budgeteer"
  }
];

function Projects() {
  return (
    <div
      id="projects"
      className="px-6 pt-16 flex flex-col items-center justify-start bg-white"
    >
      <Projectsheader />

      <div className="w-[90vw] max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative bg-white border border-black p-4 rounded-xl transition-transform hover:scale-[1.01] duration-200 text-black"
          >
            {/* GitHub icon */}
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img
                src="/github.png"
                alt="GitHub"
                className="absolute top-4 right-4 w-5 h-5 hover:scale-110 transition-transform"
              />
            </a>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="bg-gray-200 text-black text-xs px-2 py-[2px] rounded-md hover:scale-105 transition-transform"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
