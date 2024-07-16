import { platform } from "@/utilities/platform";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  View,
} from "react-native";

export const KeyboardAvoidComponent = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={platform === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>{children}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "space-around",
  },
});

export default KeyboardAvoidComponent;
