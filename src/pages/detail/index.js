import { useEffect, useState } from "react";
import { Text, SafeAreaView, Image } from "react-native";
import styled from "styled-components";
import file from "../../images/image-product.png";
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
} from "./style";

export default function Detail({ route, navigation }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  async function handleProduct(idProduct) {
    const pro = await detailProduct(idProduct);
    setProduct(pro);
  }

  useEffect(() => {
    handleProduct(id);
  }, []);
  useEffect(() => {
    console.log(product);
  }, [product]);
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
                <Text>menos</Text>
                <Text>1</Text>
                <Text>mais</Text>
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
          <ButtonAddCar>
            <Text>Adicionar ao Carrinho</Text>
            <QuantityCar>
              <NumberDelivery>3</NumberDelivery>
            </QuantityCar>
          </ButtonAddCar>
        </ViewContent>
      </ViewMain>
    </>
  );
}
