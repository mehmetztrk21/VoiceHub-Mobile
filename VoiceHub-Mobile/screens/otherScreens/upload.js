import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import OtherHeader from "../components/otherHeader";



import uploadStyle from "../../assets/styles/upload.style";
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

export default function Upload({ navigation }) {

  

  return (
    <View style={uploadStyle.container}>

      <OtherHeader HeaderTitle='Upload' navigation={navigation} />

      <View style={uploadStyle.contents}>

        
      </View>
    </View>
  );
}