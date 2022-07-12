import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'; 

export const Container = styled.View`
   height: 45px ;
   border-radius: 10px;
   margin: 15px;
   border-width: 2px;
   border-color: #E5E5E5;
   flex-direction: row;
   align-items: center;
   padding: 10px;
   `;

export const InputText = styled.TextInput`
  flex: 1;
  color: #979797;
  font-size: 16px;
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;