import { View } from 'react-native'
import React from 'react'

import PostUserInfo from './postUserInfo'
import Post from './post'
import PostTexts from './postTexts'
import PostActions from './postActions'
import userPostData from "./userPostData"

const RenderDiscover = ({navigation }) => {
    return userPostData.map((item) => (
        <View>
          <PostUserInfo navigation={navigation} userPic={item.userPic} userName={item.userName} />
          <View style={{ paddingLeft: '10%', paddingRight: '2.5%' }}>
            <Post />
          </View>
          <PostActions navigation={navigation} />
          <PostTexts navigation={navigation} likesCount={item.likesCount} userPic={item.userPic} />
        </View>
      ));
    }

export default RenderDiscover