import { useEffect, useState } from "react";
import { Text, SafeAreaView, Image } from "react-native";
import file from "../../images/image-product.png";
import menos from "../../images/menos.png";
import mais from "../../images/mais.png";
import { detailProduct } from "../../utils/apiBase";
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

export default function Detail({ route, navigation }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [countCar, setCountCar] = useState(0);

  async function handleProduct(idProduct) {
    const pro = await detailProduct(idProduct);
    setProduct(pro);
  }
  function handleCount(type) {
    if (type == "increment") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }
  function resetCount() {
    setCount(1);
  }

  useEffect(() => {
    handleProduct(id);
  }, []);
  return (
    <>
      <ViewMain>
        <ViewTest></ViewTest>
        <ViewHeader>
          <Image source={file} />
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
                  Carlsberg Smooth, a premium mild beer crafted with the finest
                  European Barley for a rich and smooth taste. Brewed specially
                  for the Indian palate with a refreshing and elegant taste,
                  Carlsberg Smooth offers a unique product and a new experience
                  to our consumers
                </DescriptionProduct>
              </ViewDescription>
            </ViewAux>
          </ViewTest>
          <ButtonAddCar
            onPress={() => {
              setCountCar(countCar + 1);
              resetCount();
              navigation.navigate("home");
            }}
          >
            <Text>Adicionar ao Carrinho</Text>
            <QuantityCar>
              <NumberDelivery>{countCar}</NumberDelivery>
            </QuantityCar>
          </ButtonAddCar>
        </ViewContent>
      </ViewMain>
    </>
  );
}
