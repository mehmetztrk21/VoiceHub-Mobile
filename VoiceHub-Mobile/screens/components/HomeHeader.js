import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Divider, Icon } from "react-native-elements";
import colors from '../../assets/colors';
import logo from "../../assets/images/VoiceHub-1.png";
import homeHeaderStyles from '../../assets/styles/HomeHeader.style';
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const HomeHeader = ({ navigation, pressLogo, username, isYourProfile }) => {

  return (
    <View style={homeHeaderStyles.wrapper}>
      <Divider width={1} orientation='vertical' />

      <View style={homeHeaderStyles.head}>

        <View style={homeHeaderStyles.FirstRow}>

          <TouchableOpacity onPress={pressLogo}>
            <Image source={logo} style={{ width: 115.2, height: 64.8 }} />
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Message")}>
              <Icon type="font-awesome" size={30} name={"envelope-o"} color={colors.black} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("ActivityScreen", { username: username })} style={{ marginLeft: 10 }}>
              <Icon type="font-awesome" size={30} name={'heart-o'} color={colors.black} />
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </View>
  )
}

export default HomeHeader