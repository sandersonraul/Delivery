import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./pages/home";
import Detail from "./pages/detail";
import SearchAddress from "./pages/searchAddress";
import Address from "./pages/address";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Carrinho from "./pages/carrinho";
import Pedidos from "./pages/pedidos";
import EditProfile from "./pages/profile/editProfile";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="address" component={Address} />
      <Stack.Screen name="searchaddress" component={SearchAddress} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen options={{ headerShown: false}} name="login" component={Login} />
      <Stack.Screen options={{ headerShown: false}} name="home" component={BottomNavigation} />
      <Stack.Screen name="edit profile" component={EditProfile} />
      <Stack.Screen name="detail" component={Detail} />

    </Stack.Navigator>
  );
}

export function BottomNavigation() {
  return (
    <BottomTab.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 12},tabBarActiveTintColor: '#F9B233',tabBarStyle: {backgroundColor: '#FFF'},headerShown:false, labelPosition: 'below-icon'}}>
      <BottomTab.Screen name="Home" options={{ tabBarIcon: ({ color }) => <Octicons name='home' size={30} color={color} /> } } component={Home}/>
      <BottomTab.Screen name="Meus Pedidos" options={{ tabBarIcon: ({ color }) => <Feather name='shopping-bag' size={30} color={color} /> } } component={Pedidos}/>
      <BottomTab.Screen name="Carrinho" options={{tabBarIcon: ({ color }) => <AntDesign name='shoppingcart' size={38} color={color} />} } component={Carrinho}/>
      <BottomTab.Screen name="Meu Perfil" options={{tabBarIcon: ({ color }) => <FontAwesome name='user-o' size={30} color={color} />} } component={Profile}/>
    </BottomTab.Navigator>
  )
}
