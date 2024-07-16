import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ** Navigation Screens
import HomeScreen from "@/screens/ShapesList/ShapesList";
import CreateShape from "@/screens/CreateShape/CreateShape";
import RenderShape from "@/screens/3D/RenderShape";

// ** type
import { ShapeT } from "@/typing/shape";

export type RootStackParamList = {
  ShapesList: undefined;
  CreateShape: undefined;
  RenderShape: { shapesList: ShapeT[] };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ShapesList"
          component={HomeScreen}
          options={{ title: "Shapes List" }}
        />
        <Stack.Screen name="CreateShape" component={CreateShape} />
        <Stack.Screen name="RenderShape" component={RenderShape} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
