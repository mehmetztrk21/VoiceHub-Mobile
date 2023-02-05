import React from "react";
import {
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

import mypost from "../assets/images/mypost.jpg";
import mypost2 from "../assets/images/mypost2.jpg";
import mypost3 from "../assets/images/mypost3.jpg";
import mypost4 from "../assets/images/mypost4.jpg";
import mypost5 from "../assets/images/mypost5.jpg";
import mypost6 from "../assets/images/mypost6.jpg";
import mypost7 from "../assets/images/mypost7.jpg";
import verfy from "../assets/ver.png";
import admin from "../assets/userImages/admin.jpg";

import Post from "../screens/components/post";

import profileStyles from '../assets/styles/profile.style';

const PostData = [
  { id: "1", PostPic: mypost },
  { id: "2", PostPic: mypost2 },
  { id: "3", PostPic: mypost3 },
  { id: "4", PostPic: mypost4 },
  { id: "5", PostPic: mypost5 },
  { id: "6", PostPic: mypost6 },
  { id: "7", PostPic: mypost7 },
  { id: "8", PostPic: mypost },
  { id: "9", PostPic: mypost2 },
  { id: "10", PostPic: mypost3 },
  { id: "11", PostPic: mypost4 },
  { id: "12", PostPic: mypost5 },
  { id: "13", PostPic: mypost6 },
  { id: "14", PostPic: mypost7 },
];

const uploadFunction = () => {
  alert("Go to Upload Screen !");
};
const SavedFunction = () => {
  alert("Go to Saved Screen !");
}

export default function ProfileScreen() {
  // Rendering Post with arrays
  const RenderPost = ({ PostData }) => {
    return PostData.map((item) => (
      <TouchableOpacity style={{ paddingBottom: 15 }}>
        <Post key={item.id} postImg={item.PostPic} />
      </TouchableOpacity>
    ));
  };

  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.aHeadView}>
        <View style={profileStyles.leftTop}>
          <Text style={profileStyles.head}>k.kayserili</Text>
          <Image source={verfy} style={profileStyles.ver} />
        </View>

        <View style={profileStyles.rightTop}>
          <TouchableOpacity style={profileStyles.pactions} onPress={SavedFunction}>
            <Icon type="feather" size={28} name={"save"} />
          </TouchableOpacity>

          <TouchableOpacity style={profileStyles.pactions} onPress={uploadFunction}>
            <Icon type="feather" size={28} name={"plus"} />
          </TouchableOpacity>
        </View>
      </View>

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


