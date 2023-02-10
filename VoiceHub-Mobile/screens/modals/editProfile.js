import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import editProfileStyle from "../../assets/styles/editProfile.style"
import { Icon } from "react-native-elements";

/* HALF SCREEN, CONTINUE THIS PAGE */
export default function EditProfile() {
    return (  
      <View style={editProfileStyle.container}>
      <View style={editProfileStyle.top}>
        <TouchableOpacity style={editProfileStyle.back}>
          <Icon type="feather" size={28} name={"x"} />
        </TouchableOpacity>
      </View>
    </View> 
    );  
  }   
