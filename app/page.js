"use client";
import React from "react";
import Hero from "./Components/Hero";
import Projects from "./Projects/page";
import Skills from "./Skills/page";
import Contact from "./Contact/page";


function App() {
  return (
    <div>
      <div className="relative text-white">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
