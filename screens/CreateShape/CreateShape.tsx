import React, { useState } from "react";

// ** components
import DropdownComponent from "@/components/dropdown/Dropdown";

// ** constants
import * as constants from "@/constants/shapesList";

//** fetch */
import { useFetchShapeList } from "@/hooks/useFetchShapeList";

// ** styles
import { Container } from "@/styles/GlobalStyles";

// ** react native paper
import { Button, TextInput } from "react-native-paper";

// ** uuid
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { ShapeTypeT } from "@/typing/shape";

type InputValuesT = {
  name: string;
  type: ShapeTypeT | "";
};

const CreateShape: React.FC = () => {
  const { addShape, shapesList } = useFetchShapeList();
  const [inputValues, setInputValues] = useState<InputValuesT>({
    name: "",
    type: "",
  });

  const handleChange = (name: keyof InputValuesT, value: string) => {
    setInputValues(
      (prevState) =>
        ({
          ...prevState,
          [name]: value,
        } as InputValuesT)
    );
  };

  const handleSubmit = async () => {
    const item = constants.shapesList.find(
      (shape) => shape.type === inputValues.type
    );

    if (inputValues.name && inputValues.type && item) {
      addShape({
        id: uuidv4(),
        name: inputValues.name,
        position: item.position,
        color: item.color,
        type: inputValues.type,
        scale: { x: 1, y: 1, z: 1 },
      });
    } else {
      alert("Please fill the form");
    }
  };

  return (
    <Container margin={10}>
      <TextInput
        label="Name"
        mode="outlined"
        value={inputValues?.name}
        onChangeText={(text) => {
          handleChange("name", text);
        }}
      />
      <DropdownComponent
        data={constants.shapesList.map(({ name, type }) => {
          return { label: name, value: type };
        })}
        onChange={(item) => {
          handleChange("type", item.value);
        }}
        placeholder="Select shape"
      />
      <Button icon="plus" mode="contained" onPress={handleSubmit}>
        Create
      </Button>
    </Container>
  );
};

export default CreateShape;
