import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";

import About from "./sections/about";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/projects"
import Blog from "./sections/blog"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
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
    <section id="blog">
      <Blog />
    </section>
    </div>
  );
}

export default App;
