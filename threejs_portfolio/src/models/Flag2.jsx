import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import flag from "../assets/3d/Flag2.glb";
import { useFrame, useThree } from "@react-three/fiber";

const Flag2 = ({ position, ...props }) => {
  const flagRef = useRef();
  const { scene: flagScene, animations } = useGLTF(flag);
  const { actions } = useAnimations(animations, flagRef);

  useFrame(() => {
    const action = actions["Object_0"];
    action.play();
  });

  return (
    <mesh {...props} ref={flagRef} position={position}>
      <primitive
        object={flagScene}
        scale={[1, 1, 1]}
        rotation={[4.3, -1, -0.8]}
      />
    </mesh>
  );
};

export default Flag2;
