import React from "react";
import Timeline from "./Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Experience",
      icon: <span aria-label="Experience icon">📅</span>,
      content: (
        <div className="text-white">
          <h3 className="bg-gradient-to-r from-cyan-400 via-violet-600 to-purple-700 text-transparent bg-clip-text py-10 text-sm">
            <strong>Web Development Intern at Hermosa Software</strong>
          </h3>
          <h3 className="text-gray-200 py-5 text-sm">Costa Rica, 2024 - Present</h3>
          <h4 className="text-gray-200 text-sm">
            Developing web applications using technologies like React, Vite, and modern tools to build custom sites and solutions.
          </h4>
        </div>
      ),
    },
    {
      title: "Education",
      icon: <span aria-label="Education icon">🎓</span>,
      content: (
        <div className="text-white">
          <h3 className="bg-gradient-to-r from-cyan-400 via-violet-600 to-purple-700 text-transparent bg-clip-text py-10 text-sm">
            <strong>Software Engineering</strong>
          </h3>
          <h3 className="text-gray-200 py-5 text-sm">University of Costa Rica, 2019 - 2024</h3>
          <h4 className="text-gray-200 text-sm">
            Studying Software Engineering at the University of Costa Rica.
          </h4>
        </div>
      ),
    },
    {
      title: "Projects",
      icon: <span aria-label="Projects icon">🚀</span>,
      content: (
        <div className="text-white">
          <h3 className="bg-gradient-to-r from-cyan-400 via-violet-600 to-purple-700 text-transparent bg-clip-text py-10 text-sm">
            <strong>Pegando Tour App</strong>
          </h3>
          <h3 className="text-gray-200 py-5 text-sm">Costa Rica, 2024</h3>
          <h4 className="text-gray-200 py-5 text-sm">
            Developed a web application for managing tours in Costa Rica.
          </h4>
          <h4 className="text-gray-200 py-5 text-sm">Technologies used: React, NextJS, TailwindCSS.</h4>
        </div>
      ),
    },
  ];
    
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
