export type ShapeTypeT = "sphere" | "cube" | "cylinder" | "cone";

export type ShapeT = {
  id: string;
  name: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  color: string;
  type: ShapeTypeT;
  scale: {
    x: number;
    y: number;
    z: number;
  };
};
