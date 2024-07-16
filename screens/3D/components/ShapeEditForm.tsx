import { StyleSheet, View } from "react-native";

import { Container } from "@/styles/GlobalStyles";
import { ShapeT } from "@/typing/shape";
import { Formik } from "formik";

import { Button, Card, HelperText, Text, TextInput } from "react-native-paper";
import { editShapeSchema } from "../schema";
import { platform } from "@/utilities/platform";

type ShapeEditFormPropsT = {
  selectedShape: ShapeT;
  setSelectedShape: (shape: ShapeT | null) => void;
  handleSubmitForm: (shape: ShapeT) => void;
};

const ShapeEditForm = ({
  selectedShape,
  setSelectedShape,
  handleSubmitForm,
}: ShapeEditFormPropsT) => {
  const {} = selectedShape;
  return (
    <Container margin={10}>
      <Card style={styles.shapeInfoCard}>
        <Text variant="titleLarge" style={styles.shopInfoCardTitle}>
          {selectedShape.type}
        </Text>

        <Formik
          validationSchema={editShapeSchema}
          initialValues={{
            positionX: selectedShape.position.x,
            positionY: selectedShape.position.y,
            positionZ: selectedShape.position.z,
            scale: selectedShape.scale.x,
          }}
          onSubmit={(values) => {
            handleSubmitForm({
              ...selectedShape,
              position: {
                x: values.positionX,
                y: values.positionY,
                z: values.positionZ,
              },
              scale: {
                x: values.scale,
                y: values.scale,
                z: values.scale,
              },
            });
          }}
          validator={() => ({})}
          enableReinitialize
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
            dirty,
          }) => (
            <>
              <Container
                direction={"row"}
                justifyContent={"space-between"}
                gap={5}
              >
                <TextInput
                  label="Postion X"
                  value={values.positionX.toString()}
                  onChangeText={handleChange("positionX")}
                  keyboardType="numbers-and-punctuation"
                  style={styles.textInput}
                  error={errors.positionX && touched.positionX ? true : false}
                />
                <TextInput
                  label="Position Y"
                  value={values.positionY.toString()}
                  keyboardType="numbers-and-punctuation"
                  onChangeText={handleChange("positionY")}
                  style={styles.textInput}
                  error={errors.positionY && touched.positionY ? true : false}
                />
                <TextInput
                  label="Position Z"
                  value={values.positionZ.toString()}
                  onChangeText={handleChange("positionZ")}
                  keyboardType="numbers-and-punctuation"
                  style={styles.textInput}
                  error={errors.positionZ && touched.positionZ ? true : false}
                />
              </Container>

              <View style={styles.hintText}>
                {errors.positionX && touched.positionX && (
                  <HelperText type="error" visible={true}>
                    {errors.positionX}
                  </HelperText>
                )}
              </View>
              <View>
                {errors.positionY && touched.positionY && (
                  <HelperText type="error" visible={true}>
                    {errors.positionY}
                  </HelperText>
                )}
              </View>
              <View>
                {errors.positionZ && touched.positionZ && (
                  <HelperText type="error" visible={true}>
                    {errors.positionZ}
                  </HelperText>
                )}
              </View>

              <Container
                direction={"row"}
                justifyContent={"space-between"}
                gap={5}
              >
                <TextInput
                  label="Scale"
                  value={values.scale.toString()}
                  onChangeText={handleChange("scale")}
                  keyboardType="numeric"
                  style={styles.textInput}
                  showSoftInputOnFocus={true}
                  error={errors.scale && touched.scale ? true : false}
                />
              </Container>

              <HelperText type="error" visible={true}>
                {errors.scale && touched.scale ? errors.scale : ""}
              </HelperText>

              <Container
                direction={"row"}
                justifyContent={"flex-end"}
                gap={5}
                margin={5}
              >
                <Button onPress={() => setSelectedShape(null)} mode="outlined">
                  close
                </Button>
                <Button
                  onPress={() => {
                    handleSubmit();
                  }}
                  mode="contained"
                  disabled={!isValid && !dirty}
                >
                  Save
                </Button>
              </Container>
            </>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    flex: 1,
  },
  shapeInfoCard: {
    padding: 10,
    elevation: 1,
    marginBottom: platform === "ios" ? 20 : 0,
  },
  shopInfoCardTitle: {
    marginBottom: 24,
  },
  hintText: {
    marginBottom: 5,
    marginTop: 5,
  },
});

export default ShapeEditForm;
