import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import userPostData from "./userPostData"
import RenderLastSearchedUserStyle from "../../assets/styles/RenderLastSearchedUser.style"

const RenderLastSearchedUser = ({navigation}) => {
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
        </View>
      ));
}

export default RenderLastSearchedUser