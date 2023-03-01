import { View, Text, Image } from 'react-native'
import React from 'react'

import user1 from "../assets/images/userImages/user1.jpg"

const PostUserInfo = ({navigation}) => {
  return (
    <View style={{flexDirection:"row"}}>
        <Image source={user1} style={{width:40, height:40, borderRadius:20}}/>

        <View style={{flexDirection:"column", marginLeft:"3%"}}>
          <Text style={{fontWeight:"700"}}>k.kayserili</Text>
          <Text>20 minute ago</Text>
        </View>
    </View>
  )
}

export default PostUserInfo