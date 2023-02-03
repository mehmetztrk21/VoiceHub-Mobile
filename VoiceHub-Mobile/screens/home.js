import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import PostView from "../screens/components/postView";

// Importing Posts
import mypost from "../assets/images/mypost.jpg";
import post1 from "../assets/images/post1.jpg";
import post2 from "../assets/images/post2.jpg";
import post3 from "../assets/images/post3.jpg";

// Importing User Images
import user1 from "../assets/userImages/user1.jpg";
import user2 from "../assets/userImages/user2.jpg";
import user3 from "../assets/userImages/user3.jpg";
import admin from "../assets/userImages/admin.jpg";
import rohitpic from "../assets/userImages/rohit.jpg";
import aditi from "../assets/userImages/aditi.jpg";

//importing styles
import homeStyles from '../assets/styles/home.style';

const userPostData = [
  {
    id: "1",
    userName: "Alex",
    userPic: user1,
    userPost: post1,
    likesCount: "1451",
    caption: "Coffee is the most imp part of my life !",
  },
  {
    id: "2",
    userName: "Martha",
    userPic: user3,
    userPost: post2,
    likesCount: "1451",
    caption: "Nothings is better than reading book !",
  },
  {
    id: "3",
    userName: "Aditi",
    userPic: aditi,
    userPost: post3,
    likesCount: "1451",
    caption: "Waiting for someone to come back !",
  },
  {
    id: "4",
    userName: "Alex",
    userPic: user1,
    userPost: post1,
    likesCount: "1451",
    caption: "Coffee is the most imp part of my life !",
  },
  {
    id: "5",
    userName: "Rohit",
    userPic: rohitpic,
    userPost: post3,
    likesCount: "1451",
    caption: "Flowers",
  },
  {
    id: "6",
    userName: "Suyash",
    userPic: admin,
    userPost: mypost,
    likesCount: "1451",
    caption: "This app is made by Suyash.",
  },
];

const postLiked = () => {
  alert("You liked this Post !");
};

const postComment = () => {
  alert("You Commented on this Post !");
};

const postSend = () => {
  alert("You Sent this Post !");
};

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
        likeFuction={postLiked}
        commentFunction={postComment}
        sendFunction={postSend}
      />
    ));
  };

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.head}>
        <Text style={homeStyles.headText}>Voice Hub</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>        
        {/* User Posts */}
        <RenderPost PostData={userPostData} />
      </ScrollView>
    </View>
  );
}


