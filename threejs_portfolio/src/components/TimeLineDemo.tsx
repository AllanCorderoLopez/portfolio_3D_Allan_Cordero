import React from "react";
import Timeline from "./Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Experience",
      icon: <span aria-label="Experience icon">📅</span>,
      content: (
        <div className="text-white">
          <div className="mb-14">
            {" "}
            <h3 className="bg-gradient-to-r from-cyan-400 to-indigo-600 text-transparent bg-clip-text text-sm">
              <strong>Web Development Intern at Hermosa Software</strong>
            </h3>
            <h3 className="text-gray-200 py-5 text-sm">
              Costa Rica, 2024 - Present
            </h3>
            <h4 className="text-gray-200 text-sm">
              Developing web applications using technologies like React, node, postgresql
              and modern tools to build custom sites and solutions.
            </h4>
          </div>
          <div className="">
            {" "}
            <h3 className="bg-gradient-to-r from-cyan-400 to-indigo-600 text-transparent bg-clip-text text-sm">
              <strong>Universidad Nacional De Costa Rica</strong>
            </h3>
            <h3 className="text-gray-200 py-5 text-sm">
              Costa Rica, 2023 - 2024
            </h3>
            <h4 className="text-gray-200 text-sm">
              I designed and maintained a mobile application to guide campus
              hikers through trails, providing information on routes, landmarks,
              and safety tips.
            </h4>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      icon: <span aria-label="Education icon">🎓</span>,
      content: (
        <div className="text-white">
          <div className="mb-14">
          <h3 className="bg-gradient-to-r from-cyan-400 to-indigo-600 text-transparent bg-clip-text text-sm">
            <strong>Bachelor's Degree in Systems Engineering</strong>
          </h3>
          <h3 className="text-gray-200 py-5 text-sm">
            University of Costa Rica, 2019 - 2024
          </h3>
          <h4 className="text-gray-200 text-sm">
            Graduated with a Bachelor's Degree in Systems Engineering from the
            University of Costa Rica.
          </h4>
          </div>
          <div className="">
          <h3 className="bg-gradient-to-r from-cyan-400 to-indigo-600 text-transparent bg-clip-text text-sm">
            <strong>Diploma in Computer Application Programming</strong>
          </h3>
          <h3 className="text-gray-200 py-5 text-sm">
            University of Costa Rica, 2019 - 2024
          </h3>
          <h4 className="text-gray-200 text-sm">
            Completed a diploma in computer application programming from the
            University of Costa Rica.
          </h4>
          </div>
          
        </div>
      ),
    },
    {
      title: "Projects",
      icon: <span aria-label="Projects icon">🚀</span>,
      content: (
        <div className="text-white">
          <h3 className="bg-gradient-to-r from-cyan-400 to-indigo-600 text-transparent bg-clip-text text-sm">
            <strong>Pegando Tour App</strong>
          </h3>
          <h3 className="text-gray-200 py-5 text-sm">Costa Rica, 2024</h3>
          <h4 className="text-gray-200 py-5 text-sm">
            Developed a web application for managing tours in Costa Rica.
          </h4>
          <h4 className="text-gray-200 py-5 text-sm">
            Technologies used: React, NextJS, TailwindCSS.
          </h4>
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
