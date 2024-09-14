import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home";
import Central from "./screens/central";
import Nutrition from "./screens/nutrition";
import Ingredient from "./screens/ingredient";
import Diet from "./screens/diet";
import AdminHome from "./admin/Home";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Diet" component={Diet} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="Central" component={Central} />
        <Stack.Screen name="Nutrition" component={Nutrition} />
        <Stack.Screen name="Ingredient" component={Ingredient} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
