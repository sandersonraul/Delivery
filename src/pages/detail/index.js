import { useEffect, useState } from "react";
import { Text, StyleSheet, Image } from "react-native";
import file from "../../images/image-product.png";
import menos from "../../images/menos.png";
import mais from "../../images/mais.png";
import { baseURL, Login } from "../../utils/apiBase";
import {
  ViewAux,
  ViewContent,
  ViewHeader,
  ViewPrice,
  ViewMain,
  PriceProduct,
  FromPrice,
  DescriptionProduct,
  TitleDescription,
  TitleProduct,
  ViewDescription,
  ButtonAddCar,
  QuantityCar,
  NumberDelivery,
  ViewQuantityDelivery,
  TextAux,
  ViewTest,
  ViewSum,
  QuantityDelivery,
} from "./style";
import axios from "axios";

export default function Detail({ route, navigation }) {
  const { id } = route.params;
  console.log(id)
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [countCar, setCountCar] = useState(1);

  async function handleProduct(idProduct) {
    const res = await axios.get(
      `${baseURL}api/lojas/listar_detalhes_produto/${idProduct}/`
    );
    setProduct(res.data);
  }
  function handleCount(type) {
    if (type == "increment") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }
  function calc(value) {
    return count * value;
  }
  async function SentRequest() {
    const user = await Login();
    const res = await axios.post(
      `${baseURL}api/lojas/cadastrar_pedido/`,
      {
        valor_total: calc(product?.valor),
        loja: product?.loja?.id,
        produtos: [product?.id],
      },
      {
        headers: {
          Authorization: `Bearer ${user?.tokens?.access}`,
        },
      }
    );
  }

  useEffect(() => {
    handleProduct(id);
  }, []);
  return (
    <>
      <ViewMain>
        <ViewTest></ViewTest>
        <ViewHeader>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: product?.imagem,
            }}
          />
        </ViewHeader>
        <ViewContent>
          <ViewTest>
            <TextAux>{product?.exclusivo && "Exclusivo"}</TextAux>
            <TitleProduct>{product?.nome}</TitleProduct>

            <ViewAux></ViewAux>
            <ViewAux>
              <ViewPrice>
                <FromPrice>Por</FromPrice>
                <PriceProduct>R$ {product?.valor}</PriceProduct>
              </ViewPrice>
              <ViewQuantityDelivery>
                <ViewSum onPress={() => handleCount("decrement")}>
                  <Image source={menos} />
                </ViewSum>

                <QuantityDelivery>{count}</QuantityDelivery>
                <ViewSum onPress={() => handleCount("increment")}>
                  <Image source={mais} />
                </ViewSum>
              </ViewQuantityDelivery>
            </ViewAux>
            <ViewAux>
              <ViewDescription>
                <TitleDescription>Descrição</TitleDescription>
                <DescriptionProduct>
                  {product?.descricao
                    ? product?.descricao
                    : "Carlsberg Smooth, a premium mild beer crafted with the finest European Barley for a rich and smooth taste. Brewed specially for the Indian palate with a refreshing and elegant taste, Carlsberg Smooth offers a unique product and a new experience to our consumers"}
                </DescriptionProduct>
              </ViewDescription>
            </ViewAux>
          </ViewTest>
          <ButtonAddCar
            onPress={() => {
              SentRequest();
              alert("Pedido realizado!");
            }}
          >
            <Text>Finalizar Pedido</Text>
            <QuantityCar>
              <NumberDelivery>{countCar}</NumberDelivery>
            </QuantityCar>
          </ButtonAddCar>
        </ViewContent>
      </ViewMain>
    </>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: "100%",
    height: 320,
  },
});
