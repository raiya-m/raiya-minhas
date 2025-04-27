import React from "react";
import Aboutheader from "../components/Aboutheader";

function About() {
  return (
    <div
      id="about"
      className="px-1 sm:px-0 md:px-3 pt-16 flex flex-col items-center justify-start bg-white font-dm overflow-x-hidden"
    >
      <Aboutheader />
      <br />

      <div className="w-[80vw] max-w-2xl bg-white/80 backdrop-blur-md border border-black rounded-md shadow-sm overflow-hidden font-mono text-sm text-left mb-6">
        <div className="bg-gradient-to-r from-gray-50 via-[#dce0e6] to-gray-50 px-3 py-1 text-xs text-gray-600 border-b border-black">
          config.js
        </div>
        <pre className="p-4 text-gray-800 whitespace-pre-wrap break-words">
          <code>
            {`raiya.config({
  pipeline: ["learn", "build", "refactor", "optimize", "evolve"],
  mode: "adaptable",
  strategy: "analytical"
})`}
          </code>
        </pre>
      </div>

      {/* First Box — About Raiya */}
      <div className="w-[80vw] max-w-2xl px-4 py-6 sm:px-6 text-left text-black text-[16px] leading-normal bg-white border border-gray-300 rounded-lg relative mb-6">
        <p className="mb-4">
          My name is <span className="font-semibold">Raiya Minhas</span> and I'm in my first year of
          studying computer engineering at the University of Waterloo.
          I thrive on solving <span className="font-semibold">complex problems</span> through curiosity,
          creativity, and collaboration.
        </p>
        <p>
          I'm passionate about leveraging <span className="font-semibold">technology</span> to solve
          <span className="font-semibold"> real-world challenges</span>. I'm drawn to how systems work, and the way
          components interact and connect to build something meaningful: whether in code, design, or
          the world around us.
          <br /><br />
          I love full-stack development, human-centered design,
          fractal geometry, and geography trivia.
        </p>
      </div>

      <div className="w-[80vw] max-w-2xl px-4 py-6 sm:px-6 text-left text-black text-[16px] leading-normal bg-white border border-gray-300 rounded-lg relative">
        <p className="font-semibold">Currently I'm...</p>

        <div className="mb-4">
          <p className="font-semibold mb-2">Learning About:</p>
          <ul className="list-disc list-outside pl-5">
            <li className="ml-2 text-[15px] leading-snug">Designing scalable, concurrent backend architectures</li>
            <li className="ml-2 text-[15px] leading-snug">Rapid prototyping and iterative development for high-impact product experiences</li>
            <li className="ml-2 text-[15px] leading-snug">Working with colour and layout to make frontend bugs look like intentional design choices</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-semibold mb-2">Reading:</p>
          <ul className="list-disc list-outside pl-5">
            <li className="ml-2 text-[15px] leading-snug">The Lean Startup</li>
            <li className="ml-2 text-[15px] leading-snug">Radical Candor</li>
            <li className="ml-2 text-[15px] leading-snug">Sapiens</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Listening:</p>
          <ul className="list-disc list-outside pl-5">
            <li className="ml-2 text-[15px] leading-snug">Hard Fork</li>
            <li className="ml-2 text-[15px] leading-snug">Darknet Diaries</li>
            <li className="ml-2 text-[15px] leading-snug">Taylor Swift piano covers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
