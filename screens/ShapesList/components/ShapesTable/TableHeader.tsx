import { DataTable } from "react-native-paper";

const TableHeader: React.FC = () => {
  return (
    <DataTable.Header>
      <DataTable.Title>Name</DataTable.Title>
      <DataTable.Title>Type</DataTable.Title>
      <DataTable.Title>3D View</DataTable.Title>
      <DataTable.Title>Delete</DataTable.Title>
    </DataTable.Header>
  );
};

export default TableHeader;
