import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createStackNavigator} from "@react-navigation/native"
import { TextInput } from 'react-native-paper';
import Home from './components/screens/Home';
import Login from './components/screens/login';
import Signup from './components/screens/signup';
import Loading from './components/screens/loading';

export default function App(){
  return(
    <>
    <Signup/>
    </>
  );
}