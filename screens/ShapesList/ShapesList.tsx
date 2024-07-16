import { Container } from "@/styles/GlobalStyles";
import { Link } from "@react-navigation/native";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import ShapesTable from "./components/ShapesTable/ShapesTable";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/Navigations";
import { useFetchShapeList } from "@/hooks/useFetchShapeList";
import { ShapeT } from "@/typing/shape";

type Props = NativeStackScreenProps<RootStackParamList, "ShapesList">;

const ShapesList = ({ navigation }: Props) => {
  const { shapesList, deleteShape } = useFetchShapeList();

  // ** delete shape
  const handleDeleteShape = (id: string) => {
    deleteShape(id);
  };

  // ** render shape and navigate
  const handleRenderShape = (shape: ShapeT) => {
    navigation.navigate("RenderShape", { shapesList: [shape] });
  };

  const handlePressOnCreateShapeBtn = () => {
    navigation.navigate("CreateShape");
  };

  const handlePressOnRenderShapeBtn = () => {
    navigation.navigate("RenderShape", {
      shapesList: shapesList as ShapeT[],
    });
  };

  return (
    <Container margin={10}>
      <Container direction="row" justifyContent="space-between">
        <Button
          icon="video-3d"
          mode="outlined"
          onPress={handlePressOnRenderShapeBtn}
          disabled={shapesList.length === 0}
        >
          <Text>Render Shapes</Text>
        </Button>

        <Button
          icon="plus"
          mode="contained"
          onPress={handlePressOnCreateShapeBtn}
        >
          <Text>Create Shape</Text>
        </Button>
      </Container>

      <ShapesTable
        deleteShape={handleDeleteShape}
        shapesList={shapesList}
        renderShape={handleRenderShape}
      />
    </Container>
  );
};

export default ShapesList;
