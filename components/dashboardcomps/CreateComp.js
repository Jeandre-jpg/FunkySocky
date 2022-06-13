import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { newComp } from '../../Database'
import { auth } from '../../firebase'
import designIcon from '../../assets/socksUpload.png';
import * as ImagePicker from 'expo-image-picker';


export const CreateComp = ({navigation}) => {
    
    
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [mode, setMode] = useState("")
    const [image, setImage] = useState("/")

    const addCompetition = async() =>{
        await handleImageUpload()
    }

    const pickImage = async () => {
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
  

    const handleImageUpload = async() =>{
        const image = ref(storage, 'images/'+ title+'sokkies'+ Timestamp.fromDate(new Date()) + ".jpg" )
     
       
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
     
       
     
     
        await uploadBytes(image, blob).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              console.log(url)
     
                  const newDocRef = doc(collection(db, "comps"));
                   setDoc(
                         newDocRef,
                         {
                            title: title,
                            Description:description,
                            mode:mode,
                            image:url,
                            id: newDocRef.id
      
                         }
                     )
     
                  })
             
             .catch((error) => console.log(error))
         })
    .catch((error) => console.log(error))
        // We're done with the blob, close and release it
        blob.close();
        navigation.pop();
        }
    

    

    const saveComp = async () => {

        const data ={
            name: name,
            description: description,
            mode: mode,
            image: image,
            userId: auth.currentUser.uid
        }

        console.log(data);
        await newComp(data);

        navigation.goBack()
    }

  return (
    <View style={styles.container}>
        <Text style={styles.fontText1}>Create a Competition</Text>
        <View style={styles.container2}>
 <Text style={styles.fontText2}>
       This Sock Contest is an annual competition where we invite you to share your amazing art and tell us what should go on our next great sock!
  </Text>
  
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name of Competition"
      />
    <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Description of Competition"
      />
      <TextInput
        style={styles.input}
        onChangeText={setMode}
        value={mode}
        placeholder="Mode of Competition"
      />
             
   
     <TouchableOpacity onPress={pickImage}>
          <Image source={designIcon} style={styles.thumbnail}/>
    </TouchableOpacity>
     <Text style={styles.fontText1}>Upload Design</Text>
     <View style={styles.container3}>
     <TouchableOpacity  onPress={saveComp}>
                <Text style={styles.fontText2}>Create Competition</Text>             
     </TouchableOpacity>
     </View>
  </View>
    </View>
  )
}

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