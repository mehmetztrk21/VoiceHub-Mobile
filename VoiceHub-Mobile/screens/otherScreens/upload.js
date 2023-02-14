import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Icon } from "react-native-elements";

import Slider from "../components/slider";

import uploadStyle from "../../assets/styles/upload.style";

export default function Upload({navigation}) {
  return (
    <View style={uploadStyle.container}>
      <View style={uploadStyle.header}>
      <TouchableOpacity onPress={()=>navigation.goBack('HomeScreen')}>
          <Icon type="ionicon" size={28} name={"arrow-back-outline"} />
        </TouchableOpacity>
        <Text style={uploadStyle.headerName}>Upload</Text>
      </View>

      <View style={uploadStyle.bottomView}>
        <Slider/>
        <TouchableOpacity>
          <Icon type="feather" size={28} name={"mic"} />
        </TouchableOpacity>

        <Text style={uploadStyle.time}>0.15</Text>

      </View>
    </View>
  );
}