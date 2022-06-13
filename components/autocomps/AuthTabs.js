import React from 'react';
import { Button, Image, Alert, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from '../../assets/login_icon.png';
import regs from '../../assets/enter.png';
import profile from '../../assets/user.png';
import comps from '../../assets/medal.png';
import product from '../../assets/lamp.png';
import design from '../../assets/edit.png';
import addnew from '../../assets/add.png';
import Profile from '../dashboardcomps/UserDetail';
import Competitions from '../dashboardcomps/CompList';
import ScoreBoard from '../dashboardcomps/ScoreBoard';
import { CreateComp } from '../dashboardcomps/CreateComp';
import CompDetail from '../dashboardcomps/CompDetail';
import AddEntry from '../dashboardcomps/AddEntry';

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
         }else if (route.name === "Competitions"){
          return <Image source= {comps} style={{width: 20, height: 20}}/>
        }else if (route.name === "Score Board"){
          return <Image source= {product} style={{width: 20, height: 20}}/>
         } else if (route.name === "Profile"){
          return <Image source= {profile} style={{width: 20, height: 20}}/>
        } else if (route.name === "Create Competition"){
          return <Image source= {addnew} style={{width: 20, height: 20}}/>
        }
        // } else if (route.name === "AddEntry"){
        //   return <Image source= {design} style={{width: 20, height: 20}}/>
        // } else if (route.name === "CompDetail"){
        //   return <Image source= {design} style={{width: 20, height: 20}}/>
        // }
       },
       tabBarActiveTintColor: 'black'
   })}>

      
<Tab.Screen name="Competitions" component={Competitions}options={{title: "Competitions", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}/>
      <Tab.Screen name="Score Board" component={ScoreBoard}options={{title: "Score Board", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}/>
      <Tab.Screen name="Profile" component={Profile} options={{title: "Profile", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}/>
      <Tab.Screen name="Create Competition" component={CreateComp} options={{title: "Create Competition", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}/>
      {/* <Tab.Screen name="AddEntry" component={AddEntry} options={{title: "AddEntry", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}/>
      <Tab.Screen name="CompDetail" component={CompDetail} options={{title: "CompDetail", headerTintColor:"#E8D3B4", headerStyle: {backgroundColor: '#E8D3B4'}}}/> */}
    </Tab.Navigator>    

  );
}