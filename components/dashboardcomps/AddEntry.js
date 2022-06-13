import React from 'react';
import { StyleSheet, View, Text, Image, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import addEntryToComp from '../../Database';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../firebase';
import { getDownloadURL, uploadBytes } from 'firebase/storage';

const AddEntry = ({route, navigation}) => {
 

  const id = route.params.id
  const [title, onChangeTitle] = React.useState('')
  const [image, setImage] = React.useState("/")

  const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    }; 

  const AddEntry = async() => {
      let imageUrl = await handleImageUpload()
      addEntryToComp({title, imageUrl}, id)
  }

  const handleImageUpload = async() => {
      const imageRef = ref(storage, '/images/' + title + id + '.jpg')

      const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function () {
            resolve(xhr.response);
          };
          xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("Network request failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", image, true);
          xhr.send(null);
        });

        await uploadBytes(imageRef, blob).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
              console.log(url)
              addEntryToComp({title: title, imageUrl: url}, id)
          })
          .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))
// We're done with the blob, close and release it
      blob.close();
  }


    return(
      <View style={styles.container}>
       <View>
           <Text>Add Entry</Text>
           <Text>{id}</Text>

           <TextInput
        style={styles.input}
           onChangeText={onChangeTitle}
           value={title}
           placeholder='Entry Title'
           keyboardType='default'>
           </TextInput>

         

           <Image source={{uri: image}} style={{height: 300, aspectRatio: 'fit'}}></Image>
           <Button title='Upload Entry Image' color="red" onPress={pickImage}></Button>
           <Button title='Save' color="purple" onPress={AddEntry}></Button>
       </View>
       </View>
    )
}

export default AddEntry

const styles = StyleSheet.create({
  input: {
      borderWidth: 2,
      padding: 10,
      marginTop: 20,
      borderRadius: 30,
      paddingLeft: 20,
      width: 200,
      borderColor: 'black'
  },
  container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E8D3B4',
      justifyContent: 'center',
      paddingTop: 30
    },
    container2: {
      width: 400,
      height: 600,
      justifyContent: 'center',
      marginTop: 30,
      padding: 40,
      borderRadius: 40,
       backgroundColor: '#B6A07E'
     },
     container3: { 
      height: 50, 
      width: 300,
      justifyContent: 'center',
      backgroundColor: 'white', 
      marginTop: 10, 
      color: 'black',
      borderRadius: 60,
      marginLeft: 20,
      padding: 30,
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
      marginBottom: 10,
      color: 'black'
    },
    fontText3: {
      fontFamily: 'OleoScript-Regular',
      fontSize: 25,
      justifyContent: 'center',
      color: 'white'
    },
      thumbnail: {
      width: 150,
      height: 150,
      marginLeft: 100,
      resizeMode: "contain",
      paddingTop: 10
    },
    CompButton: {
      height: 60, 
      width: 160,
      marginLeft: 20,
      justifyContent: 'center',
      backgroundColor: 'white', 
      marginTop: 30, 
      borderRadius: 20,
      borderColor: 'black',
      borderWidth: 3,
      justifyContent: 'center',
      marginLeft: 10,
      color: 'white',
      fontFamily: 'Montserrat-Regular',
      fontSize: 25,
      paddingLeft: 20
    }
})