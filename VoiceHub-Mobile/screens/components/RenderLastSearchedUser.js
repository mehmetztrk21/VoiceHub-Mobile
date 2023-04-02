import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { Icon } from 'react-native-elements'
import colors from '../../assets/colors'
import RenderLastSearchedUserStyle from "../../assets/styles/RenderLastSearchedUser.style"

const RenderLastSearchedUser = ({ navigation, users }) => {

  return users?.map((item, index) => (
    <TouchableOpacity style={RenderLastSearchedUserStyle.last} key={index}
      onPress={() => navigation.navigate("SeeProfile", { userId: item.id })}>
      <TouchableOpacity style={{ flexDirection: "row" }}
        onPress={() => navigation.navigate("SeeProfile", { userId: item.id })}>
        <Image source={item.userPic} style={RenderLastSearchedUserStyle.lastSearchImage} />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontWeight: "700" }}>{item.username}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={RenderLastSearchedUserStyle.closeButtonTouch}>
        <Icon type="font-awesome" size={20} name={"times"} color={colors.gray} />
      </TouchableOpacity>
    </TouchableOpacity>
  ));
}

export default RenderLastSearchedUser