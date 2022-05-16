import React from 'react';
import { StyleSheet, Text, Button, SafeAreaView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



export default function UserStack({ route, navigation }) {

    const currentProfile = route.params;

  return (
   
      <SafeAreaView style={styles.container}>
          <Text style={styles.heading}>{currentProfile.name}</Text>
          <Text style={styles.subheading}>{currentProfile.role}</Text>

          <Button title="Again!" color="#841584" onPress={() => navigation.push("Profile", currentProfile)} />

          <Button title="GO BACK" color="red" onPress={() => navigation.goBack()} />

          <Button title="GO TO TOP" color="orange" onPress={() => navigation.popToTop()} />
    </SafeAreaView>
       
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10
      },
  heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'green',
      marginTop: 20,
      textAlign: 'center'
  }, 
  subheading:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
    textAlign: 'center',
      backgroundColor: '#abd5ab',
      borderWidth: 1,
      padding: 10,
      marginTop: 20,
      borderRadius: 30
  }
});
