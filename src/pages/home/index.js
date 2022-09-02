import React, {useState, useEffect} from "react";
import {
  Wrapper,
  Profile,
  Adress,
  Lable,
  AdressValue,
  Img,
  Location,
  Store,
  LableStore,
  List
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import ImageProfile from "../../images/profile.png";
import Logotipo from "../../images/logotipo.png";
import PainelHour from "../../components/PanelHour";
import Input from "../../components/Input";
import FlatListCategory from "../../components/FlatListCategory";
import FlatListMenu from "../../components/FlatListMenu";
import { apiClient } from "../../utils/apiBase";

export default function Home({ route, navigation }) {
  const [produtos, setProdutos] = useState([])
  const [loja, setLoja] = useState([])
   useEffect(()=>{
    async function getLoja(){
      try{
        const { data } = await apiClient.get('api/lojas/listar_lojas/')
        setLoja(data.results[0])
      } catch(err){
        console.log(err)
      }
    }
    async function getProdutos(){
        try{
          const { data } = await apiClient.get('api/lojas/listar_produtos/')
          setProdutos(data.results)
        } catch(err){
          console.warn(err)
        }
      }
    getLoja()
    getProdutos()
   })

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
        <LableStore>{loja.nome}</LableStore>
      </Store>

      <PainelHour />
      <Input />
      <FlatListCategory />
      <List 
            data={produtos}
            renderItem={({item})=>
               <FlatListMenu                
                  title={item.nome} 
                  price={item.valor}
                  descr={item.descricao}
                  id={item.id}
                  navigation={navigation}
                  keyExtractor={item => item.id}
               />
            }
         />
    </Wrapper>
  );
}
