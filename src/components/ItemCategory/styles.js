import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
   border-radius: 25px;	
   padding: 5px;
   margin: 5px;
   background-color: ${props=>props.selected ? '#F9B233' : '#ffffff' };
`
export const Label = styled.Text`
   font-size: 16px;
   font-weight: 500;
   color: #000000;
`;