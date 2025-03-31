import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";

import About from "./sections/about";
import Hero from "./sections/Hero";

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
    </div>
  );
}

export default App;
