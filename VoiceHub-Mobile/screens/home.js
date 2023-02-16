import React from "react";
import {
  ScrollView,
  View,
} from "react-native";

//importing components
import PostUserInfo from './components/postUserInfo';
import Post from './components/post';
import PostActions from './components/postActions';
import PostTexts from './components/postTexts';
import userPostData from "./components/userPostData";
import BottomTabs from "./components/BottomTabs";
import HomeHeader from "./components/HomeHeader";

//importing styles
import homeStyles from '../assets/styles/home.style';

const commentCount = 3;

export default function HomeScreen({ navigation }) {

  // Rendering Post with arrays
  const RenderPost = ({ userPostData }) => {
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
  };
  return (
    <View style={homeStyles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={homeStyles.scroll}>
        {/* User Posts */}
        <RenderPost userPostData={userPostData} />
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </View>
  );
}