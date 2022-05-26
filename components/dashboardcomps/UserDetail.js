import React from 'react';
import { StyleSheet, Text, Button, SafeAreaView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



export default function UserStack({ route, navigation }) {

    const currentProfile = route.params;

  return (
   
    

    //       <Button title="Again!" color="#841584" onPress={() => navigation.push("Profile", currentProfile)} />

    //       <Button title="GO BACK" color="red" onPress={() => navigation.goBack()} />

    //       <Button title="GO TO TOP" color="orange" onPress={() => navigation.popToTop()} />
    // </SafeAreaView>
       


<SafeAreaView style={styles.container}>
    
    

{/* <Text style={styles.heading}>{currentProfile.name}</Text>
<Text style={styles.subheading}>{currentProfile.role}</Text> */}
<Text style={styles.subheading3}>Life is worth the living with a pair! So grab your funky sockies today.</Text> 
<Text style={styles.subheading2}>What's going on</Text> 


<SafeAreaView style={styles.container2}>

  <SafeAreaView style={styles.view}>
  <Text style={styles.heading2}>Current Competition Entries</Text> 
  </SafeAreaView>
</SafeAreaView>


<SafeAreaView style={styles.container3}>
  
<SafeAreaView style={styles.view}>
  <Text style={styles.heading2}>Current Engagement</Text>
</SafeAreaView>
</SafeAreaView>

</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
  paddingTop: 10,
  backgroundColor: '#ffffff',
  paddingBottom: 250
},
container2: {
flex: 1, 
flexDirection: 'row',  
backgroundColor: '#ffffff'
},
container3: {
flex: 1, 
flexDirection: 'row',  
backgroundColor: '#ffffff',
marginTop: 140
},
view: {
width: '42%', 
height: 120, 
backgroundColor: '#ffffff', 
marginTop: 20, 
marginLeft: 20, 
borderRadius: 10,
shadowRadius: 1,
shadowOpacity: 0.1
},
image: {
width: 150, 
height: 150, 
borderRadius:60,  
marginTop: 30, 
marginLeft: 130
},
image2: {
width: '50%', 
height: '60%' , 
marginTop: 10, 
marginLeft: '40%'  
},
image3: {
width: '50%', 
height: '68%' , 
marginTop: 5, 
marginLeft: '40%'  
},
heading: {
fontSize: 25, 
fontWeight:'bold', 
marginTop: 30,
marginLeft: 30, 
textAlign: 'center'
},
heading2:{
fontSize: 15, 
fontWeight:'300', 
marginTop: 15, 
color: '#000000', 
textAlign: 'left', 
marginLeft: 10 
},
subheading:{
fontSize: 13, 
fontWeight: '200', 
marginTop: 10, 
marginLeft: 30, 
textAlign: 'center'
},
subheading2:{
fontSize: 13, 
fontWeight: '200', 
marginTop: 15, 
marginLeft: 30, 
textAlign: 'left'
},
subheading3: {
fontSize: 15, 
fontWeight: '300', 
marginTop: 15,
marginLeft: 30,
marginRight: 30
},
button: {
backgroundColor: "blue",
padding: 20,
marginTop: 50,
borderRadius: 5,
},
buttonText: {
fontSize: 20,
color: '#fff',
}
});