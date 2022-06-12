import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Alert, Pressable, TextInput, TouchableOpacity , Button, Image} from 'react-native';
import loginIcon from '../../assets/enter.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from '../../firebase';
import { useTogglePasswordVisibility } from '../../assets/hooks/useToggleVisability';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function Login({navigation}) {

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
    const [email, onEmailChange] = useState("");
    const [password, onPasswordChange] = useState('');


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
  
   
  return (

    <View style={styles.container}>

      <Text style={styles.fontText1}>Sign In</Text>
      <Text style={styles.fontText2}>Life is worth the living with a pair! So grab your funky sockies today.</Text>
      <View style={styles.inputCon1}>
      <View style={styles.inputContainer1}>
      <TextInput
          style={styles.input}
          placeholder = "Email"
          value={email}
          onChangeText={onEmailChange}
          />
          </View>
     </View>

           <View style={styles.inputCon}>
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
     </View>


<View style={{ backgroundColor: '#E8D3B4', flexDirection: 'row'}}>

    <TouchableOpacity onPress={handleLoginPress}>
        <View>
          <Text style={styles.fontText3 }>Sign In</Text>
          <Image source={loginIcon} style={{width: 40, height: 40, marginTop: -40, marginLeft: 270, marginBottom: 50}}/>
          </View>
    </TouchableOpacity>   
    </View>
    <View>
          <Text style={styles.body}>Don't have an account?</Text>  
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.link}>Register</Text>
            </TouchableOpacity>
            </View>

      </View>
         );
        }

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E8D3B4',
    height: 850,
    marginBottom: 100
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
    marginTop: -100
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
    width: "90%",
    paddingLeft: 20,
    marginBottom: 10
  },
  loginButton: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      width: 50, 
      height: 50, 
      flexDirection: 'row'
  }
});