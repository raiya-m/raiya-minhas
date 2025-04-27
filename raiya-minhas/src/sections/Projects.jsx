import React from "react";
import Projectsheader from "../components/Projectsheader";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Math Agent",
    tags: ["JavaScript", "React.js", "OCR", "OpenAI API", "LaTeX"],
    description: "Designed and built a comprehensive web app to provide custom step-by-step solutions and learning reinforcement to handwritten math problems. Demoed app in 3 Toronto elementary schools, iterating features based on student feedback gathered during classroom sessions.",
    github: "https://github.com/raiya-m/math-agent"
  },
  {
    title: "Wallet Shield",
    tags: ["Python", "Flask-CORS", "Google Gemini API", "Solidity", "Chart.js", "React.js"],
    description: "Web app for detecting fraud in students' crypto wallets. Creates an easy-to-understand report, using anomaly detection via Isolation Forest to highlight potential risk, and provides an interactive visual summary chart. Sensitive financial data is stored securely and immutably on blockchain.",
    github: "https://github.com/raiya-m/wallet-shield"
  },
  {
    title: "Heatstroke Detection Wearable",
    tags: ["C++", "STM32 Microcontroller", "Blender"],
    description: "Wearable device that integrates temperature sensors with a microcontroller to continuously detect, log, and evaluate body heat levels in real time, enabling threshold-based alerts. Designed for farmers in Latin America.",
    github: "https://github.com/anusha-saxena/HeatMonitoringSystem"
  },
  {
    title: "Brain SPICE",
    tags: ["Python", "Ngspice", "Tkinter", "Matplotlib", "NumPy", "pandas"],
    description: "Real-time circuit simulator with an interactive GUI for visualizing neural electrical behavior. Models user-defined neuron circuit architectures, and supports live waveform rendering and customizable simulation parameters.",
    github: "https://github.com/raiya-m/brain-spice"
  },
  {
    title: "ripple.ai",
    tags: ["Python", "Flask", "MongoDB", "Hugging Face API", "scikit-learn", "NumPy"],
    description: "Hack Canada #Build With AI app for Indigenous communities to analyze and compare policies relating to water rights, and generate advocacy documents.",
    github: "https://github.com/raiya-m/ripple.ai"
  },
  {
    title: "Portfolio Website",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    description: "My personal website. Built with React.js and styled with Tailwind CSS.",
    github: "https://github.com/raiya-m/raiya-minhas"
  }
];

function Projects() {
  return (
    <div
      id="projects"
      className="px-6 sm:px-0 md:px-3 pt-16 pb-5 flex flex-col items-center justify-start bg-white overflow-x-hidden"
    >
      <Projectsheader />

      <div className="w-[80vw] max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative bg-white border-[1.25px] border-black shadow-sm p-4 rounded-xl transition-transform hover:scale-[1.025] duration-200 text-black"
          >
            {project.title !== "Heatstroke Detection Wearable" && project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-black hover:scale-115 transition-transform"
              >
                <ExternalLink size={17} strokeWidth={1.5} />
              </a>
            )}

            {/* Title */}
            <h3 className="text-[17px] semibold-light mb-2 pr-8 break-words leading-tight">
              {project.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="bg-[#ebedf2] text-black text-xs px-2 py-[2px] rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-left">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
