import React from "react";
import { View } from "react-native";

import postViewStyle from "../../assets/styles/postView.style";


import Post from "../../screens/components/post";
import PostUserInfo from "../../screens/components/postUserInfo";
import PostActions from "../../screens/components/postActions";
import PostTexts from "../../screens/components/postTexts";


export default function PostView(
  userPostPic,
  userPostName,
  likesCount,
  userid,
  useradmin,
  caption) {

  return (
    <View style={postViewStyle.postContainer}>

      {/* Users Info (pp and username) */}
      <PostUserInfo/>

      {/* Voices are here */}{/* Don't value in nowless. */}
      <Post/>

      {/* Post's like, comment and save buttons are here*/}
      <PostActions />

      {/* Post Text Info */}
      <PostTexts/>
    </View>
  )
};


