import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Wrapper = styled.SafeAreaView`
  flex: 1; 
  background-color: #fff;
`;

export const Profile = styled.View`
   flex-direction: row;
   justify-content:space-between;
   padding: 0 30px;
   margin-top: 12%;
`;

export const Location = styled.View`
   flex-direction: row;
   align-items:center ;
`;

export const Adress = styled.View`
   padding-left: 10px ;
`;

export const Lable = styled.Text`
      font-size: 10px;
`;

export const AdressValue = styled.Text`
   font-size: 14px;
`;

export const Img = styled.Image`
`;

export const Store = styled.View`
   flex-direction: row ;
   margin: 30px 25px;
`;

export const LableStore = styled.Text`
   padding: 0 25px;
   font-size: 20px;
   font-weight: 700;
`;

export const Delivery = styled.View`
   width: 90%;
   margin: 0 25px ;
   padding: 10px ;
   background-color: #F7FAFB;
   flex-direction: row;
   justify-content: space-between;
   align-items: center ;
`;

export const Hour = styled.View`
`;

export const ItemHour = styled.View`
`;

export const LabelHour = styled.Text`
   font-size: 15px;
   margin: 5px 15px;
`;

export const StatusDelivery = styled.View`
   border-radius: 8.5px;
   padding: 10px ;
   background-color:rgba(70, 222, 153, 0.1);
 ;
`;

export const LabelStatus = styled.Text`
   font-weight: 700;
   font-size: 16px;
   line-height: 15px;
   color: #46DE99;
`;

export const List = styled(FlatList).attrs({
})`
`;



