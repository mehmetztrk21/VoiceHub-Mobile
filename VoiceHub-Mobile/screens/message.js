import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import messageStyle from "../assets/styles/message.style"

/* HALF SCREEN, CONTINUE THIS PAGE */
export default class MessageScreen extends React.Component {  
  render() {  
    return (  
        <View style={messageStyle.container}>  
          <Text>Message Screen</Text> 
        </View>  
    );  
  }  
} 