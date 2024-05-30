import React from 'react'

import skyScene from '../assets/3d/sky.glb'
import { useGLTF } from '@react-three/drei'



const Sky = () => {
    const sky = useGLTF(skyScene)
  return (
    <mesh>
        
    </mesh>
  )

}

export default Sky