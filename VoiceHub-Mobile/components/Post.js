import { View } from 'react-native'
import React from 'react'

import PostUserInfo from "../components/PostUserInfo";
import PostMedia from "../components/PostMedia";
import PostActions from "../components/PostActions";

const Post = ({navigation}) => {
  return (
    <View>
        <PostUserInfo navigation={navigation}/>
        <PostMedia navigation={navigation}/>
        <PostActions navigation={navigation}/>
    </View>
  )
}

export default Post