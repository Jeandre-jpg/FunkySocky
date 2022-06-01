import React, { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native';
import { Button, Image, Alert, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CompList from './CompList';
import UserDetail from './UserDetail';
import profile from '../../assets/user.png';
import comps from '../../assets/medal.png';
import product from '../../assets/lamp.png';
import design from '../../assets/edit.png';
import AuthTabs from '../autocomps/AuthTabs';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

import Profile from './UserDetail';
import Competitions from './CompList';
import Design from './DesignComp';
import Product from './ProductDetail';

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

    <Tab.Navigator initialRouteName='Navbar'

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
        <Tab.Screen name ="Navbar" component={AuthTabs} options={{headerShown: false}}/>
        )}
   </Tab.Navigator>
   
    // <Stack.Navigator initialRouteName='Authentication'>
    // {loggedIn ? (
    //  <>
    //        <Stack.Screen name ="Users" component={CompList}/>
    //        <Stack.Screen name ="Profile" component={UserDetail} initialParams={{ name: "No User found", role: "Unknown"}}/>
    //        </>
    //      ): (
    //        <Stack.Screen name ="Authentication" component={AuthTabs} options={{headerShown: false}}/>
    //        )}
    //    </Stack.Navigator>
       
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
