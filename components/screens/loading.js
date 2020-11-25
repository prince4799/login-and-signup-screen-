import * as React from 'react';
import { View,ActivityIndicator } from 'react-native';

const Loading=()=>{
  return(
    
     <ActivityIndicator size="large" color="#2538b8" 
     style={{
       flex:1,
       backgroundColor:'#647cc4'
       }}/>
  );
}

export default Loading;