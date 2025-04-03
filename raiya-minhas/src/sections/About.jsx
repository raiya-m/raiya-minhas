import React from "react";
import Aboutheader from "../components/Aboutheader";

function About() {
  return (
    <div
      id="about"
      className="px-6 pt-16 flex flex-col items-center justify-start bg-white"
    >
      <Aboutheader />

      <div className="w-[90vw] max-w-2xl mt-4 md:mt-6 text-left text-black font-sans text-[17px] leading-relaxed bg-white">
        <p className="mb-4">
          My name is <span className="font-semibold">Raiya Minhas</span> and I'm in my first year 
          studying computer engineering at the University of Waterloo.
          I thrive on solving <span className="font-bold">complex problems</span> through curiosity,
          creativity, and collaboration.
        </p>
        <p>
          I'm passionate about leveraging technology to solve
          <span className="font-semibold"> real-world challenges</span>. I'm drawn to how systems work, and the way small 
          components interconnect to build something meaningful: whether in code, design, or
           the world around us. <br></br><br></br>
          I love full stack development, robotics, human-centered design,
          fractal geometry, and geography trivia.
        </p>
      </div>
    </div>
  );
}

export default About;
