import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export default function UserList({ navigation }) {

    const users = [
        {name: 'Armand', role: 'Lecturer'},
        {name: 'Isla', role: 'Student'},
        {name: 'Hansin', role: 'Student'},
        {name: 'Jeandrè', role: 'Student'},
        {name: 'Pieter', role: 'Student'},
        {name: 'Dylan', role: 'Student'},
        {name: 'Gordan', role: 'Student'}
    ]
    
const onSignOutPress = () => {
//success
        signOut(auth).then(() => {
            
        }).catch((error) => {
            Alert.alert(error.message);         
        })  
}

  return (
    <View>

        <Button title='Sign Out' onPress={onSignOutPress}/>

        <Text style={styles.heading}>All the users</Text>
        <ScrollView style={{paddingBottom: 130}}>
            {users. map((user, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate("Profile")}>
                <View key={index} style={styles.card}>
                    <Text style={{fontSize: 21}}>{user.name}</Text>
                    <Text>{user.role}</Text>
                </View>
            </TouchableOpacity>
            ))}
            
        </ScrollView>
                
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
      },
  heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'green',
      marginTop: 20
  }, 
  card:{
      padding: 20,
      backgroundColor: '#abd5ab',
      borderWidth: 1,
      padding: 10,
      marginTop: 20,
      borderRadius: 30
  }
});
