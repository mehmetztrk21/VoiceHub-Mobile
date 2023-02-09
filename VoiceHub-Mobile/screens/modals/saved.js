import React from 'react';
import { View, TouchableOpacity, Text, } from 'react-native';
import savedStyle from "../../assets/styles/saved.style";
import SavedCategory from "../components/savedCategory";

/* HALF SCREEN, CONTINUE THIS PAGE */
export default class SavedScreen extends React.Component {
  render() {
    return (
      <View style={savedStyle.container}>

        <View style={savedStyle.top}>
          <Text style={savedStyle.header}>Saved</Text>
        </View>
        
        <TouchableOpacity>
          <SavedCategory />
        </TouchableOpacity>
      </View>
    );
  }
} 