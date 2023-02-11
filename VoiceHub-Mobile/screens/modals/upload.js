import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

import { Icon } from "react-native-elements";
import Slider from "../../screens/components/slider"
import uploadStyle from "../../assets/styles/upload.style";

export default function Upload(uploadVisible) {
  return (
    <Modal style={{width:"100%"}} onRequestClose={()=>{!uploadVisible}}>
    <View>
    {uploadVisible.uploadVisible?(
    <View style={uploadStyle.container}>
      <View style={uploadStyle.topView}>
        <Text style={uploadStyle.header}>Upload</Text>
      </View>

      <View style={uploadStyle.bottomView}>
        <Slider/>
        <TouchableOpacity>
          <Icon type="feather" size={28} name={"mic"} />
        </TouchableOpacity>

        <Text style={uploadStyle.time}>0.15</Text>

      </View>
    </View>):null
}
</View>
</Modal>
  );
}