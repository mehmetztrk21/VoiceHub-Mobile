import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Icon } from "react-native-elements";

import colors from '../../assets/colors';
import logo from "../../assets/images/VoiceHub-1.png";
import homeHeaderStyles from '../../assets/styles/HomeHeader.style';

import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const HomeHeader = ({ navigation, pressLogo }) => {

  return (
    <View style={homeHeaderStyles.wrapper}>

      <View style={homeHeaderStyles.head}>

        <View style={homeHeaderStyles.FirstRow}>

          <TouchableOpacity onPress={pressLogo}>
            <Image source={logo} style={{ width: 115.2, height: 64.8 }} />
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Message")}>
              <Icon type="font-awesome" size={30} name={"envelope-o"} color={colors.black} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("ActivityScreen")} style={{ marginLeft: 10 }}>
              <Icon type="font-awesome" size={30} name={'heart-o'} color={colors.black} />
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </View>
  )
}

export default HomeHeader