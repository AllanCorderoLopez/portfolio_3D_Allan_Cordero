import React from "react";
import "./styles.css"; // asegúrate de tener un archivo CSS para tus estilos
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'


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

      <div className="p-3  md:w-96 w-40  fixed md:top-0 top-96  mt-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-xl">
      <div className="h-1 w-10 bg-red-600"></div>
      <div className="text-sm md:text-2xl font-extrabold text-white select-none">
        Hi, I am Allan 👋
      </div>
      <div className="text-sm md:text-2xl mt-2 font-extrabold text-white select-none">
        Im software engineer from Costa Rica 🇨🇷
      </div>
      
    </div>
    
    );
  }
  if (currentStage === 2) {
   {
    return (
      <div className="p-3  md:w-96 w-40  fixed md:top-0 top-96  mt-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-xl">
      <div className="h-1 w-10 bg-blue-600"></div>
      <div className="text-sm md:text-2xl font-extrabold text-white select-none">
        Im specializing in Frontend Dev 🎨
      </div>
      <NavLink to='/portfolio' className={({isActive}) => {
                return isActive ? 'text-blue-500' : 'text-white'
            }
            }>
      <a
            href="#"
            className="flex text-sm md:text-2xl mt-4  items-center block text-blue-600 font-bold tracking-wide flex"
          >
            <span className="select-none">My Skills</span>
            
          </a>
          </NavLink>

    </div>
  

    );
    
  }
  }

  if (currentStage === 3) {

    return (
      <div className="p-3  md:w-64 w-40   fixed md:top-0 top-96  mt-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-xl">
      <div className="h-1 w-10 bg-yellow-600"></div>
      <div className="text-sm md:text-2xl font-extrabold text-white select-none">
        See my projects 🚀
      </div>
      <NavLink to='/portfolio' className={({isActive}) => {
                return isActive ? 'text-blue-500' : 'text-white'
            }
            }>

          <a
            href="#"
            className="flex mt-4 text-sm md:text-2xl items-center block text-yellow-600 font-bold tracking-wide flex"
          >
            <span className="select-none">My Projects</span>
            
          </a>
            <i className="bx bx-right-arrow-alt ml-1"></i>
          </NavLink>
    </div>
    );

    {/*
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
     */}
  }

  return null;
}

export default Popup;
