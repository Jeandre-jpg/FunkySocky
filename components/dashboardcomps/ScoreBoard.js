import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, Image} from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import signOutIcon from '../../assets/exit.png';
import compIcon from '../../assets/comp2.jpeg';
import compIcon2 from '../../assets/comp2again.jpeg';

export default function ProductDetail({ navigation }) {

    const peers = [
        {name: 'Bob', role: 'Open'}
    ]
    

  return (

<View style={styles.container}>

<View style={styles.container3}>
   <Image source={compIcon} style={{width: 500, height: 300, marginLeft: -50, marginTop: -50, paddingBottom: 20}}/>
   </View>
   <Text style={styles.fontText3}>Top Creative so far:</Text>
<Text style={styles.fontText1}>Abigail</Text>
<Text style={styles.fontText2}>Life is worth the living with a pair! So grab your funky sockies today.</Text>

<View style={styles.container2}>
        <ScrollView style={{paddingBottom: 130}}>
            {peers. map((peer, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate("Product")}>
                <View key={index} style={styles.cardHold}>
                    <Text style={styles.card}>Top Peer Reviewed</Text>
                    <Image source={compIcon2} style={styles.card2}/>
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
      height: 700,
      paddingTop: -100,
      backgroundColor: '#E8D3B4'
    },
    container2: {
      width: 400,
      paddingLeft: 10,
      flex: 1,
      flexDirection: 'column-reverse',
      height: 450,
      marginTop: 30,
      borderRadius: 40,
      paddingBottom: 30,
       backgroundColor: '#B6A07E'
      },
      container3: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: 50,
        },
    heading: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#000000',
      marginTop: 20
    },
    cardHold: {
      justifyContent: 'center',
      backgroundColor: 'black', 
      width: 190, 
      height: 200,
      marginTop: 20, 
      paddingBottom: 40,
      marginLeft: 110,

      flex: 1,
      flexDirection: 'row'
    },
    card:{
        width: 200, 
        height: 80, 
        color: 'white', fontFamily: 'OleoScript-Regular', fontSize: 25,
        justifyContent: 'center',
        backgroundColor: 'black', 
        marginTop: 60, 
        borderRadius: 100,
        paddingBottom: 40,
        marginLeft: -90,
        padding: 20,
        transform: [{ rotate: '270deg'}]
    },
    card2:{
      width: 270, 
      height: 200, 
      justifyContent: 'center',
      marginTop: 0, 
      paddingBottom: 40,
      marginLeft: -75,
      borderRadius: 20,
      padding: 20
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
      marginTop: 10,
      marginLeft: 20
    },
    fontText3: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 15,
      width: 300,
      textAlign: 'left',
      marginTop: 50,
      marginLeft: 20
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
  