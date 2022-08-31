import react from "react";
import { View, TouchableOpacity } from "react-native";
import ItemMenu from "../ItemMenu";
export default function FlatListMenu(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("detail", { id: props.id });
      }}
    >
      <ItemMenu title={props.title} descr={props.descr} price={props.price} />
    </TouchableOpacity>
  );
}
