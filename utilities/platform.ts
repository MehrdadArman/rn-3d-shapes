import { Dimensions, Platform } from "react-native";

export const platform = Platform.OS;
export const platformVersion = Platform.Version;

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
