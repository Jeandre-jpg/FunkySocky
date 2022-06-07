
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import landing from '../../assets/landing.jpeg';

import Login from './Login';
import Register from './Register';


const Tab = createBottomTabNavigator();


export default function Splash({ navigation }) {

  return (
    <View style={styles.container}>
          <Text style={styles.fontText1}>Welcome fellow Funky Socky!</Text>
          <Image source={landing} style={styles.card}></Image>
          <Text style={styles.fontText2}>Life is worth the living with a pair! So grab your funky sockies today.</Text>
          <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
            <Text style={styles.goButton}>Let's go!</Text>
        </TouchableOpacity>
    </View>
  );
}




const styles = StyleSheet.create({
    container: {
      height: 900,
      paddingTop: 100,
      backgroundColor: '#E8D3B4'
    },
    card:{
        width: 320, 
        height: 300, 
        marginTop: 60, 
        paddingBottom: 40,
        marginLeft: 30,
        padding: 20,
    },
    fontText1: {
      paddingLeft: 20,
      fontFamily: 'OleoScript-Regular',
      fontSize: 40,
      marginTop: 10
    },
    fontText2: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 15,
      width: 300,
      textAlign: 'left',
      marginTop: 30,
      marginLeft: 30
    },
    goButton: {
        marginTop: 50,
        color: '#fff',
        backgroundColor: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        width: 300, 
        borderRadius: 30,
        height: 50, 
        marginLeft: 30,
        marginTop: 20, 
        padding: 15,
        flexDirection: 'row'
    }
  });
  