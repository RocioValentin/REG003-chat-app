import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';
import Task from '../components/Messages';
import io from 'socket.io-client';

const ChatScreen = (props) => {

  const newSocket = io(`http://192.168.0.10:3000`);
  newSocket.on('connect', () => {
    console.log('conectado');
  });
    
    const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    // console.log(task)
    // setTaskItems([...task])
    newSocket.on('enviar-mensaje', (payload) => {
      setTaskItems(taskItems.concat(payload))
      console.log('sigue vacio??',taskItems, payload)
    }
    );

    const payload = {
      mensaje: task,
      id: '1234',
      fecha: new Date(),
    };
    console.log('payload creado', payload)
    newSocket.emit('enviar-mensaje', payload, (id) => {
      console.log('Desde el server', id);
    });

    
    //  console.log('task', task)
    setTask('');
  }

  


  /*const completeTask = (index) => {
    newSocket.on('enviar-mensaje', (payload) => {
      let itemsCopy = [...payload.mensaje];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy)
      console.log('debe seeer', payload, itemsCopy)
    });
  }*/

    return(
        <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item) =>  <Task key={item.id} text={item.mensaje}/>)
          }
          
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a message'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {},
  });

export default ChatScreen;