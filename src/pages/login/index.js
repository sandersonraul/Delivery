import React, { useState } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import Forms from '../../components/Forms';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import { apiClient } from '../../utils/apiBase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  async function signIn(){
    navigation.navigate('home') 
    const data = { email, password }
    try{
      const res = await apiClient.post('api/user/login/', data)
      console.log(res.data)
      
    } catch(err){
      console.log(JSON.stringify(err))
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/user.png')}
        style={{width: 170, height: 170, borderRadius:50, alignSelf: 'center', marginTop:"15%"}} 
      />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Welcome</Text>
      </View>
      <View style={styles.form}>
        <Forms
         iconName={'account'}
         placeholder='Email'
         value={email}
         onChangeText={setEmail}
         autoCapitalize='none'
         keyboardType='email-address'
        />
        <Forms
         iconName={'lock-outline'} 
         placeholder='Password' 
         secureTextEntry
         onChangeText={setPassword}
         autoCapitalize='none'
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.register}>
          <Text style={styles.registerText}>Don't have account? Create now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  header:{},
  textHeader:{
    marginBottom: 45,
    fontSize: 30,
    fontWeight: 'bold',
  },
  form:{
    height: 130,
    justifyContent:'space-around',
  },
  button:{
    backgroundColor: '#F9B233',
    width: 350,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    padding: 5,
  },
  textBtn:{
    fontSize: 18,
    color: '#FFF',
    fontWeight:'bold',
    alignSelf:'center'
  },
  register:{
    marginTop: 10
  },
  registerText:{
    color:'#A1A1A1'
  }

})