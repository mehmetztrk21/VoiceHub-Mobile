import React from 'react';
import { Text, View } from 'react-native';
import savedStyle from "../assets/styles/saved.style";

/* HALF SCREEN, CONTINUE THIS PAGE */
export default class SavedScreen extends React.Component {  
  render() {  
    return (  
        <View style={savedStyle.container}>  
          <Text>Saved Screen</Text> 
        </View>  
    );  
  }  
} 