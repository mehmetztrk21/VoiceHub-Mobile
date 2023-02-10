import React from 'react';
import { View, Text, ScrollView, } from 'react-native';

import userMessageItemStyle from "../../assets/styles/userMessageItem.style";

import PostUserInfo from "../../screens/components/postUserInfo";
import Post from "../../screens/components/post";

export default class MessageScreen extends React.Component {
    render() {
        
      return (
        <View style={userMessageItemStyle.container}>
          <PostUserInfo/>
          <Post/>
          <Text style={userMessageItemStyle.time}>19:05</Text>
        </View>
      );
    }
  } 