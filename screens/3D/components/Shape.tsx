// Cube.tsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { ShapeT } from "@/typing/shape";

type ShapePropsT = {
  onClick: (shape: ShapeT) => void;
  shape: ShapeT;
};

const ShapeGeometry = {
  sphere: <sphereGeometry args={[1, 32, 32]} />,
  cube: <boxGeometry args={[1, 1, 1]} />,
  cone: <coneGeometry args={[1, 2, 32]} />,
  cylinder: <cylinderGeometry args={[1, 1, 2, 32]} />,
};
const Shape = ({ shape, onClick }: ShapePropsT) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;

      // ** change the position of the shape
      meshRef.current.position.x = shape.position.x;
      meshRef.current.position.y = shape.position.y;
      meshRef.current.position.z = shape.position.z;

      // ** change the scale of the shape
      meshRef.current.scale.x = shape.scale.x;
      meshRef.current.scale.y = shape.scale.y;
      meshRef.current.scale.z = shape.scale.z;
    }
  });

  const handleClickOnShape = (shape: ShapeT) => {
    onClick(shape);
  };

  return (
    <mesh
      ref={meshRef}
      position={[shape.position.x, shape.position.y, shape.position.z]}
      onClick={() => {
        handleClickOnShape(shape);
      }}
    >
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      {ShapeGeometry[shape.type]}
      <meshStandardMaterial wireframe color={shape.color} />
    </mesh>
  );
};

export default Shape;
