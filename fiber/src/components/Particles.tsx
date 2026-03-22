import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import * as Three from "three";

const Particles = () => {
  const particles = useRef(null);
  useFrame((_, delta) => {
    particles.current.rotation.y += delta * 0.1;
    particles.current.rotation.x += delta * 0.1;
  });

  const texture = useLoader(Three.TextureLoader, "/textures/snow.jpg");
  const virtcesAmount = 3000;
  const postionArray = new Float32Array(virtcesAmount * 3);

  for (let i = 0; i < virtcesAmount * 3; i++) {
    postionArray[i] = (Math.random() - 0.5) * 10.0;
  }
  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          args={[postionArray, 3]}
          attach="attributes-position"
          count={postionArray.length}
          itemSize={3}
          array={postionArray}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        transparent
        depthTest={false}
        alphaMap={texture}
      />
    </points>
  );
};

export default Particles;
