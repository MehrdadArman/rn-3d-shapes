import { MD3LightTheme as DefaultTheme, useTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4169E1",
    accent: "#f1c40f",
    destructive: "#e74c3c",
  },
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
