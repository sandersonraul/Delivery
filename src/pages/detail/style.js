import styled from "styled-components";

export const ViewMain = styled.View`
  display: flex;
  width: 100%;
`;
export const ViewHeader = styled.View``;
export const ViewContent = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 24px;
`;
export const TitleProduct = styled.Text`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
`;
export const PriceProduct = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
`;
export const FromPrice = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #f9b233;
`;
export const ViewAux = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ViewPrice = styled.View`
  display: flex;
  flex-direction: column;
`;

export const TitleDescription = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;
export const DescriptionProduct = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
export const ViewDescription = styled.View`
  display: flex;
  flex-direction: column;
`;
export const ButtonAddCar = styled.TouchableOpacity`
  background: #f9b233;
  border-radius: 30px;
  display: flex;
  padding: 6px;
  justify-content: space-around;
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const QuantityCar = styled.View`
  background: #fcfcfa;
  /* border-radius: 50%; */
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NumberDelivery = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #f9b233;
`;
export const ViewQuantityDelivery = styled.View`
  display: flex;
  flex-direction: row;
`;
