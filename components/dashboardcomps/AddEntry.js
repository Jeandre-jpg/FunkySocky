import React from 'react';
import { StyleSheet} from 'react-native';
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

           <TextInput
           style={styles.input}
           onChangeText={setDescription}
           value={description}
           placeholder='Entry description'
           keyboardType='default'>
           </TextInput>

           <TextInput
           style={styles.input}
           onChangeText={setMode}
           value={mode}
           placeholder='Entry mode'
           keyboardType='default'>
           </TextInput>

           <Image source={{uri: image}} style={{height: 300, aspectRatio: 'fit'}}></Image>
           <Button title='Upload Entry Image' color="red" onPress={pickImage}></Button>
           <Button title='Save' color="purple" onPress={AddEntry}></Button>
       </View>
    )
}

export default AddEntry

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
