import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx"; 
import { Link } from "react-router-dom";

export default function Popup({ currentStage }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (currentStage === 1) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [currentStage]);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (currentStage === 1 && isOpen) {
    return (
      <GalacticCard
        color="bg-red-400"
        title="Hi, I am Allan 👋"
        subtitle="I'm software engineer from Costa Rica 🇨🇷"
        onClose={closePopup}
      />
    );
  }

  if (currentStage === 2) {
    return (
      <GalacticCard
        color="bg-blue-400"
        title="I'm fullstack developer 🛠️"
        linkText="My Skills"
        linkHref="/portfolio"
      />
    );
  }

  if (currentStage === 3) {
    return (
      <GalacticCard
        color="bg-yellow-400"
        title="See my projects 🚀"
        linkText="My Projects"
        linkHref="/portfolio"
      />
    );
  }

  return null;
}

function GalacticCard({
  color = "blue",
  title,
  subtitle,
  linkText,
  linkHref,
  onClose,
}) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 50 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2,
      }));
    };
    setStars(generateStars());
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="select-none p-3 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out hover:scale-105 sm:flex sm:items-center sm:justify-center"
    >
      <div className="relative bg-gray-900 bg-opacity-80 rounded-lg p-6 border border-gray-700 shadow-2xl overflow-hidden sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
        {/* Star field background */}
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star, index) => (
            <div
              key={index}
              className="absolute bg-white rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
        </div>
  
        {/* Scan line effect */}
        <div className="absolute inset-0 bg-scan-lines opacity-10"></div>
  
        {/* Content */}
        <div className="relative z-10 space-y-4">
          <div
            className={clsx(
              "h-1 w-full rounded-full",
              `${color}`, 
              `glow-${color}`
            )}
          >
          </div>
          <h2 className="text-2xl font-extrabold text-white font-space">{title}</h2>
          {subtitle && <p className="text-lg text-gray-300 font-space">{subtitle}</p>}
          {linkText && linkHref && (
            <Link
              to={linkHref}
              onClick={onClose}
              className="flex items-center text-white font-space hover:text-white"
            >
              <span>{linkText}</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          )}
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={clsx(
                  "w-10 h-1 rounded-full",
                  `${color}`
                )}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}  