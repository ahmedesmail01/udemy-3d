import { OrbitControls } from "@react-three/drei";
import Particles from "./Particles";

const Scene = () => {
  return (
    <>
      <Particles />
      <OrbitControls />
    </>
  );
};

export default Scene;
