
import React from 'react';

import {
   Hour,
   Delivery,
   ItemHour,
   LabelHour,
   StatusDelivery,
   LabelStatus 
 } from './styles'
 
export default function PainelHour() {
   return (
      <Delivery>
         <Hour>
         <ItemHour>
            <LabelHour>Entrega: 30min /1h </LabelHour>
         </ItemHour>
         <ItemHour>
            <LabelHour>Retirada: 15 mim. </LabelHour>
         </ItemHour>
         </Hour>
         <StatusDelivery>
             <LabelStatus>ABERTO</LabelStatus>
         </StatusDelivery>
      </Delivery>
   )
}   