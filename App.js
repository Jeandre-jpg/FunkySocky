import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import useFonts from './assets/hooks/useFonts';
import UserStack from './components/dashboardcomps/UserStack';

export default function App() {

  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

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
