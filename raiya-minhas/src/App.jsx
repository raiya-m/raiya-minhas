import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";

import About from "./sections/about";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/projects"
import Blog from "./sections/blog"
import Footer from "./sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white">
    <Navbar />
    <div className="flex flex-col items-center justify-center">
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
  );
}

export default App;
