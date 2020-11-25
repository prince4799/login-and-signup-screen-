 import * as React from 'react';
import { Text, View, StyleSheet,StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { TextInput,Button } from 'react-native-paper';

const Login=(props)=>{
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');

  return(
    <View style={styles.main}>
     <StatusBar backgroundColor="tomato" barStyle='light-conrtent' />
    <TextInput
    style={styles.input}
      label="Email"
      mode='outlined'
      selectionColor='#556ad4'
      value={`${email}`}
      onChangeText={(text)=>setEmail(text)}
    />
     <TextInput
    style={styles.input}
      label="password"
      mode='outlined'
      selectionColor='#556ad4'
       value={`${password}`}
       onChangeText={(text)=>setPassword(text)}
    />
    
   <Button mode="contained" 
   color='#5caad1'
   labelStyle={{color:'white',fontSize:18}}
   style={styles.buttonStyle}
   onPress={()=>props.navigation.navigate('Home')}>
    Login
  </Button>
    <Button style={styles.text2}
    mode="contained">Don't have an Account?
    </Button>
   </View>
  );
}
const styles=StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#556ad4',
  },
  textView:{
    backgroundColor:'#5caad1',
    height:50,
    width:null,
    top:20,
    borderBottomEndRadius:30,
    borderBottomStartRadius:30,
  },
  text:{
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    alignSelf:'center',
  },
  input:{
    margin:10,
    top:10,
  },
  buttonStyle:{
    margin:70,
  },
  text2:{
    margin:30,
    fontWeight:'bold',
    fontSize:20,
    color:'#fff'
  }
    

})
export default Login;