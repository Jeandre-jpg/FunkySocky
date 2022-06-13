import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, SafeAreaView} from 'react-native';
import { getAllComp } from '../../Database';
import { useFocusEffect } from '@react-navigation/native'
import { onSnapshot } from 'firebase/firestore';
import socksIcon from '../../assets/sock.png';
import compIcon from '../../assets/comp1.jpeg';

export default function CompDetail({ navigation }) {

    const peers = [
        {name: 'Bob', role: 'Open'}
    ]

    const [comps, setComps]= useState([]);


    useFocusEffect(
      React.useCallback(() => {
        // Do something when the screen is focused
        const collectionRef = getAllComp()
  
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
            let compsData = []
            snapshot.forEach((doc) => {
  
                let comp = {
                    ...doc.data(),
                    id: doc.id,
                }
  
  
                compsData.push(comp)
            })
  
            console.log(compsData)
            setComps(compsData)
        })
  
        return () => {
          unsubscribe();
      };
  }, [])
  );
    

  return (

<View style={styles.container}>
        <ScrollView style={{paddingBottom: 130}}>
            {comps. map((comps, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('CompDetail')}>
                <View key={index}>
                    <View style={styles.container2}>
                        <Image source={{uri: comps.image}} style={{width: '100%', height: "100%", marginTop: 10}}/>
                        </View>
                        <Text style={styles.fontText1}>{comps.name}</Text>
                        <SafeAreaView style={styles.card}>
                            <Text style={{color: 'white', fontFamily: 'OleoScript-Regular', fontSize: 20, paddingLeft: 20}}>About</Text>
                        </SafeAreaView>
                        <Text style={styles.fontText2}>{comps.description}</Text>
                        <View  style={styles.CompButton}>
                            <Text>{comps.mode}</Text>
                        </View>
                        <SafeAreaView style={styles.card}>
                            <Text style={{color: 'white', fontFamily: 'OleoScript-Regular', fontSize: 20, paddingLeft: 20}}>Enter competition</Text>
                        </SafeAreaView>
                    </View>
                    <TouchableOpacity  onPress={() => navigation.navigate('AddEntry')}>
                        <Text style={styles.goButton}>Let's go!</Text>
                    </TouchableOpacity>
                    </TouchableOpacity>
            ))}
          </ScrollView>
          </View>
      
  );
}
const styles = StyleSheet.create({
    container: {
      height: 900,
      backgroundColor: '#E8D3B4'
    },
      container2: {
        width: 400,
        height: 400,
        flex: 1,
        padding: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#B6A07E',
        borderRadius: 40
        },
    card: {  
        height: 60, 
        width: 400,
        justifyContent: 'center',
        backgroundColor: 'black', 
        marginTop: 10, 
        borderRadius: 60,
        marginLeft: 10,
        padding: 10,
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
    CompButton: {
        height: 60, 
        width: 100,
        justifyContent: 'center',
        backgroundColor: 'white', 
        marginTop: 10, 
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 3,
        justifyContent: 'center',
        marginLeft: 10,
        color: '#fff',
        fontFamily: 'Montserrat-Regular',
        fontSize: 25,
        paddingLeft: 20
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
  