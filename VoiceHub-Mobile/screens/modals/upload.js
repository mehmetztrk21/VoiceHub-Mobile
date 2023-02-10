import React from 'react';
import { View, Text } from 'react-native';
import uploadStyle from "../../assets/styles/upload.style";
/* HALF SCREEN, CONTINUE THIS PAGE */
export default function Upload() {
    return (
      <View style={uploadStyle.container}>
        <View style={uploadStyle.top}>
          <Text>Upload</Text>
        </View>
      </View>
    );
  }