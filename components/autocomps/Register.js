import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity , Button, ActivityIndicator, Image} from 'react-native';
import Dropdown from 'react-dropdown';
import loginIcon from '../../assets/enter.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 
import uploadToAnonymousFilesAsync from 'anonymous-files';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



export default function Register({navigation}) {

  const options = [
      'one', 'two', 'three'
    ];

    const defaultOption = options[0];

  const handleRegisterPress = () => {
      Alert.alert(email+ "" + username + " with password " + password + " registerd.")
      setLoading(true)

  }
  const [username, onUsernameChange] = useState("");
  const [email, onEmailChange] = useState("");
  const [password, onPasswordChange] = useState("");
  const [role, onRoleChange] = useState("");
  const [loading, setLoading] = useState(false);

return (
  <View style={styles.container}>
     
  <Text style={styles.fontText1}>Sign Up</Text>

  <View style={styles.container}>

    <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
        <Text style={styles.card}>Let's Go!</Text>
    </TouchableOpacity>  
  </View>
  
    <TextInput
        style={styles.input}
        placeholder = "Username"
        value={username}
        onChangeText={onUsernameChange}
        />
    <TextInput
        style={styles.input}
        placeholder = "Email"
        value={email}
        onChangeText={onEmailChange}
        />
    <TextInput
        style={styles.input}
        placeholder = "Password"
        value={password}
        onChangeText={onPasswordChange}
        secureTextEntry={true}
        />
    <TextInput
      style={styles.input}
      placeholder = "Role"
      value={role}
      onChangeText={onRoleChange}
      secureTextEntry={true}
      />


<View style={{ backgroundColor: '#E8D3B4', flexDirection: 'row', marginTop: -5}}>

<TouchableOpacity onPress={handleRegisterPress}>
  <View>
    <Text style={styles.fontText3 }>Sign Up</Text>
    <Image source={loginIcon} style={{width: 40, height: 40, marginTop: -40, marginLeft: 270, marginBottom: 100}}/>
    </View>
</TouchableOpacity>

</View>
</View>
);
function App({navigation}) {
  const Stack = createNativeStackNavigator();
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
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


    function Sharing({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
                  <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Repick a photo</Text>
      </TouchableOpacity>
                  <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
                 <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
              <Text style={styles.buttonText}>Who's Sharing</Text>
            </TouchableOpacity>
        </View>
      );
    }

    return (



<NavigationContainer style={styles.container}>
          
      <Stack.Navigator>
         <Stack.Screen name="Sharing" component={Sharing} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
 

       </NavigationContainer>

        

    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E8D3B4'
  },
  heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#E8D3B4',
      marginTop: 10
  },
  card:{
    width: '40%', 
    height: 120, 
    backgroundColor: '#E8D3B4', 
    marginTop: 10, 
    borderRadius: 60,
    marginLeft: 85,
    borderColor: 'black',
    borderWidth: 4,
    padding: 40,
},
  fontText1: {
    fontFamily: 'OleoScript-Regular',
    fontSize: 40,
    marginTop: -10
  },
  fontText2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    marginTop: 30,
    marginBottom: 10
  },
  fontText3: {
    fontFamily: 'OleoScript-Regular',
    fontSize: 30,
    marginTop: 80
  },
  input:{
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    marginBottom: 10,
    padding: 10,
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 20,
    marginTop: 15,
    paddingLeft: 20,
    marginBottom: 5
  },
  registerButton: {
      marginTop: 30,
      borderRadius: 30,
      backgroundColor:  '#E8D3B4',
      padding: 20,
      color: '#fff',
      textAlign: 'center'
  }
});
