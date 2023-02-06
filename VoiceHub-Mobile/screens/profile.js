import React,{useState} from "react";
import {
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
  Modal,
} from "react-native";
import { Icon } from "react-native-elements";

import mypost2 from "../assets/images/mypost2.jpg";
import verfy from "../assets/ver.png";
import admin from "../assets/userImages/admin.jpg";

import Post from "../screens/components/post";

import profileStyles from '../assets/styles/profile.style';

const PostData = [
  { id: "1", PostPic: mypost2 },
  { id: "2", PostPic: mypost2 },
  { id: "3", PostPic: mypost2 },
  { id: "4", PostPic: mypost2 },
  { id: "5", PostPic: mypost2 },
  { id: "6", PostPic: mypost2 },
  { id: "7", PostPic: mypost2 },
  { id: "8", PostPic: mypost2 },
  { id: "9", PostPic: mypost2 },
  { id: "10", PostPic: mypost2 },
  { id: "11", PostPic: mypost2 },
  { id: "12", PostPic: mypost2 },
  { id: "13", PostPic: mypost2 },
  { id: "14", PostPic: mypost2 },
];

export default function ProfileScreen() {
  // Rendering Post with arrays
  const RenderPost = ({ PostData }) => {
    return PostData.map((item) => (
      <TouchableOpacity style={{ paddingBottom: 15 }}>
        <Post key={item.id} />
      </TouchableOpacity>
    ));
  };
  const [uploadVisible,setUploadVisible] = useState(false);
  return (
    <View style={profileStyles.container}>
      <Modal visible={uploadVisible}>
        <Text>Kaan</Text>
      </Modal>
      <View style={profileStyles.aHeadView}>
        <View style={profileStyles.leftTop}>
          <Text style={profileStyles.head}>k.kayserili</Text>
          <Image source={verfy} style={profileStyles.ver} />
        </View>

        <View style={profileStyles.rightTop}>
          <TouchableOpacity style={profileStyles.pactions} onPress={()=>{setUploadVisible(true);}}>
            <Icon type="feather" size={28} name={"save"} />
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
          <Post />{/*User Bio*/}
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


