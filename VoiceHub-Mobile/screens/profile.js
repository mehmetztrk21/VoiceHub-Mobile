import React from "react";
import {
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import PostImg from "../screens/components/profileGrid";

import mypost from "../assets/images/mypost.jpg";
import mypost2 from "../assets/images/mypost2.jpg";
import mypost3 from "../assets/images/mypost3.jpg";
import mypost4 from "../assets/images/mypost4.jpg";
import mypost5 from "../assets/images/mypost5.jpg";
import mypost6 from "../assets/images/mypost6.jpg";
import mypost7 from "../assets/images/mypost7.jpg";
import post1 from "../assets/images/post1.jpg";
import post2 from "../assets/images/post2.jpg";
import verfy from "../assets/ver.png";
import admin from "../assets/userImages/admin.jpg";

import profileStyles from '../assets/styles/profile.style';

const PostData = [
  { id: "1", PostPic: mypost },
  { id: "2", PostPic: mypost2 },
  { id: "3", PostPic: mypost3 },
  { id: "4", PostPic: mypost4 },
  { id: "5", PostPic: mypost5 },
  { id: "6", PostPic: mypost6 },
  { id: "7", PostPic: mypost7 },
];

export default function ProfileScreen() {
  // Rendering Post with arrays
  const RenderPost = ({ PostData }) => {
    return PostData.map((item) => (
      <PostImg key={item.id} postImg={item.PostPic} />
    ));
  };

  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.aHeadView}>
        <Text style={profileStyles.head}>k.kayserili</Text>
        <Image source={verfy} style={profileStyles.ver} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={profileStyles.profileScroll}
      >
        {/* Profile heads */}
        <View style={profileStyles.actView}>
          <Image source={admin} style={profileStyles.userPic} />
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={profileStyles.fView1}>
              <Text style={profileStyles.actText}>47</Text>
              <Text style={profileStyles.actText}>1M</Text>
              <Text style={profileStyles.actText}>150</Text>
            </View>
            <View style={profileStyles.fView}>
              <Text style={profileStyles.actText2}>Post</Text>
              <Text style={profileStyles.actText2}>Followers</Text>
              <Text style={profileStyles.actText2}>Following</Text>
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={profileStyles.bioCont}>
          <Text style={profileStyles.name}>Kaan Kayserili | Software Developer</Text>
        </View>

        {/* Follow n Buttons */}
        <View style={profileStyles.btnHolder}>
          <TouchableOpacity style={profileStyles.follow}>
            <Text style={profileStyles.btnTextF}>Follow</Text>
          </TouchableOpacity>
        </View>

        {/* Posts */}

        <View style={profileStyles.postView}>
          <RenderPost PostData={PostData} />
        </View>
      </ScrollView>
    </View>
  );
}


