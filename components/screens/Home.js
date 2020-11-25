import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-paper';

const Home=()=>{
  return(
    <View style={styles.main}>
    <View style={styles.textView}>
    <Text style={styles.text}>  This Is Home Screen  </Text>
    </View>
   </View>
  );
}
const styles=StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#556ad4',
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    
    backgroundColor:'#5caad1',
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    alignSelf:'center',
    borderRadius:50,
  },
  textView:{
    borderWidth:3,
    borderColor:'#6a45d9',
    borderRadius:20,
  }
})
export default Home;