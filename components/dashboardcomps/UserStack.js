import React from 'react';
import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './UserList';
import UserDetail from './UserDetail';
import AuthTabs from '../autocomps/AuthTabs';

const Stack = createNativeStackNavigator();

export default function UserStack() {


  return (
   
       <Stack.Navigator initialRouteName='Authentication'>
           <Stack.Screen name ="Profile" component={UserDetail} initialParams={{ name: "No User found", role: "Unknown"}}/>
           <Stack.Screen name ="User1" component={UserList}/>
           <Stack.Screen name ="Authentication" component={AuthTabs} options={{headerShown: false}}/>
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
card:{
    padding: 20,
    backgroundColor: '#abd5ab',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    borderRadius: 30
}
});
