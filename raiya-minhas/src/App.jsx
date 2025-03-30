import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">Hello World! I am Raiya.</h1>
      </div>
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-semibold">Scrolled Content</h2>
      </div>
    </div>
  );
}

export default App;
