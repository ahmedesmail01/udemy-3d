import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./components/Scene";
// import Globe from "./components/Globe";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [0, 0, 3] }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={2} />

        <Scene />
        {/* <Globe /> */}
        <OrbitControls />
        <axesHelper />
      </Canvas>
    </>
  );
}

export default App;
