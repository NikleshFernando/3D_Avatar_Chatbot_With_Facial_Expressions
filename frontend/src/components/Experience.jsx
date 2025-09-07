import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import React from "react";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";

const Experience = () => {

  const  texture = useTexture("textures/background.jpg");
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <Avatar position={[0,-3,5]} scale={2} />
      <Environment preset="sunset" />
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};

export default Experience;
