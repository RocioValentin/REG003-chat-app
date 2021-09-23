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
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ChatListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/Chat";
const Stack = createNativeStackNavigator();

export default function App() {
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
        <Stack.Screen name="Chat" component= {ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
