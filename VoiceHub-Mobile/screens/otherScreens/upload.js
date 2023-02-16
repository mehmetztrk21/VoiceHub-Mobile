import React from 'react';
import { View, Text } from 'react-native';

import OtherHeader from "../components/otherHeader";

import Slider from "../components/slider";

import uploadStyle from "../../assets/styles/upload.style";
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

export default function Upload({ navigation }) {
  return (
    <View style={uploadStyle.container}>

      <OtherHeader HeaderTitle='Upload' navigation={navigation} />

      <View style={uploadStyle.contents}>

        <View style={uploadStyle.content}>
          <Text style={uploadStyle.time}>0.15</Text>
          <Slider />
        </View>
        <TouchableOpacity style={{ justifyContent: "center", alignContent: "center", bottom:30 }}>
          <Icon type="feather" size={60} name={"mic"} />
        </TouchableOpacity>


      </View>
    </View>
  );
}