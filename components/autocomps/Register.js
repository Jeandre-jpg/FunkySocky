import loginIcon from '../../assets/enter.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity , Pressable, ActivityIndicator, Image, Dropdown, DropdownToggle, DropdownMenu} from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useTogglePasswordVisibility } from '../../assets/hooks/useToggleVisability';
import { createUserOnRegister } from '../../Database';

export default function Register({navigation}) {

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  useTogglePasswordVisibility();
  const [email, onEmailChange] = useState("");
  const [password, onPasswordChange] = useState('');
  const [username, onUsernameChange] = useState("");
  const [adminrole, onAdminRoleChange] = useState("");
  const [studentrole, onStudentRoleChange] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegisterPress = () => {

      setLoading(true)

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          Alert.alert(user.uid);
          createUserOnRegister(user, username)
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
     
      <View style={styles.inputContainer}>
       <TextInput
          style={styles.inputField}
                  name='password'
                  placeholder='Enter password'
                  autoCapitalize='none'
                  autoCorrect={false}
                  textContentType='newPassword'
                  secureTextEntry={passwordVisibility}
                  value={password}
                  enablesReturnKeyAutomatically
                  onChangeText={text => onPasswordChange(text)}
                />
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color='#232323' />
        </Pressable>
        </View>

<View style={{ backgroundColor: '#E8D3B4', flexDirection: 'row', marginTop: -5}}>

<TouchableOpacity onPress={handleRegisterPress}>
  <View>
    <Text style={styles.fontText3 }>Sign Up</Text>
    <Image source={loginIcon} style={{width: 40, height: 40, marginTop: -40, marginLeft: 270, marginBottom: 100}}/>
    </View>
</TouchableOpacity>
<ActivityIndicator animating={loading} size= "large" color= '#f5347F' />

</View>
<View>
          <Text style={styles.body}>Already have an account?</Text>  
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
            </View>

</View>
);

}




const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#E8D3B4'
  },
  heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#E8D3B4',
      marginTop: 10
  }, 
  link:{
    color:'blue',
    marginLeft:2,
    marginTop: -90,
    textDecorationLine: 'underline',
    fontFamily: 'Montserrat-Regular'
  },
  body:{
    marginTop: -40,
    paddingBottom: 20,
    marginLeft:2,
    height: 120,
    fontFamily: 'Montserrat-Regular'
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
inputCon1: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 1,
  marginTop: -50
},
inputContainer1: {
  backgroundColor: '#E8D3B4',
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center'
},
inputCon: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 1,
  marginTop: 10
},
inputContainer: {
  backgroundColor: '#E8D3B4',
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center'
},
inputField: {
  borderBottomColor: '#000000',
  borderBottomWidth: 2,
  marginBottom: 10,
  padding: 10,
  fontFamily: 'Poppins-ExtraBold',
  fontSize: 30,
  marginTop: 40,
  paddingLeft: 20,
  marginBottom: 10,
  width: '90%'
},
  fontText1: {
    fontFamily: 'OleoScript-Regular',
    fontSize: 40,
    marginTop: 40
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
      marginTop: 10,
      borderRadius: 30,
      backgroundColor:  '#E8D3B4',
      color: '#fff',
      textAlign: 'center'
  }
});