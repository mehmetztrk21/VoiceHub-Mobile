import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { baseURL } from '../utils/constants'
import colors from '../../assets/colors'
import RenderLastSearchedUserStyle from "../../assets/styles/RenderLastSearchedUser.style"
import { Ionicons } from '@expo/vector-icons'

const RenderLastSearchedUser = ({ navigation, users, index }) => {

  useEffect(() => {
    console.log(users)
  }, [])

  return (
    <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity style={RenderLastSearchedUserStyle.last}
        onPress={() => navigation.navigate("SeeProfile", { userId: users._id })}>

        {users.profilePhotoUrl == null || users.profilePhotoUrl == baseURL + null || users.profilePhotoUrl == baseURL ?
          <Image source={require("../../assets/avatar.png")} style={RenderLastSearchedUserStyle.lastSearchImage} /> :
          <Image style={RenderLastSearchedUserStyle.lastSearchImage} source={{ uri: baseURL + users.profilePhotoUrl }} />
        }

        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontWeight: "700", paddingLeft: "2%" }}>{users.username}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={RenderLastSearchedUserStyle.closeButtonTouch}>
        <Ionicons type="font-awesome" size={20} name={"close"} color={colors.green} />
      </TouchableOpacity>
    </View>
  )
}

export default RenderLastSearchedUser