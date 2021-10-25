import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { postAuth } from '../services/auth'
import axios from "axios";

const LoginScreen = ({navigation}) => {
    const [name, onChangeName] = React.useState('')
    const [password, onChangePassword] = React.useState('')

    console.log('veamooooos', name)
    const [token, setToken] = React.useState();

    const doLogin = () => {
      const req  =
        {name: name, password: password}
      axios.post("http://localhost:3000/auth", req)
      .then(
        (resp) => {
        console.log(resp)
        const base64Url = resp.data.token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const infoUser = JSON.parse(jsonPayload);
        navigation.navigate('ChatList', { name: infoUser.name })
        })
      .catch(
        (err) => {
          alert('bad password', err)
        }
      )
    }

  /* React.useEffect(() => {
    const getUsers = async () => {
      try{
        const res = await axios.post("http://localhost:3000/auth", {
          body:{
            name: name,
            password: password, 
          }
        })
        setToken(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getUsers();
  }, []) */

  console.log('tokeeeeeeeeeen', token)
    /* const Authentication = () => {
      postAuth({name, password })
    } */

    return (
        <View>
            <TextInput
        style={styles.input}
        onChangeText={text => onChangeName(text)}
        value={name}
        placeholder="Name"
        keyboardType="string"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => onChangePassword(text)}
        value={password}
        placeholder="Password"
        keyboardType="string"
        secureTextEntry
      />

      <View style={styles.fixToText}>

            <Button
        title="Login"
        onPress={() =>
        doLogin()
      }
    />
        <Button
        title="Register"
        onPress={() =>
        navigation.navigate('Register', { name: 'Jane' })
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
        padding: 25,
      },
  });

export default LoginScreen;
