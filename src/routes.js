import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/home";
import Detail from "./pages/detail";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="detail" component={Detail} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}
