import { DoubleSide } from "three";

const CustomTriangle = () => {
  const positionArray = new Float32Array([-1, -1, 0, 1, -1, 0, 0, 1, 0]);
  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          args={[positionArray, 3]}
          attach={"attributes-position"}
          count={3}
          itemSize={3}
          array={positionArray}
        />
      </bufferGeometry>
      <meshBasicMaterial color={"red"} side={DoubleSide} />
    </mesh>
  );
};

export default CustomTriangle;
