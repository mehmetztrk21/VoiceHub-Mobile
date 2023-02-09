import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import uploadStyle from "../../assets/styles/upload.style"
import { Icon } from "react-native-elements";
/* HALF SCREEN, CONTINUE THIS PAGE */
export default class UploadScreen extends React.Component {
  render(goBack) {
    return (
      <View style={uploadStyle.container}>
        <View style={uploadStyle.top}>
          <TouchableOpacity style={uploadStyle.back}>
            <Icon type="feather" size={28} name={"x"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
} 