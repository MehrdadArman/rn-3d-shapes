import * as Yup from "yup";

type EditShapeSchemaT = {
  positionX: string;
  positionY: string;
  positionZ: string;
  scale: string;
};
export const editShapeSchema: Yup.ObjectSchema<EditShapeSchemaT> =
  Yup.object().shape({
    positionX: Yup.string()
      .required("Position X is required")
      .matches(/^[-]?[0-3]$/, "Position X must be between -3 and 3"),
    positionY: Yup.string()
      .required("Position Y is required")
      .matches(/^[-]?[0-3]$/, "Position Y must be between -3 and 3"),
    positionZ: Yup.string()
      .required("Position Z is required")
      .matches(/^[-]?[0-3]$/, "Position Z must be between -3 and 3"),
    scale: Yup.string()
      .required("Scale is required")
      .matches(/^[1-4]$/, "Position X must be between 1 and 4"),
  });
