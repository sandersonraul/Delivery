import react from 'react'
import {View} from 'react-native'
import ItemMenu from '../ItemMenu';
export default function FlatListMenu(props){
   return(
      <View>
         <ItemMenu title={props.title} descr={props.descr} price={props.price}/>
      </View>
   );
}
