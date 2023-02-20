import React, { useRef } from "react";
import {
  ScrollView,
  View,
} from "react-native";

//importing components
import BottomTabs from "./components/BottomTabs";
import HomeHeader from "./components/HomeHeader";
import Post from './components/post';
import PostActions from './components/postActions';
import PostTexts from './components/postTexts';
import PostUserInfo from './components/postUserInfo';
import userPostData from "./components/userPostData";

//importing styles
import homeStyles from '../assets/styles/home.style';

export default function HomeScreen({ navigation, route }) {
  const {userName}=route.params;
  console.log(userName)
  
  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    console.log('yukarı kaydı')
    scrollViewRef.current.scrollTo({y:0})
  };

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
      <HomeHeader navigation={navigation} pressLogo={handleScrollToTop}/>
      <ScrollView style={homeStyles.scroll} ref={scrollViewRef}>
        {/* User Posts */}
        <RenderPost userPostData={userPostData} />
      </ScrollView>
      <BottomTabs navigation={navigation} userName={userName}/>
    </View>
  );
}