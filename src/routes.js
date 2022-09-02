import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/home";
import Detail from "./pages/detail";
import SearchAddress from "./pages/searchAddress";
import Address from "./pages/address";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="address" component={Address} />
      <Stack.Screen name="searchaddress" component={SearchAddress} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="detail" component={Detail} />
    </Stack.Navigator>
  );
}
