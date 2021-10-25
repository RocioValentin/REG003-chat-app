/* import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on yourhi!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
// import io from 'socket.io-client';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ChatListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/Chat";
import io from 'socket.io-client';
const Stack = createNativeStackNavigator();

export default function App() {

  
  /*const [socket, setSocket] = React.useState('');

  React.useEffect(() => {
    const newSocket = io(`http://192.168.0.9:3000`);
    newSocket.on('connect', () => {
      console.log('conectado');
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]); */


  /*const socket = io('http://192.168.0.9:3000') 
  
  socket.on('connect', () => {
    console.log('conectado');
  });*/
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Welcome, this is chat-shine...' }}
        />
        <Stack.Screen name="Register" component= {RegisterScreen} />
        <Stack.Screen name="ChatList" component= {ChatListScreen} />
        <Stack.Screen name="Chat" component= {ChatScreen} options={({route})=>({
          title: route.params.name, 
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
