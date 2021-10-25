import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
  } from '../styles/ChatListStyles';


const ChatListScreen = ({ navigation, route }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try{
        const res = await axios.get("http://localhost:3000/users")
        setUsers(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getUsers();
  }, [])

  console.log('usuariooos', users)


    return (
    <Container >
        <FlatList
        data={users}
        renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat', {name: item.name})}>
              <UserInfo>
              { /*<UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper> */ }
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.name}</UserName>
                  { /*  <PostTime>{item.messageTime}</PostTime> */ }
                  </UserInfoText>
                  { /* <MessageText>{item.messageText}</MessageText> */ }
                </TextSection>
              </UserInfo>
            </Card>
        )}
        keyExtractor={item => item.id}
        />
        <Text>This is {route.params.name}'s Chat List</Text>
    </Container>
    )
  };

  const styles = StyleSheet.create({
    container: {
      height: 40,
      margin: 2,
      borderWidth: 1,
      padding: 10,
    },
  });

export default ChatListScreen;
