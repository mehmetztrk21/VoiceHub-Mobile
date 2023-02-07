import React, { useState } from "react";
import { Icon } from "react-native-elements";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";

import PostTexts from "../screens/components/postTexts";
import PostActions from "../screens/components/postActions";
import PostUserInfo from "../screens/components/postUserInfo";
import Post from "../screens/components/post";

import Upload from "../screens/upload";
import Message from "../screens/message";

// Importing User Images
import user1 from "../assets/userImages/user1.jpg";

//importing styles
import homeStyles from '../assets/styles/home.style';

const userPostData = [
  {
    id: "1",
    userName: "Alex",
    userPic: user1,
    userPost: user1,
    likesCount: "1451",
    caption: "Coffee is the most imp part of my life !",
  },
  {
    id: "2",
    userName: "Martha",
    userPic: user1,
    userPost: user1,
    likesCount: "155",
    caption: "Nothings is better than reading book !",
  },
  {
    id: "3",
    userName: "Aditi",
    userPic: user1,
    userPost: user1,
    likesCount: "77",
    caption: "Waiting for someone to come back !",
  },
  {
    id: "4",
    userName: "Alex",
    userPic: user1,
    userPost: user1,
    likesCount: "7555",
    caption: "Coffee is the most imp part of my life !",
  },
  {
    id: "5",
    userName: "Rohit",
    userPic: user1,
    userPost: user1,
    likesCount: "93578",
    caption: "car",
  },
  {
    id: "6",
    userName: "Rohit",
    userPic: user1,
    userPost: user1,
    likesCount: "5265",
    caption: "rose",
  },
  {
    id: "7",
    userName: "Rohit",
    userPic: user1,
    userPost: user1,
    likesCount: "4858",
    caption: "Flowers",
  },
  {
    id: "8",
    userName: "Rohit",
    userPic: user1,
    userPost: user1,
    likesCount: "2723",
    caption: "kaan",
  },
  {
    id: "9",
    userName: "Suyash",
    userPic: user1,
    userPost: user1,
    likesCount: "66855",
    caption: "This app is made by Suyash.",
  },
];

export default function HomeScreen() {
  // Rendering Post with arrays
  const RenderPost = ({ userPostData }) => {
    return userPostData.map((item) => (
      <View>
        <PostUserInfo postImg={item.userPic} uName={item.userName} />
        <Post/>
        <PostActions />
        <PostTexts Count={item.likesCount} uName={item.userName} cap={item.caption}/>
      </View>
    ));
  };

  const [uploadVisible, setUploadVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  return (

    <View style={homeStyles.container}>
      <Modal visible={uploadVisible} onRequestClose={() => { setUploadVisible(!uploadVisible) }}>
        <Upload />
      </Modal>

      <Modal visible={messageVisible} onRequestClose={() => { setMessageVisible(!uploadVisible) }}>
        <Message />
      </Modal>

      <View style={homeStyles.head}>
        <Text style={homeStyles.headText}>Voice Hub</Text>

        <View style={homeStyles.rightTop}>
          <TouchableOpacity style={homeStyles.pactions} onPress={() => { setMessageVisible(true); }}>
            <Icon type="feather" size={28} name={"mail"} />
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.pactions} onPress={() => { setUploadVisible(true); }}>
            <Icon type="feather" size={28} name={"plus"} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Posts */}
        <RenderPost userPostData={userPostData} />
      </ScrollView>
    </View>
  );
}