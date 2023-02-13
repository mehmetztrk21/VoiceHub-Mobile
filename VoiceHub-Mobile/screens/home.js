import React, { useState } from "react";
import { Icon } from "react-native-elements";
import Slider from "../screens/components/slider";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

import Upload from "./otherScreens/upload";
import Message from "./otherScreens/message";
import OtherComments from "./otherScreens/otherComments";

import PostUserInfo from './components/postUserInfo';
import Post from './components/post';
import PostActions from './components/postActions';
import PostTexts from './components/postTexts';

//importing styles
import homeStyles from '../assets/styles/home.style';

import userPostData from "./components/userPostData";
import BottomTabs from "./components/BottomTabs";
import HomeHeader from "./components/HomeHeader";

const Play = () => {
  alert("Played Voice !");
}

const postLiked = () => {
  alert("You Liked this Voice !");
};

const postComment = () => {
  alert("You Commented on this Voice !");
};

const postSave = () => {
  alert("You Saved this Voice !");
};
const commentCount = 3;

export default function HomeScreen(navigation) {

  const [uploadVisible, setUploadVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [showOtherComments, setShowOtherComments] = useState(false);

  // Rendering Post with arrays
  const RenderPost = ({ userPostData }) => {
    return userPostData.map((item) => (
      <View>
        <Post />
        <PostUserInfo />
        <PostActions />
        <PostTexts />
      </View>
    ));
  };
  return (

    <SafeAreaView style={homeStyles.container}>
      <Upload uploadVisible={uploadVisible} />
      <OtherComments showOtherComments={showOtherComments} />
      <Message messageVisible={messageVisible} />

      <HomeHeader navigation={navigation}/>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Posts */}
        <RenderPost userPostData={userPostData} />
      </ScrollView>
      <BottomTabs navigation={navigation}/>
    </SafeAreaView>
  );
}