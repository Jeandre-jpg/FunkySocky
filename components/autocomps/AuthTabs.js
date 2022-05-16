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
           tabBarActiveTintColor: 'tomato'
       })}>
          <Tab.Screen name="Login" component={Login} options={{title: "Welcome", headerTintColor:"#fff", headerStyle: {backgroundColor: '#52307c'}}}></Tab.Screen>
          <Tab.Screen name="Register" component={Register} options={{title: "Join Us", headerTintColor: '#fff', headerStyle: {backgroundColor: '#f5347f'}, headerRight: () => (
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