import { StyleSheet } from "react-native";

import { Container } from "@/styles/GlobalStyles";
import { Card, Text } from "react-native-paper";
import { platform } from "@/utilities/platform";

const InfoCard = () => {
  return (
    <Container margin={10}>
      <Card style={styles.shapeIndoCard}>
        <Text variant="labelLarge">
          Click on the shapes to select and edit their properties
        </Text>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  shapeIndoCard: {
    padding: 10,
    marginBottom: platform === "ios" ? 20 : 10,
  },
});
export default InfoCard;
