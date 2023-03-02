import React from 'react';
import { View } from 'react-native';

import PostActions from "../components/PostActions";
import PostMedia from "../components/PostMedia";
import PostUserInfo from "../components/PostUserInfo";

const Post = ({ navigation }) => {
  return (
    <View style={{ borderRadius: 10, shadowColor: '#212121', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.3, shadowRadius: 10, elevation: 5, padding: "2%", marginBottom: 18 }}>
      <PostUserInfo navigation={navigation} />
      <PostMedia navigation={navigation} />
      <PostActions navigation={navigation} />
    </View>
  )
}

export default Post