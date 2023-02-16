import React from "react";
import {
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import admin from "../assets/userImages/admin.jpg";

import PostUserInfo from "./components/postUserInfo";
import Post from "./components/post";
import PostActions from "./components/postActions";
import PostTexts from "./components/postTexts";
import BottomTabs from "./components/BottomTabs";
import ProfileHeader from "./components/profileHeader";
import userPostData from "./components/userPostData"
import profileStyles from '../assets/styles/profile.style';

const userRealName = "Kaan Kayserili";
export default function ProfileScreen({ navigation, route }) {
  const { uName, isYourProfile } = route.params;
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
    <View style={profileStyles.container}>

      <ProfileHeader navigation={navigation} uName={uName} isVerified={true} isYourProfile={isYourProfile} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={profileStyles.profileScroll}
      >
        {/* Profile heads */}
        <View style={profileStyles.actView}>
          <Image source={admin} style={profileStyles.userPic} />
          <View style={profileStyles.followContents}>

            <View style={profileStyles.postCount}>
              <Text style={profileStyles.fNumber}>47</Text>
              <Text style={profileStyles.fText}>Post</Text>
            </View>

            <TouchableOpacity style={profileStyles.followerCount}
              onPress={() => { navigation.navigate("FollowFollower", { title: 'Followers' }); }}>
              <Text style={profileStyles.fNumber}>1M</Text>
              <Text style={profileStyles.fText}>Followers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={profileStyles.followCount}
              onPress={() => { navigation.navigate("FollowFollower", { title: 'Following' }); }}>
              <Text style={profileStyles.fNumber}>150</Text>
              <Text style={profileStyles.fText}>Following</Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* Bio */}
        <View style={profileStyles.bioCont}>
          <Text style={profileStyles.name}>{userRealName}</Text>
          <View style={{ paddingLeft: '10%', paddingRight: '2.5%' }}>
            <Post />
          </View>{/*User Bio*/}
        </View>

        {/* Edit Profile Buttons */}
        {isYourProfile ? (
          <View style={profileStyles.btnHolder}>
            <TouchableOpacity style={profileStyles.editProfile}
              onPress={() => navigation.navigate('EditProfile', { RealName: userRealName, uName: uName, pic: admin })}>
              <Text style={profileStyles.btnTextF}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={profileStyles.logOut} onPress={() => navigation.push('Login')}>
              <Text style={profileStyles.btnTextF}>Log Out</Text>
            </TouchableOpacity>
          </View>) : null}

        {/* Posts */}

        <View style={profileStyles.postView}>
          <RenderPost userPostData={userPostData} />
        </View>
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </View>
  );
}


