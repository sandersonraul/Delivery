import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
   height: 40px;
   margin-bottom: 20px;
`;
export const List = styled(FlatList).attrs({
   showsHorizontalScrollIndicator:false
})`
`;