import { Canvas } from "@react-three/fiber/native";

import React from "react";
import Shape from "./Shape";
import { StyleSheet } from "react-native";

import { windowHeight, windowWidth } from "@/utilities/platform";

// ** validation schema
import { ShapeT } from "@/typing/shape";

type SceneProps = {
  shapesList: ShapeT[];
  handleClickOnShape: (shape: ShapeT) => void;
};

function Scene({ shapesList, handleClickOnShape }: SceneProps) {
  return (
    <Canvas style={styles.canvas}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 40, 10]} />
      <spotLight position={[20, 10, 10]} angle={2} penumbra={1} />

      {shapesList.map((shape) => {
        return (
          <Shape shape={shape} onClick={handleClickOnShape} key={shape.id} />
        );
      })}
    </Canvas>
  );
}

const styles = StyleSheet.create({
  canvas: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "white",
  },
});
export default Scene;
