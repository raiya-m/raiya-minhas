import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";

import About from "./sections/about";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/projects"
import Footer from "./sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
