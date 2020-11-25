import * as React from 'react';
import { Text, View, StyleSheet,StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { TextInput,Button } from 'react-native-paper';

const Signup=()=>{
   const [email,setEmail]=React.useState('');
   const [password,setPassword]=React.useState('');



  const sendCred=()=>{
    fetch("https://f9ec444c5138.ngrok.io/signup",{
      method:"POST",
      mode:'no-cors',
     headers:{
        "Access-Control-Allow-Origin": "https://f9ec444c5138.ngrok.io/signup",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "PUT,POST,GET,PATCH,DELETE",
       'Content-Type':"application/json",
       'Accept': 'application/json'
     },
     body:JSON.stringify({
       'email':email,
       'password':password
     })
    })
    .then(response => response.json({email,password}))
    .then(data=> {
       console.log(data)
  })
  
  }
  return(
    <View style={styles.main}>
     <StatusBar backgroundColor="tomato" barStyle='light-conrtent' />
    <View style={styles.textView}>
    <Text style={styles.text}>
      This Is Signup Screen      </Text>
    </View>
    
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
   onPress={sendCred}>
    Signup
  </Button>
    <Text style={styles.text2}> Already have an Account ?
    </Text>
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
    margin:50,
    fontWeight:'bold',
    fontSize:20,
    color:'#fff'
  }
    

})
export default Signup;