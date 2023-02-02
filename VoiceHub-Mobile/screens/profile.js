import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  profileStyleheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import PostImg from "../screens/components/profileGrid";

import { profileStyle } from "../styles/styles";

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
    <View style={profileStyle.container}>
      <View style={profileStyle.aHeadView}>
        <Text style={profileStyle.head}>suyash.codes</Text>
        <Image source={verfy} style={profileStyle.ver} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={profileStyle.profileScroll}
      >
        {/* Profile heads */}
        <View style={profileStyle.actView}>
          <Image source={admin} style={profileStyle.userPic} />
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={profileStyle.fView1}>
              <Text style={profileStyle.actText}>47</Text>
              <Text style={profileStyle.actText}>1M</Text>
              <Text style={profileStyle.actText}>150</Text>
            </View>
            <View style={profileStyle.fView}>
              <Text style={profileStyle.actText2}>Post</Text>
              <Text style={profileStyle.actText2}>Followers</Text>
              <Text style={profileStyle.actText2}>Following</Text>
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={profileStyle.bioCont}>
          <Text style={profileStyle.name}>Suyash | Self Taught Dev</Text>
          <Text style={profileStyle.catg}>Digital Creator</Text>
          <Text style={profileStyle.bio}>Programmer</Text>
          <Text style={profileStyle.bio}>Self taught by Errors</Text>
          <Text style={profileStyle.bio}>Graphic Designer</Text>
        </View>

        {/* Follow n Buttons */}
        <View style={profileStyle.btnHolder}>
          <TouchableOpacity style={profileStyle.follow}>
            <Text style={profileStyle.btnTextF}>Follow</Text>
          </TouchableOpacity>

          <TouchableOpacity style={profileStyle.msg}>
            <Text style={profileStyle.btnTextM}>Message</Text>
          </TouchableOpacity>

          <TouchableOpacity style={profileStyle.msg}>
            <Text style={profileStyle.btnTextM}>Contact</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}

        <View style={profileStyle.iconCont}>
          <Icon
            style={profileStyle.icons}
            type="material-community"
            size={35}
            name={"grid"}
          />
          <Icon
            style={profileStyle.icons}
            type="material"
            size={33}
            name={"videocam"}
          />
          <Icon
            style={profileStyle.icons}
            type="font-awesome-5"
            size={28}
            name={"tag"}
          />
        </View>

        {/* Posts */}

        <View style={profileStyle.postView}>
          <RenderPost PostData={PostData} />
        </View>
      </ScrollView>
    </View>
  );
}


