import react, {useState} from 'react'
import {Alert} from 'react-native'
import ItemCategory from '../ItemCategory';
import { Container,List } from './styles';

const DATA = [
   {
     id: '1',
     title: 'Destaque',
   },
   {
     id: '2',
     title: 'Á La Carte',
   },
   {
     id: '3',
     title: 'Executivos',
   },
   {
     id: '4',
     title: 'Hamburguer',
   },
   {
     id: '5',
     title: 'Pizza',
   },
   {
     id: '6',
     title: 'Sobremessa',
   },
 ];

 
export default function FlatListCategory(){
  const[element,setElement]=useState(DATA[0])
   function selectItem(item){
     setElement(item)
   }
   return(
      <Container> 
        <List horizontal data={DATA} 
            renderItem={({item})=>  
            <ItemCategory   
            selected={ item.id === element.id }
            title={item.title} onPress={()=>selectItem(item)}/>  } 
            keyExtractor={item => item.id} /> 
      </Container> 
   )
}