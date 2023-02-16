import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Divider, Icon } from 'react-native-elements'

import profileHeaderStyle from "../../assets/styles/profileHeader.style"

import verfy from "../../assets/ver.png";

const profileHeader = ({navigation, uName, isVerified}) => {
  return (
    <View style={profileHeaderStyle.wrapper}>
      <Divider width={1} orientation='vertical'/>
    <View style={profileHeaderStyle.aHeadView}>

        <View style={profileHeaderStyle.leftTop}>
          <Text style={profileHeaderStyle.head}>{uName}</Text>
          {isVerified ? (
            <Image source={verfy} style={profileHeaderStyle.ver} />
          ) : null}
        </View>

        <View style={profileHeaderStyle.rightTop}>
          <TouchableOpacity style={profileHeaderStyle.pactions} onPress={()=>navigation.push('Saved')}>
            <Icon type="feather" size={28} name={"save"} />
          </TouchableOpacity>

          <TouchableOpacity style={profileHeaderStyle.pactions} onPress={()=>navigation.push('Upload')}>
            <Icon type="feather" size={28} name={"plus"} />
          </TouchableOpacity>
        </View>
      </View>
      </View>
  )
}

export default profileHeader