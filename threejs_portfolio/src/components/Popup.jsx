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
     <></>
    );
  }
  if (currentStage === 2) {
    return (
      <></>

    );
  }

  if (currentStage === 3) {
    return (
      <></>

    );
  }

  return null;
}

export default Popup;
