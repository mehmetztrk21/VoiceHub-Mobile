import { View } from 'react-native'
import React from 'react'

import PostUserInfo from "../components/PostUserInfo";
import PostMedia from "../components/PostMedia";
import PostActions from "../components/PostActions";

const Post = ({navigation}) => {
  return (
    <View style={{borderRadius:20, borderWidth:2, borderColor:'#DADADA', padding:"2%", marginBottom:'4%'}}>
        <PostUserInfo navigation={navigation}/>
        <PostMedia navigation={navigation}/>
        <PostActions navigation={navigation}/>
    </View>
  )
}

export default Post