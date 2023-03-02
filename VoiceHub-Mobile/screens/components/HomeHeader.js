import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Divider, Icon } from "react-native-elements";
import logo from "../../assets/images/VoiceHub-1.png";
import homeHeaderStyles from '../../assets/styles/HomeHeader.style';

const HomeHeader = ({ navigation, pressLogo, visibleUpload, setVisibleUpload }) => {

  return (
    <View style={homeHeaderStyles.wrapper}>
      <Divider width={1} orientation='vertical' />
      <View style={homeHeaderStyles.head}>
        <TouchableOpacity onPress={pressLogo}>
          <Image source={logo} style={{ width: 115.2, height: 64.8 }} />
        </TouchableOpacity>
        
        <View style={homeHeaderStyles.rightTop}>
          <TouchableOpacity style={homeHeaderStyles.headerPactions} onPress={() => navigation.push('Message')}>
            <Icon type="feather" size={30} name={"mail"} />
          </TouchableOpacity>

          <TouchableOpacity style={homeHeaderStyles.headerPactions} onPress={()=>{setVisibleUpload(!visibleUpload)}}>
            <Icon type="feather" size={30} name={"plus"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default HomeHeader