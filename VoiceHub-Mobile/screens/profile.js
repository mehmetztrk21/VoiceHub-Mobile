import React, { useState } from "react";
import {
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import admin from "../assets/userImages/admin.jpg";

import RenderPost from "./components/RenderPost";
import Post from "./components/post";
import BottomTabs from "./components/BottomTabs";
import ProfileHeader from "./components/profileHeader";
import ProfilePopUp from "./components/profilePopUp";
import AddVoice from "./components/addVoice";
import profileStyles from '../assets/styles/profile.style';

const userRealName = "Kaan Kayserili";
export default function ProfileScreen({ navigation, route }) {
  const { uName, isYourProfile, visiblePopUp } = route.params;

  const [visibleUpload, setVisibleUpload] = useState(false)

  return (
    <SafeAreaView style={profileStyles.container}>

      <ProfileHeader navigation={navigation} uName={uName} 
      isVerified={true} isYourProfile={isYourProfile} 
      visibleUpload={visibleUpload} setVisibleUpload={setVisibleUpload}/>

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
        <View style={profileStyles.bioContents}>
          <Text style={profileStyles.name}>{userRealName}</Text>
          <Post />
        </View>

        {/* Edit Profile Buttons */}
        <View style={profileStyles.btnHolder}>
          {isYourProfile ? (
            <TouchableOpacity style={profileStyles.editProfileAndFollow}
              onPress={() => navigation.navigate('EditProfile', { RealName: userRealName, uName: uName, pic: admin })}>
              <Text style={profileStyles.btnTextF}>Edit Profile</Text>
            </TouchableOpacity>
          ) :
            <TouchableOpacity style={profileStyles.editProfileAndFollow}>
              <Text style={profileStyles.btnTextF}>Follow</Text>
            </TouchableOpacity>
          }
        </View>

        {/* Posts */}
        <View style={profileStyles.postView}>
          <RenderPost navigation={navigation} />
        </View>
      </ScrollView>

      {visiblePopUp == true ? (
        <ProfilePopUp navigation={navigation} bottomSize={50} />
      ) : visibleUpload == true ? (
        <AddVoice bottomSize={50} />
      ) : null}

      <BottomTabs navigation={navigation} userName={uName}/>
    </SafeAreaView>
  );
}


