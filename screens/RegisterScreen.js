import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const RegisterScreen = ({ navigation, route }) => {
  const [name, onChangeName] = React.useState('')
  const [password, onChangePassword] = React.useState('')
    return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Name"
        keyboardType="string"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        keyboardType="string"
      />
      <View style={styles.fixToText}>
      <Button
        title="Create Account"
        onPress={() =>
        navigation.navigate('ChatList', { name: 'Rocio' })
      }
    />
      </View>
        
    </View>
    )
  };

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    fixToText: {
        flexDirection: 'column',
        gap: 10,
        padding: 25,
      },
  });

export default RegisterScreen;
