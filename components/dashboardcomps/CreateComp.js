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
 <Text style={styles.heading2}>
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
             <TouchableOpacity  onPress={saveComp}>
                <View style={styles.CompButton}>
                <Text style={styles.fontText4}>Submit Entry</Text>
              </View>  
     </TouchableOpacity>
        {/* <Image source={designIcon} style={{width: 50, height: 50, justifyContent: 'center', marginLeft: 10, marginTop: 50}}/> */}
     <Text style={styles.fontText1}>Upload Design</Text>
      <TouchableOpacity onPress={pickImage}>
          <Image source={{uri: image}} source={designIcon} style={styles.thumbnail}/>
    </TouchableOpacity>
   
  
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
        borderColor: '#FFE5B4'
    },
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#E8D3B4',
        justifyContent: 'center',
        paddingTop: 300
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
        marginTop: 50, 
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
})