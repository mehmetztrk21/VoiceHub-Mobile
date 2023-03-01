import { View, Text, Image } from 'react-native'
import React from 'react'

import user1 from "../assets/images/userImages/user1.jpg"

const PostUserInfo = ({navigation}) => {
  return (
    <View>
        <Image source={user1} style={{width:"15%", aspectRatio:1}}/>
        <Text>k.kayserili</Text>
        <Text>20 minute ago</Text>
    </View>
  )
}

export default PostUserInfo