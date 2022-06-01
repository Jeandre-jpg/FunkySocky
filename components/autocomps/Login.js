import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity , Button, Image} from 'react-native';
import loginIcon from '../../assets/enter.png';
import { auth } from '../../firebase';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function Login({navigation}) {

    const handleLoginPress = () => {

      

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            Alert.alert(user.uid);
          
        })
        .catch((error) => {
            Alert.alert(error.message);
           
        });
    }
    const [email, onEmailChange] = useState("");
    const [password, onPasswordChange] = useState("");

  return (
    
    <View style={styles.container}>

      <Text style={styles.fontText1}>Sign In</Text>
      <Text style={styles.fontText2}>Life is worth the living with a pair! So grab your funky sockies today.</Text>
     
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


<View style={{ backgroundColor: '#E8D3B4', flexDirection: 'row'}}>

    <TouchableOpacity onPress={handleLoginPress}>
        <View>
          <Text style={styles.fontText3 }>Sign In</Text>
          <Image source={loginIcon} style={{width: 40, height: 40, marginTop: -40, marginLeft: 270, marginBottom: 100}}/>
          </View>
    </TouchableOpacity>
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
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20
  },
  fontText1: {
    fontFamily: 'OleoScript-Regular',
    fontSize: 40,
    marginTop: 80
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
    fontSize: 30,
    marginTop: 40,
    paddingLeft: 20,
    marginBottom: 10
  },
  loginButton: {
      marginTop: 10,
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      width: 50, 
      height: 50, 
      marginTop: 20, 
      padding: 30,
      flexDirection: 'row'
  }
});
