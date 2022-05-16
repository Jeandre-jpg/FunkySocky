import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity , Button, ActivityIndicator, Image} from 'react-native';
import Dropdown from 'react-dropdown';


export default function Register() {

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
    const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>

        <Image
        style={{width: 50, height: 50, marginTop: 20, padding: 30}}
        source={{uri:"https://img.icons8.com/pastel-glyph/100/000000/add-user-male--v2.png"}}
        />

        
      <Text style={styles.heading}>Register</Text>
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

 
    <TouchableOpacity onPress={handleRegisterPress}>
        <View><Text style={styles.registerButton}>Register</Text></View>
    </TouchableOpacity>

    <ActivityIndicator animating={loading} size= "large" color= '#f5347F' />
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
      color: '#f5347F',
      marginTop: 20
  },
  input:{
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
    paddingLeft: 20,
    borderColor: '#f5347F',
    marginBottom: 10
  },
  registerButton: {
      marginTop: 30,
      borderRadius: 30,
      backgroundColor:  '#f5347F',
      padding: 20,
      color: '#fff',
      textAlign: 'center'
  }
});
