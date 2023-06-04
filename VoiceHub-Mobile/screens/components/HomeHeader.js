import React from 'react';
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import colors from '../../assets/colors';
import logo from "../../assets/images/VoiceHub-1.png";
import homeHeaderStyles from '../../assets/styles/HomeHeader.style';

const HomeHeader = ({ navigation, pressLogo }) => {

  return (
    <SafeAreaView style={homeHeaderStyles.wrapper}>

      <View style={homeHeaderStyles.head}>

        <View style={homeHeaderStyles.FirstRow}>

          <TouchableOpacity onPress={pressLogo}>
            <Image source={logo} style={{ width: 115.2, height: 64.8 }} />
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Message")}>
              <Ionicons size={30} name={"mail-outline"} color={colors.black} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Notifications")} style={{ marginLeft: 10 }}>
              <Ionicons size={30} name={'heart-outline'} color={colors.black} />
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </SafeAreaView>
  )
}

export default HomeHeader