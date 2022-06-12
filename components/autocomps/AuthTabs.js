import React from 'react';
import { Button, Image, Alert, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from '../../assets/login_icon.png';
import regs from '../../assets/enter.png';
import Profile from '../dashboardcomps/UserDetail';
import Competitions from '../dashboardcomps/CompList';
import Design, { AddEntry } from '../dashboardcomps/AddEntry';
import Product from '../dashboardcomps/ProductDetail';
import { CreateComp } from '../dashboardcomps/CreateComp';

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

        
      <Tab.Screen name="Competitions" component={Competitions}options={{title: "Competitions", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}/>
      <Tab.Screen name="Product" component={Product}options={{title: "Product", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}/>
      <Tab.Screen name="Design" component={AddEntry}options={{title: "Design", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}/>
      <Tab.Screen name="Profile" component={Profile} options={{title: "Profile", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}/>
      <Tab.Screen name="New" component={CreateComp} options={{title: "New", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}/>
      </Tab.Navigator>   

  );
}