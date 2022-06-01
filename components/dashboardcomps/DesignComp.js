import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, Button, SafeAreaView, View, TouchableOpacity, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import designIcon from '../../assets/socksUpload.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 
import addIcon from '../../assets/add.png';
import uploadToAnonymousFilesAsync from 'anonymous-files'; 

export default function DesignComp({navigation}) {

  const Stack = createNativeStackNavigator();

  const competitions = [
    {name: 'Spring Hickety', role: 'Open'}
  ]
  

  const [selectedImage, setSelectedImage] = React.useState(null);


  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

 
    if (pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    } 
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
      return;
    }

    Sharing.shareAsync(selectedImage.remoteUri || selectedImage.localUri);
  
  }; 
  
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />

      
        <View style={styles.container5}>
          {competitions. map((competition, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate("Product")}>
                <View key={index} style={styles.card}>
                    <Text style={{color: 'white', fontFamily: 'OleoScript-Regular', fontSize: 40, paddingLeft: 20}}>{competition.name}</Text>
                </View>
                </TouchableOpacity>
                      
            ))}

      <Text style={styles.heading2}>
      This Sock Contest is an annual competition where we invite you to share your amazing art and tell us what should go on our next great sock!
      </Text>

      <View style={styles.card2}>
                    <Text style={{color: 'white', fontFamily: 'OleoScript-Regular', fontSize: 20, paddingLeft: 20}}>Receive Notifications</Text>
                </View>
              

            <TouchableOpacity onPress={() => navigation.navigate("Sucess")}>
                <View style={styles.CompButton}>
                <Text style={styles.fontText4}>Submit Entry</Text>
                </View>
                </TouchableOpacity>
                
        
         
     </View>
    
        </View>
    );
  }
  
  
      return (
        <View style={styles.container}>
        <Image source={designIcon} style={{width: 150, height: 150, justifyContent: 'center', marginLeft: 10, marginTop: 50}}/>
        <Text style={styles.fontText1}>Upload Design</Text>
        <Text style={styles.fontText2}>
      To share a photo for your profile, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.CompButton}>
        <Text style={styles.fontText3}>Pick a Design</Text>
      </TouchableOpacity>




  
    </View>
  
  
  
  
  );
  
  
  }
     
      
  
  
  
  
  
  
  const styles = StyleSheet.create({
  
    container: {
      flex: 1, alignItems: 'center', justifyContent: 'center',
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
     container5: {
      flex: 1, alignItems: 'center', justifyContent: 'center',
      width: 400,
      paddingLeft: 20,
      height: 500,
      borderRadius: 40,
      paddingBottom: 30,
      backgroundColor: '#E8D3B4',
      justifyContent: 'center',
      backgroundColor: 'black'
     },
     card: {  
      height: 90, 
      width: 400,
      justifyContent: 'center',
      marginTop: 30, 
      borderRadius: 60,
      marginLeft: 10,
      padding: 10,
     },
     card2: {  
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
      fontSize: 15,
      color: '#000000',
      fontFamily: 'Montserrat-Regular',
      marginTop: 20,
      width: 320,
      marginLeft: 20
    },
    heading2: {
      fontSize: 15,
      color: 'white',
      fontFamily: 'Montserrat-Regular',
      marginTop: 20,
      width: 320,
      marginLeft: 20
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
      marginLeft: 10,
      marginBottom: 10
    },
    fontText3: {
      fontFamily: 'OleoScript-Regular',
      fontSize: 25,
      paddingTop: -20,
      paddingLeft: -10,
      justifyContent: 'center'
    },
    fontText4: {
      fontFamily: 'OleoScript-Regular',
      fontSize: 20,
      paddingLeft: -50,
      paddingTop: -20,
    },
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: "contain"
    },
    CompButton: {
      height: 60, 
      width: 160,
      justifyContent: 'center',
      backgroundColor: 'white', 
      marginTop: 30, 
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
  
   
    



