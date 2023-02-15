import React from 'react';
import { View, Text } from 'react-native';

import OtherHeader from "../components/otherHeader";

import Post from "../components/post";

import uploadStyle from "../../assets/styles/upload.style";

export default function Upload({ navigation }) {
  return (
    <View style={uploadStyle.container}>

      <OtherHeader HeaderTitle='Upload' navigation={navigation}/>

      <View style={uploadStyle.bottomView}>
        <View style={{ paddingLeft: '10%', paddingRight: '2.5%' }}>
          <Post />
        </View>

        <Text style={uploadStyle.time}>0.15</Text>

      </View>
    </View>
  );
}