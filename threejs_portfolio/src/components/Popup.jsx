import React from "react";
import "./styles.css"; // asegúrate de tener un archivo CSS para tus estilos
import { useState, useEffect } from "react";
function Popup({ currentStage }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.body.appendChild(script);

    if (currentStage === 1) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    return () => {
      document.body.removeChild(script);
    };
  }, [currentStage]);

  const closePopup = () => {
    setIsOpen(false);
  };

  

  if (currentStage === 1 && isOpen) {
    return (
      <div classname="min-h-screen bg-black flex items-center justify-center">
        <div class="absolute right-4 top-20 mt-6 bg-red-600 h-32 w-full rounded-xl"></div>

        <div className="right-8 top-20	relative bg-gray-800 text-gray-50 rounded-xl p-3 space-y-2 mt-10">
          <div className="h-1 w-10 bg-red-600"></div>

          <div className="text-2xl font-extrabold text-white select-none">
      Hi, I am Allan 👋
      
    </div>

          <p className="leading-snug text-gray-400 select-none">
            Im a web developer with a passion for creating beautiful and
            functional user experiences.
          </p>

          <a
            href="#"
            className="flex items-center block text-red-600 font-bold tracking-wide flex"
          >
            <i className="bx bx-right-arrow-alt ml-1"></i>
          </a>
        </div>
      </div>
    );
  }
  if (currentStage === 2) {
    return (
      <div classname="min-h-screen bg-black flex items-center justify-center">
        <div class="absolute right-4 top-20 mt-6 bg-blue-600 h-36 w-full rounded-xl"></div>

        <div className="right-8 top-20	relative bg-gray-800 text-gray-50 rounded-xl p-3 space-y-2 mt-10">
          <div className="h-1 w-10 bg-blue-600"></div>

          <div className="text-2xl font-extrabold text-white select-none">
            Im specializing in Frontend Dev 🎨
          </div>

          <p className="leading-snug text-gray-400 select-none">
            I have experience in building websites and web applications using
            modern technologies.
          </p>

          <a
            href="#"
            className="flex items-center block text-blue-600 font-bold tracking-wide flex"
          >
            <span className="select-none">My Skills</span>
            <i className="bx bx-right-arrow-alt ml-1"></i>
          </a>
        </div>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div classname="min-h-screen bg-black flex items-center justify-center">
        <div class="absolute right-4 top-20 mt-6 bg-yellow-600 h-36 w-full rounded-xl"></div>

        <div className="right-8 top-20	relative bg-gray-800 text-gray-50 rounded-xl p-3 space-y-2 mt-10">
          <div className="h-1 w-10 bg-yellow-600"></div>

          <div className="text-2xl font-extrabold text-white select-none">
           See my projects 🚀
          
          </div>

          <p className="leading-snug text-gray-400 select-none">
            I have a collection of projects that I have worked on. Check them out!
          </p>
          <a
            href="#"
            className="flex items-center block text-yellow-600 font-bold tracking-wide flex"
          >
            <span className="select-none">
              My Projects
            </span>
            <i className="bx bx-right-arrow-alt ml-1"></i>
          </a>
        </div>
      </div>
    );
  }

  return null;
}

export default Popup;
