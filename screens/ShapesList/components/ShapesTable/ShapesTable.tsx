import { DataTable, IconButton } from "react-native-paper";
import TableHeader from "./TableHeader";
import { useAppTheme } from "@/theme/theme";
import { ShapeT } from "@/typing/shape";

type ShapesTableProps = {
  deleteShape: (id: string) => void;
  renderShape: (shape: ShapeT) => void;
  shapesList: ShapeT[];
};

const ShapesTable = ({
  deleteShape,
  shapesList,
  renderShape,
}: ShapesTableProps) => {
  const { colors } = useAppTheme();

  return (
    <DataTable>
      <TableHeader />

      {shapesList.map((shape) => (
        <DataTable.Row key={shape.id}>
          <DataTable.Cell>{shape.name}</DataTable.Cell>
          <DataTable.Cell>{shape.type}</DataTable.Cell>
          <DataTable.Cell>
            <IconButton
              icon="video-3d"
              mode="contained"
              onPress={() => {
                renderShape(shape);
              }}
            />
          </DataTable.Cell>
          <DataTable.Cell>
            <IconButton
              icon="delete"
              mode="contained"
              onPress={() => {
                deleteShape(shape.id);
              }}
              iconColor={colors.destructive}
            />
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default ShapesTable;
