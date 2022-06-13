import React, { useState, useEffect} from 'react';
import { auth } from '../../firebase';
import { StyleSheet, Text, Button, SafeAreaView, View, TouchableOpacity, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAvatar } from '../../Database';
import addIcon from '../../assets/add.png';
import avatarIcon from '../../assets/man.png';

const Stack = createNativeStackNavigator();

const competitions = [
  {name: 'Spring Hickety', role: 'Open'}
]


export default function UserDetail({ route, navigation }) {

    const currentProfile = route.params;

    const [avatar, setAvatars]= useState([]);

    useEffect(() => {
      fetchAvatar();
      }, [])
      
      const fetchAvatar = async () => {
        const database = await getAvatar();
        setAvatars(database);
        console.log(database);



      }


  return (
   
    


  <View style={styles.container}>

     <Image source={avatarIcon} style={{width: 150, height: 150, justifyContent: 'center', marginLeft: 130, marginTop: 50}}/>
    
<Text style={styles.fontText1}>Hi, {avatar.username}</Text>

<Text style={styles.fontText2}>Life is worth the living with a pair! So grab your funky sockies today.</Text> 



<SafeAreaView style={styles.container2}>
<Text style={styles.fontText3}>What's going on</Text> 
<SafeAreaView style={styles.card}>
<Text style={{color: 'white', fontFamily: 'OleoScript-Regular', fontSize: 20, paddingLeft: 20}}>Current Competitions</Text>
</SafeAreaView>
<View style={styles.container4}>
  {competitions. map((competition, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate("Product")}>
                <View key={index} style={styles.CompButton}>
                    <Text>{competition.name}</Text>
                    <Text>{competitions.role}</Text>
                </View>
                </TouchableOpacity>
                
            ))}

{competitions. map((competition, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate("CompList")}>
                <View key={index} style={styles.CompButton}>
                    <Text>See More</Text>
                    <Text>{competitions.role}</Text>
                </View>
                </TouchableOpacity>
                
            ))}
            </View>

<SafeAreaView style={styles.card}>
<Text style={{color: 'white', fontFamily: 'OleoScript-Regular', fontSize: 20, paddingLeft: 20}}>Current Entries</Text>
</SafeAreaView>
<View style={styles.container4}>
{competitions. map((add, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate("CompList")}>
                <View key={index} style={styles.CompButton2}>
                <Image source={addIcon} style={{width: 30, height: 30}}/>
                    <Text>{competitions.role}</Text>
                </View>
                </TouchableOpacity>
                
            ))}
            </View>

</SafeAreaView>



</View>
);
}


const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#E8D3B4',
    justifyContent: 'center'
  },
  container2: {
    width: 400,
    paddingLeft: 20,
    height: 450,
    marginTop: 30,
    borderRadius: 40,
    paddingBottom: 30,
     backgroundColor: '#B6A07E'
   },
   container3: { 
    flex: 1, 
    flexDirection: 'row',  
    height: 120, 
    justifyContent: 'center',
    backgroundColor: 'black', 
    marginTop: 10, 
    borderRadius: 60,
    marginLeft: 10,
    padding: 10,
   },
   container4: {
    flex: 1, 
    flexDirection: 'row',  
    width: 200,
    paddingLeft: 10,
    height: 300,
    borderRadius: 40,
     backgroundColor: '#B6A07E'
   },
   card: {  
    height: 60, 
    width: 400,
    justifyContent: 'center',
    backgroundColor: 'black', 
    marginTop: 30, 
    borderRadius: 60,
    marginLeft: 10,
    padding: 10,
   },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20
  },
  fontText1: {
    fontFamily: 'OleoScript-Regular',
    fontSize: 40,
    textAlign: 'center',
    paddingLeft: 20,
    marginTop: 10
  },
  fontText2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    width: 300,
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 50,
    marginBottom: 10
  },
  fontText3: {
    fontFamily: 'OleoScript-Regular',
    fontSize: 30,
    paddingTop: 30,
    paddingLeft: 100,
    justifyContent: 'center'
  },
  CompButton: {
    height: 60, 
    width: 150,
    justifyContent: 'center',
    backgroundColor: 'white', 
    marginTop: 30, 
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 3,
    justifyContent: 'center',
    marginLeft: 10,
    paddingTop: 10,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 25,
    paddingLeft: 20
  },
  CompButton2: {
    height: 60, 
    width: 150,
    justifyContent: 'center',
    backgroundColor: 'white', 
    marginTop: 30, 
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 3,
    justifyContent: 'center',
    marginLeft: 10,
    paddingTop: 10,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 25,
    paddingLeft: 55
  }
});