import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Wrapper,
  Profile,
  Adress,
  Lable,
  AdressValue,
  Img,
  Location,
  Store,
  Hour,
  Delivery,
  ItemHour,
  LabelHour,
  LableStore,
  StatusDelivery,
  LabelStatus,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

import ImageProfile from "../../images/profile.png";
import Logotipo from "../../images/logotipo.png";

import PainelHour from "../../components/PanelHour";
import Input from "../../components/Input";
import ItemCategory from "../../components/ItemCategory";
import FlatListCategory from "../../components/FlatListCategory";
import ItemMenu from "../../components/ItemMenu";
import FlatListMenu from "../../components/FlatListMenu";

export default function Home({ route, navigation }) {
  return (
    <Wrapper>
      <Profile>
        <Location>
          <Ionicons name="location" size={35} color="#F9B233" />
          <Adress>
            <Lable>Localização</Lable>
            <AdressValue>Rua Francisco Sales</AdressValue>
          </Adress>
        </Location>
        <Img source={ImageProfile} />
      </Profile>
      <Store>
        <Img source={Logotipo} />
        <LableStore>Restaurante e Pizzaria Divino Sabor</LableStore>
      </Store>

      <PainelHour />
      <Input />
      <FlatListCategory />
      <FlatListMenu
        title="Filé a Parmegiana aaa"
        descr="filé a parmegiana com grandes pedaços de carne e varios macarrão"
        price="R$50,50"
        id={4}
        navigation={navigation}
      />
      {/* <FlatListMenu
        title="X-Tudo"
        descr="filé a parmegiana com grandes pedaços de carne e varios macarrão "
        price="R$20,50"
        onPress={() => {
          navigation.navigate("detail", {
            id: 4,
          });
        }}
      />
      <FlatListMenu
        title="Picanha assada"
        descr="filé a parmegiana com grandes pedaços de carne e varios macarrão"
        price="R$90"
        onPress={() => {
          navigation.navigate("detail", {
            id: 4,
          });
        }}
      /> */}
    </Wrapper>
  );
}
