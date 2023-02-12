import React, { useState } from "react";
import { Icon } from "react-native-elements";
import Slider from "./components/slider";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

import Upload from "./modals/upload";
import Message from "./modals/message";
import OtherComments from "./modals/otherComments";

import postUserInfoStyle from "../assets/styles/postUserInfo.style";
import postTextsStyles from "../assets/styles/postTexts.style";
import postActionsStyle from "../assets/styles/postActions.style";
import postStyle from "../assets/styles/post.style";

// Importing User Images
import logo from "../assets/images/VoiceHub-1.png";
//importing styles
import homeStyles from '../assets/styles/home.style';

import userPostData from "./components/userPostData"

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

          <Slider/>
        </View>

        <View style={postActionsStyle.postActions}>

          <TouchableOpacity style={postActionsStyle.pactions} onPress={postLiked}>
            <Icon type="feather" size={"175%"} name={"heart"}/>
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

          {/* User Post Description */}
          <View style={postTextsStyles.textHolder}>
            <Text style={postTextsStyles.userCap}>k.kayserili</Text>
            <Text style={postTextsStyles.captext}>asdsadasfwa</Text>
          </View>

          {(commentCount > 0) ? (
            <View>
              <View style={postTextsStyles.UserComments}>
                <View>
                  {/* Map kullanacagim */}
                  <Text style={postTextsStyles.userCap}>k.kayserili</Text>
                  <Slider/>
                </View>
              </View>

              <View style={postTextsStyles.otherComments}>
                <TouchableOpacity onPress={() => { setShowOtherComments(!showOtherComments) }}>
                  <Text style={postTextsStyles.showOtherComments}>Show Comments</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}





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

    <SafeAreaView style={homeStyles.container}>
        <Upload uploadVisible={uploadVisible}/>
        <OtherComments showOtherComments={showOtherComments}/>
        <Message messageVisible={messageVisible} />

      <View style={homeStyles.head}>
        <Image source={logo} style={{width: "40%", height:"122.5%" }}/>

        <View style={homeStyles.rightTop}>
          <TouchableOpacity style={homeStyles.pactions} onPress={() => { setMessageVisible(!messageVisible);}}>
            <Icon type="feather" size={28} name={"mail"} />
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.pactions} onPress={() => { setUploadVisible(!uploadVisible); }}>
            <Icon type="feather" size={28} name={"plus"} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Posts */}
        <RenderPost userPostData={userPostData} />
      </ScrollView>
    </SafeAreaView>
  );
}