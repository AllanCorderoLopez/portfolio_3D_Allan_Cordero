import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import * as THREE from "three";
import planet_EarthScene from "../assets/3d/planet_earth.glb";
import Flag from "./Flag";
import Flag2 from "./Flag2";
import Flag3 from "./Flag3";

const PlanetCanvas = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}) => {
  const planet_EarthRef = useRef();
  const circleRef = useRef();
  const { viewport, camera } = useThree();
  const lastX = useRef(0);
  const lastY = useRef(0);
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);
  const smoothingFactor = 0.1;
  const scene = useThree().scene;
  const zoneRef = useRef(null);
  const flagPosition = [2.45, 1.3, 3.4];
  const flagPosition2 = [2, 0.9, -3.8];
  const flagPosition3 = [-4.3, -1, 0.2];

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    lastX.current = clientX;
    lastY.current = clientY;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - lastX.current;
      const deltaY = clientY - lastY.current;

      const retrocesoFactor = 0.05;

      targetRotationY.current += (deltaX / viewport.width) * Math.PI * 0.03;

      const newRotationX =
        targetRotationX.current + (deltaY / viewport.height) * Math.PI * 0.03;
      if (newRotationX > Math.PI / 3) {
        targetRotationX.current =
          Math.PI / 3 + (newRotationX - Math.PI / 3) * retrocesoFactor;
      } else if (newRotationX < -Math.PI / 3) {
        targetRotationX.current =
          -Math.PI / 3 + (newRotationX + Math.PI / 3) * retrocesoFactor;
      } else {
        targetRotationX.current = newRotationX;
      }

      lastX.current = clientX;
      lastY.current = clientY;
    }
  };

  const isInsideZone = (position, minBounds, maxBounds) => {
    return (
      position.x >= minBounds.x &&
      position.x <= maxBounds.x &&
      position.y >= minBounds.y &&
      position.y <= maxBounds.y &&
      position.z >= minBounds.z &&
      position.z <= maxBounds.z
    );
  };

  useFrame(() => {
    const navePos = new THREE.Vector3(0, 0, -10);

    if (planet_EarthRef.current) {
      const currentRotationY = planet_EarthRef.current.rotation.y;
      const currentRotationX = planet_EarthRef.current.rotation.x;

      planet_EarthRef.current.rotation.y = THREE.MathUtils.lerp(
        currentRotationY,
        targetRotationY.current,
        smoothingFactor
      );
      planet_EarthRef.current.rotation.x = THREE.MathUtils.lerp(
        currentRotationX,
        targetRotationX.current,
        smoothingFactor
      );

      const rotationMatrix = new THREE.Matrix4();

      rotationMatrix.makeRotationFromEuler(
        new THREE.Euler(
          planet_EarthRef.current.rotation.x,
          planet_EarthRef.current.rotation.y,
          planet_EarthRef.current.rotation.z,
          "YXZ"
        )
      );

      navePos.applyMatrix4(rotationMatrix);

      const referencePoint = new THREE.Vector3(2.9, 1.3, 3.4);

      const A_Flag1 = new THREE.Vector3(-2, -5, -34);
      const B_Flag1 = new THREE.Vector3(5, 4, -1);
      const C_Flag1 = new THREE.Vector3(4, -5, -21);

      const referencePoint2 = new THREE.Vector3(4, 1, 8);

      const A_Flag2 = new THREE.Vector3(-3, -2, -4);
      const B_Flag2 = new THREE.Vector3(4, 3, 2);
      const C_Flag2 = new THREE.Vector3(1, -3, -1);

      const absoluteA_Flag1 = referencePoint.clone().add(A_Flag1);
      const absoluteB_Flag1 = referencePoint.clone().add(B_Flag1);
      const absoluteC_Flag1 = referencePoint.clone().add(C_Flag1);

      const absoluteA_Flag2 = referencePoint2.clone().add(A_Flag2);
      const absoluteB_Flag2 = referencePoint2.clone().add(B_Flag2);
      const absoluteC_Flag2 = referencePoint2.clone().add(C_Flag2);

      const minBoundsFlag1 = new THREE.Vector3(
        Math.min(absoluteA_Flag1.x, absoluteB_Flag1.x, absoluteC_Flag1.x),
        Math.min(absoluteA_Flag1.y, absoluteB_Flag1.y, absoluteC_Flag1.y),
        Math.min(absoluteA_Flag1.z, absoluteB_Flag1.z, absoluteC_Flag1.z)
      );

      const maxBoundsFlag1 = new THREE.Vector3(
        Math.max(absoluteA_Flag1.x, absoluteB_Flag1.x, absoluteC_Flag1.x),
        Math.max(absoluteA_Flag1.y, absoluteB_Flag1.y, absoluteC_Flag1.y),
        Math.max(absoluteA_Flag1.z, absoluteB_Flag1.z, absoluteC_Flag1.z)
      );

      const minBoundsFlag2 = new THREE.Vector3(
        Math.min(absoluteA_Flag2.x, absoluteB_Flag2.x, absoluteC_Flag2.x),
        Math.min(absoluteA_Flag2.y, absoluteB_Flag2.y, absoluteC_Flag2.y),
        Math.min(absoluteA_Flag2.z, absoluteB_Flag2.z, absoluteC_Flag2.z)
      );

      const maxBoundsFlag2 = new THREE.Vector3(
        Math.max(absoluteA_Flag2.x, absoluteB_Flag2.x, absoluteC_Flag2.x),
        Math.max(absoluteA_Flag2.y, absoluteB_Flag2.y, absoluteC_Flag2.y),
        Math.max(absoluteA_Flag2.z, absoluteB_Flag2.z, absoluteC_Flag2.z)
      );

      const referencePoint3 = new THREE.Vector3(-8, -4, 1);
      const A_Flag3 = new THREE.Vector3(-6, -7, -6);
      const B_Flag3 = new THREE.Vector3(5, 5, 5);
      const C_Flag3 = new THREE.Vector3(-4, -9, -3);

      const absoluteA_Flag3 = referencePoint3.clone().add(A_Flag3);
      const absoluteB_Flag3 = referencePoint3.clone().add(B_Flag3);
      const absoluteC_Flag3 = referencePoint3.clone().add(C_Flag3);

      const minBoundsFlag3 = new THREE.Vector3(
        Math.min(absoluteA_Flag3.x, absoluteB_Flag3.x, absoluteC_Flag3.x),
        Math.min(absoluteA_Flag3.y, absoluteB_Flag3.y, absoluteC_Flag3.y),
        Math.min(absoluteA_Flag3.z, absoluteB_Flag3.z, absoluteC_Flag3.z)
      );

      const maxBoundsFlag3 = new THREE.Vector3(
        Math.max(absoluteA_Flag3.x, absoluteB_Flag3.x, absoluteC_Flag3.x),
        Math.max(absoluteA_Flag3.y, absoluteB_Flag3.y, absoluteC_Flag3.y),
        Math.max(absoluteA_Flag3.z, absoluteB_Flag3.z, absoluteC_Flag3.z)
      );

      const insideZone = isInsideZone(navePos, minBoundsFlag1, maxBoundsFlag1);
      const insideZone2 = isInsideZone(navePos, minBoundsFlag2, maxBoundsFlag2);
      const insideZone3 = isInsideZone(navePos, minBoundsFlag3, maxBoundsFlag3);

      function isWithinBounds(position, xMin, xMax, yMin, yMax) {
        return (
          position.x > xMin &&
          position.x < xMax &&
          position.y > yMin &&
          position.y < yMax
        );
      }
      if (insideZone) {
        setCurrentStage(1);
      } else if (insideZone2) {
        setCurrentStage(2);
      } else if (insideZone3) {
        setCurrentStage(3);
      } else {
        setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isRotating, scene]);

  const group = useRef();
  const { nodes, materials } = useGLTF(planet_EarthScene);

  return (
    <a.group ref={planet_EarthRef} {...props}>
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <a.group
            name="578a67fb859c4432ad395a9d408af1e7fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <a.group name="Object_2">
              <a.group name="RootNode">
                <a.group
                  name="Earth"
                  rotation={[-Math.PI / 2, 0, 0.681]}
                  scale={358.622}
                >
                  <mesh
                    name="Earth_Ice_0"
                    geometry={nodes.Earth_Ice_0.geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="Earth_Water_0"
                    geometry={nodes.Earth_Water_0.geometry}
                    material={materials.Water}
                  />
                  <mesh
                    name="Earth_Sand_0"
                    geometry={nodes.Earth_Sand_0.geometry}
                    material={materials.Sand}
                  />
                  <mesh
                    name="Earth_Grass_0"
                    geometry={nodes.Earth_Grass_0.geometry}
                    material={materials.Grass}
                  />
                  <group
                    name="Earth_Details"
                    position={[0.163, -0.812, 0.592]}
                    rotation={[-0.525, -0.789, -2.962]}
                    scale={[0.006, 0.006, 0.009]}
                  >
                    <mesh
                      name="Earth_Details_Wood_0"
                      geometry={nodes.Earth_Details_Wood_0.geometry}
                      material={materials.Wood}
                    />
                    <mesh
                      name="Earth_Details_Tree_0"
                      geometry={nodes.Earth_Details_Tree_0.geometry}
                      material={materials.Tree}
                    />
                    <mesh
                      name="Earth_Details_Tree_0_1"
                      geometry={nodes.Earth_Details_Tree_0_1.geometry}
                      material={materials.Tree}
                    />
                    <mesh
                      name="Earth_Details_Ice_0"
                      geometry={nodes.Earth_Details_Ice_0.geometry}
                      material={materials.material}
                    />
                    <mesh
                      name="Earth_Details_Blue_0"
                      geometry={nodes.Earth_Details_Blue_0.geometry}
                      material={materials.Blue}
                    />
                    <mesh
                      name="Earth_Details_Sand_0"
                      geometry={nodes.Earth_Details_Sand_0.geometry}
                      material={materials.Sand}
                    />
                    <mesh
                      name="Earth_Details_red_0"
                      geometry={nodes.Earth_Details_red_0.geometry}
                      material={materials.material_7}
                    />
                  </group>
                  <group
                    name="Clouds_and_Stars"
                    position={[-0.577, -0.085, 0.844]}
                    rotation={[-1.555, -0.135, 2.627]}
                    scale={0.042}
                  >
                    <mesh
                      name="Clouds_and_Stars_Ice_0"
                      geometry={nodes.Clouds_and_Stars_Ice_0.geometry}
                      material={materials.material}
                    />
                    <mesh
                      name="Clouds_and_Stars_Star_0"
                      geometry={nodes.Clouds_and_Stars_Star_0.geometry}
                      material={materials.Star}
                    />
                  </group>
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
      <Flag position={flagPosition} />
      <Flag2 position={flagPosition2} />
      <Flag3 position={flagPosition3} />
    </a.group>
  );
};

export default PlanetCanvas;
