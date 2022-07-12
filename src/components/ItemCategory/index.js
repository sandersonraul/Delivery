import react from 'react'
import {Text} from 'react-native'
import { Container,Label } from './styles'
export default function ItemCategory(props){
   return(
      <Container selected={props.selected} {...props}>
         <Label>{props.title}</Label>
      </Container>
   )   
}