import react from 'react'
import {Text,Image} from 'react-native'
import { Container,Description, Title, Descr, Price} from './styles'
import file from '../../images/file.png'

export default function ItemMenu(props){
   return(
      <Container>
         <Image source={file}/>
         <Description>
            <Title>{props.title}</Title>
            <Descr>{props.descr}</Descr>
            <Price>{props.price}</Price>
         </Description>
      </Container>
   )
}