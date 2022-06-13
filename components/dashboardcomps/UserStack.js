import React, { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthTabs from '../autocomps/AuthTabs';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import Splash from '../autocomps/Splash';
import Login from '../autocomps/Login';
import Register from '../autocomps/Register';
import CompDetail from './CompDetail';
import AddEntry from '../dashboardcomps/AddEntry';

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

    <Stack.Navigator>
    {!loggedIn ? ( 
      <>
            <Stack.Screen name ="Splash" component={Splash} options={{headerShown: false}} style={{backgroundColor: "#E8D3B4"}}/>
             <Stack.Screen name ="Login" component={Login} options={{headerShown: false}} style={{backgroundColor: "#E8D3B4"}}/>
             <Stack.Screen name ="Register" component={Register} options={{headerShown: false}} style={{backgroundColor: "#E8D3B4"}}/>
    
      </>
    ):(
      <>
     <Stack.Screen name="Authentication" component={AuthTabs} options={ {headerShown: false}} />
     <Stack.Screen name="CompDetail" component={CompDetail} options={ {headerShown: false}} />
     <Stack.Screen name="AddEntry" component={AddEntry} options={ {headerShown: false}} />
      </>
      )}
    </Stack.Navigator>
   
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
