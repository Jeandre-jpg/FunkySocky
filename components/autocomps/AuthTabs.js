import React from 'react';
import { Button, Image, Alert, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from '../../assets/enter.png';
import regs from '../../assets/regs.png';


import Login from './Login';
import Register from './Register';


const Tab = createBottomTabNavigator();

export default function AuthTabs() {


  return (
    
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

               if (route.name === "Login"){
                iconName = focused
                    return <Image source={login} style={{width: 20, height: 20}}/>
               }else {
                   
                   return <Image source= {regs} style={{width: 20, height: 20}}/>
           } 

           },
           tabBarActiveTintColor: 'black'
       })}>
          <Tab.Screen name="Login" component={Login} options={{title: "Sign In", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}></Tab.Screen>
          <Tab.Screen name="Register" component={Register} options={{title: "Sign Up", headerTintColor: '#E8D3B4', headerStyle: {backgroundColor: '#E8D3B4'}, headerRight: () => (
              <Button 
              title='info'
              color='#fff'
              onPress={() => Alert.alert("This is Funky Socky")}
              />
              
          ),
          headerLeft: () => {
              <Text style={{color: '#fff', padding: 5}}>Join us, or else...</Text>
          }
          }
          }></Tab.Screen>
       </Tab.Navigator>
       
  );
}