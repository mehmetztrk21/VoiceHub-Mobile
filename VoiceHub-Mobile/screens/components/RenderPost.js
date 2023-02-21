import { View } from 'react-native'
import React from 'react'

import userPostData from "./userPostData";

import PostUserInfo from "./postUserInfo";
import Post from "./post";
import PostActions from "./postActions";
import PostTexts from "./postTexts";

const RenderPost = ({navigation}) => {
    return userPostData.map((item) => (
        <View>
          <PostUserInfo navigation={navigation} userPic={item.userPic} userName={item.userName} />
          <View style={{ paddingLeft: '20%', paddingRight: '2.5%' }}>
            <Post />
          </View>
          <PostActions navigation={navigation} />
          <PostTexts navigation={navigation} likesCount={item.likesCount} userPic={item.userPic}/>
        </View>
      ));
}

export default RenderPost