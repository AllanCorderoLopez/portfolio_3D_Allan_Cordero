import { useMemo } from 'react';
import { SpotLight } from 'three';

const ExternalLight = ({ position, intensity, color }) => {
  const light = useMemo(() => new SpotLight(color, intensity), [color, intensity]);

  return (
    <primitive object={light} position={position} />
  );
};

export default ExternalLight;
