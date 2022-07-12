
import React from 'react';
import {Text} from 'react-native'

import {
   Container,
   InputText,
   Icon
 } from './styles'
 
export default function Input() {
   return (
      <Container>
         <Icon name="search" size={24} color="black" />
         <InputText/>
      </Container>
   )
}   