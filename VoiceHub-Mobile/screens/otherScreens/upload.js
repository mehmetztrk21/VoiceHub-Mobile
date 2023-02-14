import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Icon } from "react-native-elements";

import Post from "../components/post";

import uploadStyle from "../../assets/styles/upload.style";

export default function Upload({ navigation }) {
  return (
    <View style={uploadStyle.container}>

      <View style={uploadStyle.header}>
        <TouchableOpacity onPress={() => navigation.goBack('HomeScreen')}>
          <Icon type="ionicon" size={28} name={"arrow-back-outline"} />
        </TouchableOpacity>
        <Text style={uploadStyle.headerName}>Upload</Text>
      </View>

      <View style={uploadStyle.bottomView}>
        <View style={{ paddingLeft: '10%', paddingRight: '2.5%' }}>
          <Post />
        </View>

        <Text style={uploadStyle.time}>0.15</Text>

      </View>
    </View>
  );
}