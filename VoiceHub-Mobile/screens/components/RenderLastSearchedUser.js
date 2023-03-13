import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { Icon } from 'react-native-elements'
import colors from '../../assets/colors'
import RenderLastSearchedUserStyle from "../../assets/styles/RenderLastSearchedUser.style"
import userPostData from "./userPostData"

const RenderLastSearchedUser = ({ navigation }) => {
  return userPostData.map((item) => (
    <View style={RenderLastSearchedUserStyle.last}>
      <TouchableOpacity style={{ flexDirection: "row" }}
        onPress={() => navigation.navigate('ProfileScreen', { uName: item.userName, isYourProfile: false })}>
        <Image source={item.userPic} style={RenderLastSearchedUserStyle.lastSearchImage} />
        <View style={{ flexDirection: "column" }}>
          <Text>{item.userName}</Text>
          <Text>k.kayserili ve 5 diğer kişi daha takip ediyor</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={RenderLastSearchedUserStyle.closeButtonTouch}>
        <Icon type="font-awesome" size={"150%"} name={"times"} color={colors.gray} />
      </TouchableOpacity>
    </View>
  ));
}

export default RenderLastSearchedUser