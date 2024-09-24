"use client"; 
import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
  const [style, api] = useSpring(() => ({ opacity: 0, transform: 'scale(0.8)' }));

  useEffect(() => {
    api.start({ opacity: 1, transform: 'scale(1)' });
  }, [api]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#4e4e9f] to-[#1a1a2e] text-white p-5">
      <animated.div style={style} className="flex flex-col items-center z-10 p-6 border-4 border-[#f9c74f] bg-opacity-30 backdrop-blur-md rounded-lg shadow-black">
        <h1 className="text-5xl mb-6 text-center text-[#f9c74f] font-bold">I’m Mohit Tiwari</h1>
        <p className="text-xl text-center mb-4 max-w-lg">
          A passionate backend and frontend developer pursuing a BSc in IT. Skilled in Python, Django, HTML, CSS, JavaScript, and React. My recent projects include a medical advice app and a Tic Tac Toe game, utilizing Next.js and Tailwind CSS.
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/Mohit4289" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl hover:text-[#ffaf40]" />
          </a>
          <a href="https://www.linkedin.com/in/mohit-tiwari-1967b32a5" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl hover:text-[#ffaf40]" />
          </a>
        </div>
      </animated.div>
    </div>
  );
};

export default Hero;
