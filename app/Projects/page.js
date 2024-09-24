"use client";
import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const Projects = () => {
  const projects = [
    {
      title: "Tic Tac Toe Game",
      description:
        "A classic Tic Tac Toe game built with React, featuring a responsive design and easy-to-play interface.",
    },
    {
      title: "Expense Tracker",
      description:
        "A simple yet effective React-based app for tracking expenses and managing personal finances.",
    },
    {
      title: "Weather Forecasting App",
      description:
        "A user-friendly app that provides real-time weather updates and forecasts using external APIs for accurate data.",
    },
    {
      title: "Portfolio Website",
      description:
        "A portfolio website built using Next.js and Tailwind CSS with smooth animations and clean UI to showcase my projects and skills.",
    },
    {
      title: "Django Blog Platform",
      description:
        "A fully functional blogging platform built with Django, allowing users to create, edit, and delete posts while managing comments and user authentication.",
    },
    {
      title: "Django E-commerce Store",
      description:
        "An e-commerce web application built with Django, featuring product listings, user authentication, shopping cart functionality, and secure payment processing.",
    },
  ];

  const [style, api] = useSpring(() => ({ opacity: 0, transform: 'translateY(20px)' }));

  useEffect(() => {
    api.start({ opacity: 1, transform: 'translateY(0)' });
  }, [api]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4e4e9f] to-[#1a1a2e] animate-gradient text-white p-10">
      <div className="bg-opacity-80 p-10 rounded-lg">
        <h1 className="text-center text-4xl font-semibold mt-12 text-[#f9c74f]">My Best Projects</h1>
        <animated.div style={style} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="border-2 border-[#f9c74f] p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2 text-[#f9c74f]">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </animated.div>
      </div>
    </div>
  );
};

export default Projects;
