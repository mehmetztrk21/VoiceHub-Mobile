import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* HALF SCREEN, I CONTINUE THIS PAGE */
export default class UploadScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Upload Screen</Text> 
        </View>  
    );  
  }  
} 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });