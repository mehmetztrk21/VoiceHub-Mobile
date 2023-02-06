import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";
import messageStyle from "../assets/styles/message.style"

/* HALF SCREEN, CONTINUE THIS PAGE */
export default class MessageScreen extends React.Component {  
  render() { 
    return ( 
      <View style={messageStyle.container}>
      <View style={messageStyle.top}>
        <TouchableOpacity style={messageStyle.back}>
          <Icon type="feather" size={28} name={"x"} />
        </TouchableOpacity>
      </View>
    </View> 
    );  
  }  
} 