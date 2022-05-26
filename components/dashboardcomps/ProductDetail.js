import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function CompList({ navigation }) {

    const competitions = [
        {name: 'Spring Hickety', role: 'Open'},
        {name: 'Save Our Soles', role: 'Upcoming'},
        {name: 'Satisfeet', role: 'Upcoming'},
        {name: 'jollyZing Sockies', role: 'Closed'}
    ]
    
const onSignOutPress = () => {
//success
        signOut(auth).then(() => {
            
        }).catch((error) => {
            Alert.alert(error.message);         
        })  
}

  return (

<View style={styles.container}>

<Button title='Sign Out' onPress={onSignOutPress}/>
  

<Text style={styles.fontText1}>Welcome</Text>
<Text style={styles.fontText2}>Life is worth the living with a pair! So grab your funky sockies today.</Text>

<View style={styles.container2}>
<Text style={styles.fontText2}>All competitions</Text>
        <ScrollView style={{paddingBottom: 130}}>
            {competitions. map((competition, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate("Profile")}>
                <View key={index} style={styles.card}>
                    <Text style={{fontSize: 21}}>{competition.name}</Text>
                    <Text>{competitions.role}</Text>
                </View>
            </TouchableOpacity>
            ))}
            
        </ScrollView>

</View>


      


                
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#E8D3B4'
    },
    container2: {
       width: 350,
       height: 300,
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
        width: '40%', 
        height: 120, 
        backgroundColor: '#E8D3B4', 
        marginTop: 10, 
        borderRadius: 60,
        marginLeft: 85,
        borderColor: 'black',
        borderWidth: 4,
        padding: 40,
    },
    fontText1: {
      fontFamily: 'OleoScript-Regular',
      fontSize: 40,
      marginTop: 80
    },
    fontText2: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 13,
      marginTop: 30,
      marginBottom: 10
    },
    fontText3: {
      fontFamily: 'OleoScript-Regular',
      fontSize: 30,
      marginTop: 80
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
    loginButton: {
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
  