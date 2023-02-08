import React, { useState } from "react";
import { Icon, Slider } from "react-native-elements";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";


import Upload from "./modals/upload";
import Message from "./modals/message";

import postUserInfoStyle from "../assets/styles/postUserInfo.style";
import postTextsStyles from "../assets/styles/postTexts.style";
import postActionsStyle from "../assets/styles/postActions.style";
import postStyle from "../assets/styles/post.style";

// Importing User Images
import user1 from "../assets/userImages/user1.jpg";

//importing styles
import homeStyles from '../assets/styles/home.style';

const userPostData = [
  {
    id: "1",
    userName: "Alex",
    userPic: user1,
    likesCount: "1451",
    caption: "Coffee is the most imp part of my life !",
  },
  {
    id: "2",
    userName: "Martha",
    userPic: user1,
    likesCount: "155",
    caption: "Nothings is better than reading book !",
  },
  {
    id: "3",
    userName: "Aditi",
    userPic: user1,
    likesCount: "77",
    caption: "Waiting for someone to come back !",
  },
  {
    id: "4",
    userName: "Alex",
    userPic: user1,
    likesCount: "7555",
    caption: "Coffee is the most imp part of my life !",
  },
  {
    id: "5",
    userName: "Rohit",
    userPic: user1,
    likesCount: "93578",
    caption: "car",
  },
  {
    id: "6",
    userName: "Rohit",
    userPic: user1,
    likesCount: "5265",
    caption: "rose",
  },
  {
    id: "7",
    userName: "Rohit",
    userPic: user1,
    likesCount: "4858",
    caption: "Flowers",
  },
  {
    id: "8",
    userName: "Rohit",
    userPic: user1,
    likesCount: "2723",
    caption: "kaan",
  },
  {
    id: "9",
    userName: "Suyash",
    userPic: user1,
    likesCount: "66855",
    caption: "This app is made by Suyash.",
  },
];

const Play = () => {
  alert("Played Voice !");
}

const postLiked = () => {
  alert("You Liked this Voice !");
};

const postComment = () => {
  alert("You Commented on this Voice !");
};

const postSave = () => {
  alert("You Saved this Voice !");
};
const commentCount = 3;
export default function HomeScreen() {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [showOtherComments, setShowOtherComments] = useState(false);

  // Rendering Post with arrays
  const RenderPost = ({ userPostData }) => {
    return userPostData.map((item) => (
      <View style={homeStyles.post}>

        <View style={postUserInfoStyle.postUser}>
          <TouchableOpacity style={postUserInfoStyle.userpic}>
            <Image style={postUserInfoStyle.userpostImg} source={item.userPic} />
          </TouchableOpacity>
          <Text style={postUserInfoStyle.userName}>{item.userName}</Text>
        </View>

        <View style={postStyle.post}>
          <TouchableOpacity style={postStyle.playButton} onPress={Play}>
            <Icon type="feather" size={"175%"} name={"play"} />
          </TouchableOpacity>

          <Slider
            style={postStyle.slider}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#1DB954"
            maximumTrackTintColor="#777777"
            thumbTintColor="#1DB954"
          />
        </View>

        <View style={postActionsStyle.postActions}>

          <TouchableOpacity style={postActionsStyle.pactions} onPress={postLiked}>
            <Icon type="feather" size={"175%"} name={"heart"} />
          </TouchableOpacity>

          <TouchableOpacity style={postActionsStyle.pactions} onPress={postComment}>
            <Icon type="fontisto" size={"175%"} name={"comments"} />
          </TouchableOpacity>

          <TouchableOpacity style={postActionsStyle.pactions} onPress={postSave}>
            <Icon type="feather" size={"175%"} name={"save"} />
          </TouchableOpacity>
        </View>

        <View style={postTextsStyles.textCounter}>
          <Text style={postTextsStyles.likesText}>{item.likesCount} likes</Text>

          <View style={postTextsStyles.textHolder}>
            <Text style={postTextsStyles.userCap}>k.kayserili</Text>
            <Text style={postTextsStyles.captext}>asdsadasfwa</Text>
          </View>


          {showOtherComments && commentCount > 2 ? (
            <View>
              <View style={postTextsStyles.otherComments}>
                <TouchableOpacity onPress={() => { setShowOtherComments(!showOtherComments) }}>
                  <Text style={postTextsStyles.showOtherComments}>Show Other Comments</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : commentCount > 2 ? (
            <View>
              <View>
                <Text style={postTextsStyles.userCap}>k.kayserili</Text>
                <Slider
                  style={postStyle.slider}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor="#1DB954"
                  maximumTrackTintColor="#777777"
                  thumbTintColor="#1DB954"
                />
              </View>
              <View>
                <Text style={postTextsStyles.userCap}>k.kayserili</Text>
                <Slider
                  style={postStyle.slider}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor="#1DB954"
                  maximumTrackTintColor="#777777"
                  thumbTintColor="#1DB954"
                />
              </View>

              <View style={postTextsStyles.otherComments}>
                <TouchableOpacity onPress={() => { setShowOtherComments(!showOtherComments) }}>
                  <Text style={postTextsStyles.showOtherComments}>Show Other Comments</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) :
            <View>
              <View>
                <Text style={postTextsStyles.userCap}>k.kayserili</Text>
                <Slider />
              </View>
              <View>
                <Text style={postTextsStyles.userCap}>k.kayserili</Text>
                <Slider />
              </View>
            </View>
          }



          <View style={postTextsStyles.addCommentUser}>

            <Image style={postTextsStyles.userPostCommentImg} source={item.userPic} />
            <TouchableOpacity>
              <Icon type="feather" size={28} name={"mic"} />
            </TouchableOpacity>
          </View>

          <Text style={postTextsStyles.timeAgo}>29 minutes ago</Text>
        </View>

      </View>
    ));
  };
  return (

    <View style={homeStyles.container}>
      <Modal visible={uploadVisible} onRequestClose={() => { setUploadVisible(!uploadVisible) }}>
        <Upload />
      </Modal>

      <Modal visible={messageVisible} onRequestClose={() => { setMessageVisible(!uploadVisible) }}>
        <Message />
      </Modal>

      <Modal visible={showOtherComments}>
        <Text>Other Comments</Text>
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