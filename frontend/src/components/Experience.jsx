import { Environment, OrbitControls } from "@react-three/drei";
import React from "react";
import { Avatar } from "./Avatar";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Avatar position={[0,-3,5]} scale={2} />
      <Environment preset="sunset" />
    </>
  );
};

export default Experience;
