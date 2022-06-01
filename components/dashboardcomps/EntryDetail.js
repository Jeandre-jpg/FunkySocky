import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import socksIcon from '../../assets/sockies.png';
import CompList from './CompList';

export default function FillerSplash({ navigation }) {

    const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer style={styles.container}>
              
    <Stack.Navigator>
       <Stack.Screen name="Complist" component={CompList} />
    </Stack.Navigator>


    

<View style={styles.container}>

<Text style={styles.fontText1}>Sockies Inspired</Text>
<Text style={styles.fontText2}>By You</Text>

   <Image source={socksIcon} style={{width: 150, height: 150, marginTop: 10, marginLeft: 100}}/>



   <View style={{ backgroundColor: '#E8D3B4', flexDirection: 'row'}}>

   {/* <TouchableOpacity onPress={onPressStart} style={styles.button}>
        <Text style={styles.buttonText}>Start Journey</Text>
      </TouchableOpacity> */}
</View>
      


                
    </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
      height: 700,
      paddingTop: -100,
      backgroundColor: '#E8D3B4'
    },
    container2: {
       width: 350,
       height: 300,
       marginTop: 30,
       borderRadius: 20,
       borderColor: 'black',
       borderWidth: 4,
        backgroundColor: '#B6A07E'
      },
    heading: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#000000',
      marginTop: 20
    },
    card:{
        width: '90%', 
        height: 70, 
        justifyContent: 'center',
        backgroundColor: 'black', 
        marginTop: 10, 
        borderRadius: 60,
        marginLeft: 10,
        padding: 20,
    },
    fontText1: {
      fontFamily: 'OleoScript-Regular',
      fontSize: 40,
      marginTop: 10
    },
    fontText2: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 13,
      marginTop: 10,
      marginBottom: 10
    },
    fontText3: {
      fontFamily: 'OleoScript-Regular',
      fontSize: 30,
      marginTop: 80,
      color: 'white'
    },
    input:{
      borderBottomColor: '#000000',
      borderBottomWidth: 2,
      marginBottom: 10,
      padding: 10,
      fontFamily: 'Poppins-ExtraBold',
      fontSize: 30,
      marginTop: 40,
      paddingLeft: 20,
      marginBottom: 10
    },
    signoutButton: {
        marginTop: 10,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        width: 50, 
        height: 50, 
        marginTop: 20, 
        padding: 30,
        flexDirection: 'row'
    }
  });
  