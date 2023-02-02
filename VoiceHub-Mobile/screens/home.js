import React from "react";
import {
  Image,
  Dimensions,
  homeStyleheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";

import StoryView from "../screens/components/storyView";
import PostView from "../screens/components/postView";

// Importing Posts
import mypost from "../assets/images/mypost.jpg";
import post1 from "../assets/images/post1.jpg";
import post2 from "../assets/images/post2.jpg";
import post3 from "../assets/images/post3.jpg";

import { homeStyle } from "../styles/styles";

// Importing User Images
import user1 from "../assets/userImages/user1.jpg";
import user2 from "../assets/userImages/user2.jpg";
import user3 from "../assets/userImages/user3.jpg";
import admin from "../assets/userImages/admin.jpg";
import rohitpic from "../assets/userImages/rohit.jpg";
import aditi from "../assets/userImages/aditi.jpg";

// Arrays for Story and posts
const UserStoryData = [
  { id: "1", userName: "Your Story", userPic: admin },
  { id: "2", userName: "Alex", userPic: user1 },
  { id: "3", userName: "Synthia", userPic: user2 },
  { id: "4", userName: "Martha", userPic: user3 },
  { id: "5", userName: "Rohit", userPic: rohitpic },
  { id: "6", userName: "Aditi", userPic: aditi },
];

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

const openStory = () => {
  alert("You user Viewed his Story !");
  // do something
};

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
  // Rendering Stories with Array
  const RenderStory = ({ item }) => (
    <StoryView
      storyFunction={openStory}
      userProfilePic={item.userPic}
      userProfileName={item.userName}
    />
  );

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
    <View style={homeStyle.container}>
      <View style={homeStyle.head}>
        <Text style={homeStyle.headText}>Instagram</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Story */}
        <FlatList
          horizontal={true}
          data={UserStoryData}
          renderItem={RenderStory}
          keyExtractor={(item) => item.id}
          style={homeStyle.storyContainer}
          showsHorizontalScrollIndicator={false}
        />

        {/* User Posts */}
        <RenderPost PostData={userPostData} />
      </ScrollView>
    </View>
  );
}


