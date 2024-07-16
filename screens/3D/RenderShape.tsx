import { RootStackParamList } from "@/navigation/Navigations";

import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import Scene from "./components/Scene";
import { ShapeT, ShapeTypeT } from "@/typing/shape";
import { useState } from "react";
import ShapeEditForm from "./components/ShapeEditForm";
import InfoCard from "./components/InfoCard";
import KeyboardAvoidComponent from "@/components/Keyboard/KeyboardAvoidComponent";

type Props = NativeStackScreenProps<RootStackParamList, "RenderShape">;

const RenderShape = ({ route }: Props) => {
  const { shapesList } = route.params;
  const [selectedShape, setSelectedShape] = useState<ShapeT | null>(null);

  const [renderShapeData, setRenderShapeData] = useState<ShapeT[]>(shapesList);

  const handleClickOnShape = (shape: ShapeT) => {
    setSelectedShape(shape);
  };

  const handleSubmitEditeShape = (shape: ShapeT) => {
    setRenderShapeData((prev) =>
      prev.map((item) => (item.type === shape.type ? shape : item))
    );
  };

  return (
    <KeyboardAvoidComponent>
      <Scene
        shapesList={renderShapeData}
        handleClickOnShape={handleClickOnShape}
      />

      {selectedShape ? (
        <ShapeEditForm
          selectedShape={selectedShape}
          setSelectedShape={setSelectedShape}
          handleSubmitForm={handleSubmitEditeShape}
        />
      ) : (
        <InfoCard />
      )}
    </KeyboardAvoidComponent>
  );
};

export default RenderShape;
