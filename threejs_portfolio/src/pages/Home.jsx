import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { useEffect } from "react";
import gifPath from "../assets/gif/globe.gif";

import Loader from "../components/Loader";
import Sky from "../models/Sky";
import Ship from "../models/Ship";
import Planet from "../models/Planet";
import ExternalLight from "../components/ExternalLight";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Popup from "../components/Popup";
import Flag from "../models/Flag";

function Home() {
  const cameraRef = useRef();
  const storeRef = useRef();
  const [isRotating, setIsRotating] = useState(false);
  const [isRotatingLeft, setIsRotatingLeft] = useState(false);
  const [isRotatingRight, setIsRotatingRight] = useState(false);
  const [isRotatingUp, setIsRotatingUp] = useState(false);
  const [isRotatingDown, setIsRotatingDown] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const adjustPlanetForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -3, -43];
    let rotation = [0.1, 4, 0];

    if (window.innerWidth < 768) {
      screenScale = [4, 4, 4];
    } else {
      screenScale = [7, 7, 7];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [planetScale, planetPosition, planetRotation] =
    adjustPlanetForScreenSize();

  return (
    <section className="w-full h-screen relative bg-black overflow-y-hidden">
      <div
      className="fixed top-1/2 ml-10 z-10 mt-64 flex items-center pr-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
    >
     {/* <div className="relative">
        <div
          className={`isolate aspect-video rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 flex items-center `}
        >
          <img
            src={gifPath}
            alt="Gif"
            className="w-12 h-12 z-20" // Tamaño del ícono
          />
        </div>
        <div>
          <span
            className={`select-none z-10 w-40 absolute inset-0 flex items-center justify-center text-white rounded-full transition-transform duration-300 ${
              isHovered
                ? "translate-x-14 pl-1 opacity-100 ease-in-out "
                : "translate-x-12 opacity-0 ease-out"
            }`}
          >
            Drag and find the flags...
          </span>
        </div>

      </div>
            */} 
    </div>

      <div className="absolute lg:top-1/2 top-40 z-10 left-1/2 transform lg:right-50 lg:ml-40 overflow-hidden	md:overflow-visible">
        {currentStage && <Popup currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-full bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ ref: cameraRef, near: 0.1, far: 1000, position: [0, 0, 5] }}
        shadows
      >
        <ambientLight intensity={0.8} color={0xf09400} />{" "}
        <pointLight position={[10, 10, 10]} intensity={1.5} />{" "}
        <directionalLight
          castShadow
          position={[5, 5, 5]}
          intensity={2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={<Loader />}>
          <Ship
            isRotating={isRotating}
            setRotating={setIsRotating}
            animationSpeed={4}
          />
          <Planet
            ref={storeRef}
            scale={planetScale}
            position={planetPosition}
            rotation={planetRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />{" "}
          <EffectComposer>
            <Bloom
              intensity={0.5}
              width={300}
              height={300}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.3}
              blendFunction={BlendFunction.ADD}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
