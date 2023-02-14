import React from 'react';
import { View, Text, } from 'react-native';

import userMessageItemStyle from "../../assets/styles/userMessageItem.style";

import PostUserInfo from "../../screens/components/postUserInfo";
import Post from "../../screens/components/post";

export default function UserMessageItem() {

  return (
    <View style={userMessageItemStyle.container}>
      <PostUserInfo />
      <View style={{ paddingLeft: '10%', paddingRight: '2.5%' }}>
        <Post />
      </View>
      <Text style={userMessageItemStyle.time}>19:05</Text>
    </View>
  );
}