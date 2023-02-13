import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import homeStyles from '../../assets/styles/home.style';
import logo from "../../assets/images/VoiceHub-1.png";
import { Icon } from "react-native-elements";

const HomeHeader = (navigation) => {
  return (
    <View style={homeStyles.head}>
        <Image source={logo} style={{ width: "40%", height: "122.5%" }} />

        <View style={homeStyles.rightTop}>
          <TouchableOpacity style={homeStyles.pactions} onPress={() => { navigation.push('Message') }}>
            <Icon type="feather" size={28} name={"mail"} />
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.pactions} onPress={() => { navigation.push('Upload') }}>
            <Icon type="feather" size={28} name={"plus"} />
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default HomeHeader