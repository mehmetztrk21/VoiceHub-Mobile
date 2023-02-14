import React, { useState } from "react";
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


const commentCount = 3;
export default function ProfileScreen({ navigation }) {

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

      <ProfileHeader navigation={navigation} />

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

            <View style={profileStyles.followerCount}>
              <Text style={profileStyles.fNumber}>1M</Text>
              <Text style={profileStyles.fText}>Followers</Text>
            </View>

            <View style={profileStyles.followCount}>
              <Text style={profileStyles.fNumber}>150</Text>
              <Text style={profileStyles.fText}>Following</Text>
            </View>

          </View>
        </View>

        {/* Bio */}
        <View style={profileStyles.bioCont}>
          <Text style={profileStyles.name}>Kaan Kayserili</Text>
          <View style={{ paddingLeft: '10%', paddingRight: '2.5%' }}>
            <Post />
          </View>{/*User Bio*/}
        </View>

        {/* Edit Profile Buttons */}
        <View style={profileStyles.btnHolder}>
          <TouchableOpacity style={profileStyles.editProfile} onPress={() => navigation.push('EditProfile')}>
            <Text style={profileStyles.btnTextF}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={profileStyles.logOut} onPress={() => navigation.push('Login')}>
            <Text style={profileStyles.btnTextF}>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Posts */}

        <View style={profileStyles.postView}>
          <RenderPost userPostData={userPostData} />
        </View>
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </View>
  );
}


