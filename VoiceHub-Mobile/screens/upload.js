import React from 'react';
import { Text, View } from 'react-native';
import uploadStyle from "../assets/styles/upload.style"
/* HALF SCREEN, CONTINUE THIS PAGE */
export default class UploadScreen extends React.Component {  
  render() {  
    return (  
        <View style={uploadStyle.container}>  
          <Text>Upload Screen</Text> 
        </View>  
    );  
  }  
} 