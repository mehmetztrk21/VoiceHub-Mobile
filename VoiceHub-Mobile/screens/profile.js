import React, { useState } from "react";
import {
  Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View
} from "react-native";
import admin from "../assets/userImages/admin.jpg";

import colors from "../assets/colors";
import profileStyles from '../assets/styles/profile.style';
import BottomTabs from "./components/BottomTabs";
import Post from "./components/post";
import ProfileHeader from "./components/profileHeader";
import ProfilePopUp from "./components/profilePopUp";
import RenderPost from "./components/RenderPost";
const user = JSON.parse(localStorage.getItem("user"));
const userRealName = user.name+" "+user.surname;
export default function ProfileScreen({ navigation, route }) {
  const { uName, isYourProfile } = route.params;

  const [visiblePopUp, setVisiblePopUp] = useState(false)
  const [visibleUpload, setVisibleUpload] = useState(false)
  
  return (
    <SafeAreaView style={[profileStyles.container, { background: 'linear-gradient(to right,' + colors.green + ',' + colors.tealGreen + ')' }]}>

      <ProfileHeader navigation={navigation} uName={uName}
        isVerified={true} isYourProfile={isYourProfile}
        visibleUpload={visibleUpload} setVisibleUpload={setVisibleUpload}
        visiblePopUp={visiblePopUp} setVisiblePopUp={setVisiblePopUp} />

      <View style={{ width: "100%", borderBottomStartRadius: 40, borderBottomEndRadius: 40, backgroundColor: colors.white, marginTop: 80 }}>

        {/* PP, Follow Count,  */}
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
            <TouchableOpacity style={[profileStyles.editProfileAndFollow,{background: 'linear-gradient(to right, ' + colors.green + ',' + colors.tealGreen + ')'}]}
              onPress={() => navigation.navigate('EditProfile', { RealName: userRealName, uName: uName, pic: admin })}>
              <Text style={profileStyles.btnTextF}>Edit Profile</Text>
            </TouchableOpacity>
          ) :
            <TouchableOpacity style={[profileStyles.editProfileAndFollow,{background: 'linear-gradient(to right, ' + colors.green + ',' + colors.tealGreen + ')'}]}>
              <Text style={profileStyles.btnTextF}>Follow</Text>
            </TouchableOpacity>
          }
        </View>
      </View>

      {/* Posts */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[profileStyles.scroll, visibleUpload == true ? (profileStyles.uploadMargin) : visiblePopUp == true ? (profileStyles.popUpMargin) : null]}
      >
        <View style={[profileStyles.postView, { background: 'linear-gradient(to right, ' + colors.green + ', ' + colors.tealGreen + ')' }]}>
          <RenderPost navigation={navigation}/>
        </View>
      </ScrollView>

      {visiblePopUp == true ? (
        <ProfilePopUp navigation={navigation} bottomSize={50} />
      ) : visibleUpload == true ? (
        <AddVoice bottomSize={50} />
      ) : null}

      <BottomTabs navigation={navigation} userName={uName}
        visiblePopUp={visiblePopUp} setVisiblePopUp={setVisiblePopUp}
        pageName={"ProfileScreen"} visibleUpload={visibleUpload}
        setVisibleUpload={setVisibleUpload} />
    </SafeAreaView>
  );
}

