import React, { useEffect, useState, useRef } from "react";
import shipScene from "../assets/3d/little_shuttle__animation.glb";
import { useGLTF, useAnimations } from "@react-three/drei";

const Ship = ({ isRotating, animationSpeed, planetPosition, ...props }) => {
  const shipRef = useRef();
  const { scene, animations } = useGLTF(shipScene);
  const { actions } = useAnimations(animations, shipRef);
  const [rotation, setRotation] = useState(0);
  const [rotationX, setRotationX] = useState(0.5);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);

  const rotationLimitHorizontal = 0.3;
  const rotationLimitVertical = 2;
  let shipScale = null;
  if (window.innerWidth < 768) {
    shipScale = [0.9, 0.9, 0.9];
  } else {
    shipScale = [1.5, 1.5, 1.5];
  }

  const handleMouseMove = (event) => {
    if (isRotating) {
      const movementX = event.movementX * -0.01;
      const movementY = event.movementY * -0.01;

      if (!isDragging) {
        setRotation((prevRotation) => {
          const newRotation = prevRotation + movementX;
          // Limit horizontal rotation
          if (newRotation < -rotationLimitHorizontal) {
            return -rotationLimitHorizontal;
          } else if (newRotation > rotationLimitHorizontal) {
            return rotationLimitHorizontal;
          } else {
            return newRotation;
          }
        });

        setRotationX((prevRotation) => {
          const newRotation = prevRotation + movementY;
          // Limit vertical rotation
          if (newRotation <= 0.5) {
            return 0.5;
          } else if (newRotation >= 1) {
            return 1;
          } else {
            return newRotation;
          }
        });
      } else {
        // Handle dragging
        const deltaX = event.clientX - dragStartX;
        const deltaY = event.clientY - dragStartY;
        setRotation((prevRotation) => prevRotation + deltaX * 0.01);
        // Limit rotation in Y axis within safe range
        setRotationY((prevRotation) => {
          const newRotation = prevRotation + deltaY * 0.0002;
          if (newRotation < -rotationLimitVertical) {
            return -rotationLimitVertical;
          } else if (newRotation > rotationLimitVertical) {
            return rotationLimitVertical;
          } else {
            return newRotation;
          }
        });
      }
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
    setDragStartX(event.clientX);
    setDragStartY(event.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isRotating) {
      actions["CubeAction"]?.setEffectiveTimeScale(animationSpeed);
      actions["CubeAction"]?.play();
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [actions, isRotating, animationSpeed]);

  return (
    <mesh {...props} ref={shipRef}>
      <primitive
        object={scene}
        scale={shipScale}
        rotation={[rotationX, rotation, 0]}
        position={[-3, 0, -10]}
      />
    </mesh>
  );
};

export default Ship;
