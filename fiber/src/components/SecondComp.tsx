import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model() {
  const { scene } = useGLTF("/models/my-model.glb");
  return <primitive object={scene} scale={1} />;
}

const SecondComp = () => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default SecondComp;
