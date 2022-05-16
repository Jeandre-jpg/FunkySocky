import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity , Button, Image} from 'react-native';
import loginIcon from '../../assets/enter.png';

export default function Login() {

    const handleLoginPress = () => {
        Alert.alert(email+ " with password " + password + " logged in.")
    }
    const [email, onEmailChange] = useState("");
    const [password, onPasswordChange] = useState("");

  return (
    <View style={styles.container}>

        <Image
            style={{width: 50, height: 50, marginTop: 20, padding: 30}}
            source={loginIcon}
        />

      <Text style={styles.heading}>Login</Text>
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

    <TouchableOpacity onPress={handleLoginPress}>
        <View><Text style={styles.loginButton}>Login</Text></View>
    </TouchableOpacity>
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
      color: '#52307C',
      marginTop: 20
  },
  input:{
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
    paddingLeft: 20,
    borderColor: '#52307C',
    marginBottom: 10
  },
  loginButton: {
      marginTop: 30,
      borderRadius: 30,
      backgroundColor:  '#52307C',
      padding: 20,
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold'
  }
});
