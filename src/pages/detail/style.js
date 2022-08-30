import styled from "styled-components";

export const ViewMain = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;
export const ViewHeader = styled.View`
  width: 100%;
`;
export const ViewContent = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 24px;
  /* height: 60%; */
`;
export const TitleProduct = styled.Text`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  margin-bottom: 16px;
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
  margin-bottom: 32px;
`;
export const ViewPrice = styled.View`
  display: flex;
  flex-direction: column;
`;

export const TitleDescription = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
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
  bottom: 0px;
`;
export const QuantityCar = styled.View`
  background: #fcfcfa;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
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
export const TextAux = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #979797;
  margin-bottom: 16px;
`;
export const ViewTest = styled.View`
  display: flex;
  flex-direction: column;
`;
