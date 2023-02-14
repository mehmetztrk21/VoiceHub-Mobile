import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Divider, Icon } from "react-native-elements";
import homeHeaderStyles from '../../assets/styles/HomeHeader.style';
import logo from "../../assets/images/VoiceHub-1.png";

const HomeHeader = ({ navigation }) => {
  return (
    <View style={homeHeaderStyles.wrapper}>
      <Divider width={1} orientation='vertical' />
      <View style={homeHeaderStyles.head}>
        <Image source={logo} style={{ width: "40%", height: "122.5%" }} />
        <View style={homeHeaderStyles.rightTop}>
          <TouchableOpacity style={homeHeaderStyles.headerPactions} onPress={() => navigation.push('Message')}>
            <Icon type="feather" size={28} name={"mail"} />
          </TouchableOpacity>

          <TouchableOpacity style={homeHeaderStyles.headerPactions} onPress={() => navigation.push('Upload')}>
            <Icon type="feather" size={28} name={"plus"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default HomeHeader