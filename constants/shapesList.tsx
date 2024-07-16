import { ShapeT } from "@/typing/shape";

export const shapesList: ShapeT[] = [
  {
    id: "1",
    name: "sphere",
    position: {
      x: 0,
      y: 1.5,
      z: 0,
    },

    color: "blue",
    type: "sphere",
    scale: {
      x: 0.5,
      y: 0.5,
      z: 0.5,
    },
  },
  {
    id: "2",
    name: "cube",
    position: {
      x: 0,
      y: 3,
      z: 0,
    },
    color: "red",
    type: "cube",
    scale: {
      x: 0.5,
      y: 0.5,
      z: 0.5,
    },
  },
  {
    id: "3",
    name: "cone",
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    color: "yellow",
    type: "cone",
    scale: {
      x: 0.5,
      y: 0.5,
      z: 0.5,
    },
  },
  {
    id: "4",
    name: "cylinder",
    position: {
      x: 0,
      y: -2,
      z: 0,
    },

    color: "green",
    type: "cylinder",
    scale: {
      x: 0.5,
      y: 0.5,
      z: 0.5,
    },
  },
];
