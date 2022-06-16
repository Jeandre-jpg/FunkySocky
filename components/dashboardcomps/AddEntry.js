import { View, Text,StyleSheet,TextInput,Button,Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { addEntryToComp } from '../../Database'
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase';

export default function AddEntry({route, navigation}) {

  const id = route.params.id
  const [title, onChangeTitle] = useState()
  const [image, setImage]= useState('/')


const AddEntry = async() =>{
 // await handleImageUpload()
 addEntryToComp({title: title, imageUrl: image}, id)
 
}

// const handleImageUpload = async() =>{
// const imageRef = ref(storage, 'images/'+ title + id + ".jpg" )

// const blob = await new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     resolve(xhr.response);
//   };
//   xhr.onerror = function (e) {
//     console.log(e);
//     reject(new TypeError("Network request failed"));
//   };
//   xhr.responseType = "blob";
//   xhr.open("GET", image, true);
//   xhr.send(null);
// });
// await uploadBytes(imageRef, blob).then((snapshot) => {
//   getDownloadURL(snapshot.ref).then((url) => {
//       console.log(url)
//       addEntryToComp({title: title, imageUrl: url}, id)
//   })
//   .catch((error) => console.log(error))
// })
// .catch((error) => console.log(error))
// // We're done with the blob, close and release it
// blob.close();
// }

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


return (
  <View style={styles.container}>
    <Text style={styles.fontText1}>Add New Competition Entry</Text>
    <Text style={styles.fontText2}>Anything is worth it with funky sockies!</Text>

    <TextInput
    placeholder='Entry name'
    style={styles.input}
    onChangeText={onChangeTitle}
    value={title}
    />

    <Image source={{uri: image}} style={{height:300, borderColor:'#B6A07E', borderWidth:20, width:300, marginTop: 30, borderRadius: 40}}></Image>
    <TouchableOpacity style={styles.goButton} onPress={pickImage}>
      <Text style={styles.fontText3}>Upload an Entry</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.goButton2} onPress={AddEntry}>
      <Text style={styles.fontText3}>Submit an Entry</Text>
    </TouchableOpacity>
  </View>
)
};


const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
    paddingLeft: 20,
    width: "90%",
    borderColor: 'black'
},
input:{
  borderBottomColor: '#000000',
  borderBottomWidth: 2,
  width: 300,
  marginBottom: 10,
  padding: 10,
  fontFamily: 'Poppins-ExtraBold',
  fontSize: 20,
  marginTop: 15,
  paddingLeft: 20,
  marginBottom: 5
},
container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8D3B4',
    justifyContent: 'center',
    paddingTop: 150
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
      marginTop: 10
    },
    fontText3: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 15,
      width: 300,
      textAlign: 'center',
      color: "white"
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
    marginTop: 20, 
    padding: 15,
    flexDirection: 'row'
},
goButton2: {
  marginTop: 10,
  color: '#fff',
  marginBottom: 200,
  backgroundColor: 'black',
  textAlign: 'center',
  fontWeight: 'bold',
  width: 300, 
  borderRadius: 30,
  height: 50, 
  marginTop: 20, 
  padding: 15,
  flexDirection: 'row'
}
  })
