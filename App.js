import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import UserStack from './components/dashboardcomps/UserStack';

export default function App() {

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 5000);

  return (
    <NavigationContainer style={styles.container}>
   <UserStack/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50
  },
  tabContainer:{
    marginTop: 30,
      flex: 1,
      flexDirection:  'row',
      justifyContent: 'space-between'
  }
});
