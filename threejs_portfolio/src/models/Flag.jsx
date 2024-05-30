import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import flag from "../assets/3d/flag.glb";

const Flag = ({ position, ...props }) => {
  const flagRef = useRef();
  const { scene: flagScene, animations } = useGLTF(flag);
  const { actions } = useAnimations(animations, flagRef);

  useEffect(() => {
    const action = actions["Object_0"];
    if (action) {
      action.setLoop(THREE.LoopRepeat);
      action.play();
    }
  }, [actions]);

  return (
    <mesh {...props} ref={flagRef} position={position}>
      <primitive
        object={flagScene}
        scale={[1, 1, 1]}
        rotation={[1, -0.2, -0.8]}
      />
    </mesh>
  );
};

export default Flag;
