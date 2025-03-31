import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";

import About from "./sections/about";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

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
    </div>
  );
}

export default App;
