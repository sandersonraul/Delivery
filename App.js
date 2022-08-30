import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/home/index";
import Address from "./src/pages/address/index";
import SearchAddress from "./src/pages/searchAddress/index";
import Detail from "./src/pages/detail";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
