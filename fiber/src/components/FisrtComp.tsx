import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import { useRef } from "react";
import CustomTriangle from "./CustomTriangle";

function AnimatedMesh() {
  const myMesh = useRef(null);

  useFrame(({ clock }) => {
    console.log("Hey, I'm executing every frame!");
    myMesh.current.rotation.x = clock.elapsedTime;
    myMesh.current.rotation.y = clock.elapsedTime;
  });

  return (
    <mesh ref={myMesh}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial color="#7c3aed" />
    </mesh>
  );
}

const FisrtComp = () => {
  const creatingCanvashandler = (state: RootState) => {
    console.log("Canvas created!", state);
    state.gl.setClearColor("cyan", 0.5);
  };

  return (
    <div>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        onCreated={creatingCanvashandler}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} />
        <AnimatedMesh />
        <OrbitControls />
        <axesHelper />
      </Canvas>
    </div>
  );
};

export default FisrtComp;
