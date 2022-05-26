import loginIcon from '../../assets/enter.png';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity , Button, ActivityIndicator, Image} from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Register({navigation}) {

  const [username, onUsernameChange] = useState("");
  const [email, onEmailChange] = useState("");
  const [password, onPasswordChange] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegisterPress = () => {

      setLoading(true)

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          Alert.alert(user.uid);
          setLoading(false)
      })
      .catch((error) => {
          Alert.alert(error.message);
          setLoading(false)
      });

      

  }
 



return (
  <View style={styles.container}>
     
  <Text style={styles.fontText1}>Sign Up</Text>

  <View style={styles.container}>

    <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.button}>
        <Text style={styles.card}>Let's Go!</Text>
    </TouchableOpacity>  
  </View>
  
  <TextInput
          style={styles.input}
          placeholder = "Your Username"
          value={username}
          onChangeText={onUsernameChange}
          />
      <TextInput
          style={styles.input}
          placeholder = "Your Email"
          value={email}
          onChangeText={onEmailChange}
          />
      <TextInput
          style={styles.input}
          placeholder = "Your Password"
          value={password}
          onChangeText={onPasswordChange}
          secureTextEntry={true}
    />

<View style={{ backgroundColor: '#E8D3B4', flexDirection: 'row', marginTop: -5}}>

<TouchableOpacity onPress={handleRegisterPress}>
  <View>
    <Text style={styles.fontText3 }>Sign Up</Text>
    <Image source={loginIcon} style={{width: 40, height: 40, marginTop: -40, marginLeft: 270, marginBottom: 100}}/>
    </View>
</TouchableOpacity>
<ActivityIndicator animating={loading} size= "large" color= '#f5347F' />
</View>
</View>
);

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
