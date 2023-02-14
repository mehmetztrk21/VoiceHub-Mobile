import React, { useState } from "react";
import {
  ScrollView,
  View,
  SafeAreaView,
} from "react-native";

import PostUserInfo from './components/postUserInfo';
import Post from './components/post';
import PostActions from './components/postActions';
import PostTexts from './components/postTexts';

//importing styles
import homeStyles from '../assets/styles/home.style';

import userPostData from "./components/userPostData";
import BottomTabs from "./components/BottomTabs";
import HomeHeader from "./components/HomeHeader";

const commentCount = 3;

export default function HomeScreen({ navigation }) {

  // Rendering Post with arrays
  const RenderPost = ({ userPostData }) => {
    return userPostData.map((item) => (
      <View>
        <PostUserInfo navigation={navigation} userPic={item.userPic} userName={item.userName} />
        <Post />
        <PostActions />
        <PostTexts navigation={navigation} likesCount={item.likesCount} userPic={item.userPic} />
      </View>
    ));
  };
  return (

    <SafeAreaView style={homeStyles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Posts */}
        <RenderPost userPostData={userPostData} />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}