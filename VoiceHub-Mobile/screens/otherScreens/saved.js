import React from 'react';
import { View} from 'react-native';
import OtherHeader from '../components/otherHeader';

import PostUserInfo from "../components/postUserInfo";
import Post from "../components/post";
import PostActions from "../components/postActions";
import PostTexts from "../components/postTexts";
import userPostData from '../components/userPostData';
import savedStyle from "../../assets/styles/saved.style";

export default function Saved({ navigation }) {

  const RenderUser = ({ userPostData }) => {
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
    <View style={savedStyle.container}>

      <OtherHeader HeaderTitle='Saved Posts' navigation={navigation}/>

      <View style={savedStyle.savedPostContainer}>
        <RenderUser userPostData={userPostData}/>
      </View>
    </View>
  );
}