import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../assets/colors';

import profileHeaderStyle from "../../assets/styles/profileHeader.style";

import verfy from "../../assets/ver.png";

const profileHeader = ({ navigation, uName, isVerified, isYourProfile, visiblePopUp, setVisiblePopUp }) => {
  return (
    <View style={profileHeaderStyle.wrapper}>
      <View style={profileHeaderStyle.aHeadView}>
        <View style={profileHeaderStyle.leftTop}>
          {!isYourProfile ? (
            <TouchableOpacity onPress={() => navigation.goBack('SearchScreen')}>
              <Icon style={profileHeaderStyle.BackButton} type="ionicon" size={28} name={"arrow-back-outline"} />
            </TouchableOpacity>
          ) : null}
          <Text style={profileHeaderStyle.head}>{uName}</Text>
          {isVerified ? (
            <Image source={verfy} style={profileHeaderStyle.ver} />
          ) : null}
        </View>

        {isYourProfile ? (
          <View style={profileHeaderStyle.rightTop}>
            <TouchableOpacity style={profileHeaderStyle.pactions} onPress={() => navigation.push('Saved')}>
              <Icon type="font-awesome" size={28} name={"bookmark-o"} color={colors.black} />
            </TouchableOpacity>

            <TouchableOpacity style={profileHeaderStyle.pactions} onPress={() => navigation.navigate('ActivityScreen',{uName:uName, isYourProfile})}>
              <Icon type="font-awesome" size={30} name={'heart-o'} color={colors.black} />
            </TouchableOpacity>
          </View>
        ) : null}

      </View>
    </View>
  )
}

export default profileHeader