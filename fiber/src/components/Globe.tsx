import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Globe = () => {
  const texture = useLoader(THREE.TextureLoader, "/textures/world-map.jpg");
  console.log(texture);

  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Globe;
