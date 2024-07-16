import { useEffect, useState } from "react";
import AsyncStorageUtil from "@/utilities/storage/asyncStorageUtil";
import { ShapeT } from "@/typing/shape";

export const useFetchShapeList = () => {
  const [shapesList, setShapesList] = useState<ShapeT[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      const shapesListAsyncStorage = await AsyncStorageUtil.getItem<ShapeT[]>(
        "shapesList"
      );

      setShapesList(shapesListAsyncStorage || []);
    };
    fetchList();
  }, [shapesList]);

  const addShape = async (shape: ShapeT) => {
    const updatedShapesListArray = [...shapesList, shape];
    await AsyncStorageUtil.setItem("shapesList", updatedShapesListArray);
    setShapesList(updatedShapesListArray);
    alert("Shape added successfully");
  };

  const deleteShape = async (id: string) => {
    const updatedShapesListArray = shapesList.filter(
      (shape) => shape.id !== id
    );
    await AsyncStorageUtil.setItem("shapesList", updatedShapesListArray);
    setShapesList(updatedShapesListArray);
    alert("Shape deleted successfully");
  };
  return {
    shapesList,
    setShapesList,
    addShape,
    deleteShape,
  };
};
