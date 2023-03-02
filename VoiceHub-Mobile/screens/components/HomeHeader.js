import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Divider, Icon } from "react-native-elements";
import colors from '../../assets/colors';
import logo from "../../assets/images/VoiceHub-1.png";
import homeHeaderStyles from '../../assets/styles/HomeHeader.style';

const HomeHeader = ({ navigation, pressLogo, visibleUpload, setVisibleUpload }) => {

  return (
    <View style={homeHeaderStyles.wrapper}>
      <Divider width={1} orientation='vertical' />

      <View style={homeHeaderStyles.head}>

        <View style={homeHeaderStyles.FirstRow}>

          <TouchableOpacity onPress={pressLogo}>
            <Image source={logo} style={{ width: 115.2, height: 64.8 }} />
          </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.push('Message')}>
              <Icon type="feather" size={30} name={"mail"} />
            </TouchableOpacity>

        </View>

        <View style={homeHeaderStyles.SecondRow}>
          <TouchableOpacity>
            <Text style={[homeHeaderStyles.SecondText, 
              {background:'linear-gradient(to right, '+colors.green+', '+colors.tealGreen+')'}]}
              >All</Text>
          </TouchableOpacity>

          <TouchableOpacity >
            <Text style={[homeHeaderStyles.SecondText, 
              {background:'linear-gradient(to right, '+colors.green+', '+colors.tealGreen+')'}]}
              >Popular</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={[homeHeaderStyles.SecondText, 
              {background:'linear-gradient(to right, '+colors.green+', '+colors.tealGreen+')'}]}
              >Friends</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default HomeHeader