import React, { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native';
import { Button, Image, Alert, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import profile from '../../assets/user.png';
import comps from '../../assets/medal.png';
import product from '../../assets/lamp.png';
import design from '../../assets/edit.png';
import add from '../../assets/add.png';
import AuthTabs from '../autocomps/AuthTabs';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

import Profile from './UserDetail';
import Competitions from './CompList';
import Design from './DesignComp';
import Product from './ProductDetail';
import Splash from '../autocomps/Splash';

// React.useLayoutEffect(() => {
//   navigation.setOptions({headerShown: false});
// }, [navigation]);

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function UserStack() {

  const [loggedIn, setLoggedIn] = useState (false);

  

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              setLoggedIn(true);
          } else {
            setLoggedIn(false);
          }
      })
      return unsubscribe;
  }, []);

  return (

    <Tab.Navigator options={{headerShown: false}} style={{backgroundColor: "#E8D3B4"}}

        screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

           if (route.name === "Competitions"){
            iconName = focused
                return <Image source={comps} style={{width: 20, height: 20}}/>
           }else if (route.name === "Profile"){
               return <Image source= {profile} style={{width: 20, height: 20}}/>
          } else if (route.name === "Design"){       
              return <Image source= {design} style={{width: 20, height: 20}}/>
          } else if (route.name === "Product"){       
            return <Image source= {product} style={{width: 20, height: 20}}/>
          }

       },
       tabBarActiveTintColor: 'black'
   })}>
      {loggedIn ? (
        <>
         <Tab.Screen name="Competitions" component={Competitions}options={{title: "Competitions", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}></Tab.Screen>
        <Tab.Screen name="Product" component={Product}options={{title: "Product", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}></Tab.Screen>
        <Tab.Screen name="Design" component={Design}options={{title: "Design", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}></Tab.Screen>
        <Tab.Screen name="Profile" component={Profile} options={{title: "Profile", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}></Tab.Screen>
       
     
      
      </>
      ): (
        <>
         <Tab.Screen name="AuthTabs" component={AuthTabs} options={{title: "AuthTabs", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}></Tab.Screen>
         <Tab.Screen name =" " component={Splash} options={{headerShown: false}} style={{backgroundColor: "#E8D3B4"}}/>
        </>
       
        
       
        )}
   </Tab.Navigator>
   
  );
}

const styles = StyleSheet.create({
  container: {
      padding: 20
    },
heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20
}, 
Navbar:{
  padding: 20,
    backgroundColor: '#abd5ab',
    borderWidth: 1
},
card:{
    padding: 20,
    backgroundColor: '#abd5ab',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    borderRadius: 30
}
});
