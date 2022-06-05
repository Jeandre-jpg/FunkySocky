
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import landing from '../../assets/landing.jpeg';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import Login from './Login';
import Register from './Register';


const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  
  function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;
  

// export default function Splash({ navigation }) {

//   return (
//     <View style={styles.container}>
//           <Text style={styles.fontText1}>Welcome fellow Funky Socky!</Text>
//           <Image source={landing} style={styles.card}></Image>
//           <Text style={styles.fontText2}>Life is worth the living with a pair! So grab your funky sockies today.</Text>
//           <TouchableOpacity  onPress={() => navigation.navigate('AuthTabs')}>
//             <Text style={styles.goButton}>Let's go!</Text>
//         </TouchableOpacity>
//     </View>
//   );
// }




// export function AuthTabs() {


//   return (
    
//     <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//                if (route.name === "Login"){
//                 iconName = focused
//                     return <Image source={login} style={{width: 20, height: 20}}/>
//                }else {
                   
//                    return <Image source= {regs} style={{width: 20, height: 20}}/>
//            } 

//            },
//            tabBarActiveTintColor: 'black'
//        })}>
//           <Tab.Screen name="Login" component={Login} options={{title: "Sign In", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}></Tab.Screen>
//           <Tab.Screen name="Register" component={Register} options={{title: "Sign Up", headerTintColor: '#E8D3B4', headerStyle: {backgroundColor: '#E8D3B4'}, headerRight: () => (
//               <Button 
//               title='info'
//               color='#fff'
//               onPress={() => Alert.alert("This is Funky Socky")}
//               />
              
//           ),
//           headerLeft: () => {
//               <Text style={{color: '#fff', padding: 5}}>Join us, or else...</Text>
//           }
//           }
//           }></Tab.Screen>
//        </Tab.Navigator>
       
//   );
// }
// const styles = StyleSheet.create({
//     container: {
//       height: 900,
//       paddingTop: 100,
//       backgroundColor: '#E8D3B4'
//     },
//     card:{
//         width: 320, 
//         height: 300, 
//         marginTop: 60, 
//         paddingBottom: 40,
//         marginLeft: 30,
//         padding: 20,
//     },
//     fontText1: {
//       paddingLeft: 20,
//       fontFamily: 'OleoScript-Regular',
//       fontSize: 40,
//       marginTop: 10
//     },
//     fontText2: {
//       fontFamily: 'Montserrat-Regular',
//       fontSize: 15,
//       width: 300,
//       textAlign: 'left',
//       marginTop: 30,
//       marginLeft: 30
//     },
//     goButton: {
//         marginTop: 50,
//         color: '#fff',
//         backgroundColor: 'black',
//         textAlign: 'center',
//         fontWeight: 'bold',
//         width: 300, 
//         borderRadius: 30,
//         height: 50, 
//         marginLeft: 30,
//         marginTop: 20, 
//         padding: 15,
//         flexDirection: 'row'
//     }
//   });
  