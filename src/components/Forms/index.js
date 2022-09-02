import React, { useState } from 'react';
import { 
  TextInput, 
  View, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Forms (props) {
  const [sec, setSec] = useState(props.secureTextEntry)
 return (
  <View>
    <TextInput 
      style={styles.input}
      underlineColorAndroid='transparent'
      placeholderTextColor={'black'}
      autoCorrect={false}
      {...props}
      secureTextEntry={sec}
    />
    <Icon name={props.iconName} size={26} color={'#F9B233'} style={styles.icon}/>
    {props.secureTextEntry && (
      <TouchableOpacity onPress={()=>setSec(!sec)}>
        <Icon
          name={sec ? 'eye' : 'eye-off' }
          size={26} 
          color={'#F9B233'} 
          style={styles.iconEye}
        />
      </TouchableOpacity>
    )}
  </View>
  );
}

const styles = StyleSheet.create({
  input:{
    height: 50,
    width: 350,
    backgroundColor: '#FFF',
    paddingLeft: 45,
    marginHorizontal: 20,
    borderRadius: 8,
    fontSize: 16,
    borderColor: '#E4E7EB',
    borderWidth: 1.5,
    color:'black', 
  },
  icon:{
    position:'absolute',
    left: 32,
    top: 12,
  }, 
  iconEye:{
    position:'absolute',
    right: 32,
    bottom: 11,
  },  
})