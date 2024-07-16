import { Navigations } from "@/navigation/Navigations";

import { PaperProvider } from "react-native-paper";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigations />
    </PaperProvider>
  );
}
