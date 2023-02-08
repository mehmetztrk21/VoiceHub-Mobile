import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import savedStyle from "../../assets/styles/saved.style";
import { Icon } from "react-native-elements";

/* HALF SCREEN, CONTINUE THIS PAGE */
export default class SavedScreen extends React.Component {  
  render() {  
    return (  
      <View style={savedStyle.container}>
      <View style={savedStyle.top}>
        <TouchableOpacity style={savedStyle.back}>
          <Icon type="feather" size={28} name={"x"} />
        </TouchableOpacity>
      </View>
    </View> 
    );  
  }  
} 