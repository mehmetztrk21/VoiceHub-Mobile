import React, { useState } from "react";
import { Icon } from "react-native-elements";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import PostView from "../screens/components/postView";

// Importing User Images
import user1 from "../assets/userImages/user1.jpg";
import admin from "../assets/userImages/admin.jpg";

//importing styles
import homeStyles from '../assets/styles/home.style';

import Upload from "../screens/upload";
import Message from "../screens/message";

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
    likesCount: "1451",
    caption: "Nothings is better than reading book !",
  },
  {
    id: "3",
    userName: "Aditi",
    userPic: user1,
    userPost: user1,
    likesCount: "1451",
    caption: "Waiting for someone to come back !",
  },
  {
    id: "4",
    userName: "Alex",
    userPic: user1,
    userPost: user1,
    likesCount: "1451",
    caption: "Coffee is the most imp part of my life !",
  },
  {
    id: "5",
    userName: "Rohit",
    userPic: user1,
    userPost: user1,
    likesCount: "1451",
    caption: "Flowers",
  },
  {
    id: "6",
    userName: "Rohit",
    userPic: user1,
    userPost: user1,
    likesCount: "1451",
    caption: "Flowers",
  },
  {
    id: "7",
    userName: "Rohit",
    userPic: user1,
    userPost: user1,
    likesCount: "1451",
    caption: "Flowers",
  },
  {
    id: "8",
    userName: "Rohit",
    userPic: user1,
    userPost: user1,
    likesCount: "1451",
    caption: "Flowers",
  },
  {
    id: "9",
    userName: "Suyash",
    userPic: user1,
    userPost: user1,
    likesCount: "1451",
    caption: "This app is made by Suyash.",
  },
];

export default function HomeScreen() {


  // Rendering Post with arrays
  const RenderPost = ({ PostData }) => {
    return PostData.map((item) => (

      <PostView
        key={item.id}
        userPostPic={item.userPic}
        userPostName={item.userName}
        userPostPost={item.userPost}
        likesCount={item.likesCount}
        userid={item.userName.toLowerCase()}
        useradmin={admin}
        caption={item.caption}
      />
    ));
  };

  const [uploadVisible, setUploadVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  return (

    <View>

      {messageVisible ? (
        <Message />
      ) : uploadVisible ? (
        <Upload />
      ) :
        <View style={homeStyles.container}>
          <View style={homeStyles.head}>
            <Text style={homeStyles.headText}>Voice Hub</Text>

            <View style={homeStyles.rightTop}>
              <TouchableOpacity style={homeStyles.pactions} onPress={() => { setMessageVisible(true) }}>
                <Icon type="feather" size={28} name={"mail"} />
              </TouchableOpacity>

              <TouchableOpacity style={homeStyles.pactions} onPress={() => { setUploadVisible(true); }}>
                <Icon type="feather" size={28} name={"plus"} />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* User Posts */}
            <RenderPost PostData={userPostData} />
          </ScrollView>
        </View>
      }

    </View>
  );
}