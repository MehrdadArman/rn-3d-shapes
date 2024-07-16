import styled from "@emotion/native";
import { ViewProps } from "react-native";

interface ContainerProps extends ViewProps {
  direction?: "row" | "column";
  margin?: number;
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between";
  gap?: number;
}

export const Container = styled.View<ContainerProps>((props) => ({
  display: "flex",
  gap: props.gap ?? 0,
  flexDirection: props.direction ?? "column",
  margin: props.margin ?? 0,
  justifyContent: props.justifyContent ?? "center",
}));
