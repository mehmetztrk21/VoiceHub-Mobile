import React, { useState } from "react";
import {
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
  Modal,
} from "react-native";
import {Icon} from "react-native-elements";

import Slider from "./components/slider"

import verfy from "../assets/ver.png";
import admin from "../assets/userImages/admin.jpg";

import Post from "../screens/components/post";

import OtherComments from "./modals/otherComments";
import Upload from "./modals/upload";
import Saved from "./modals/saved";
import ProfileEdit from "./modals/editProfile";
import Login from "./modals/login";

import profileStyles from '../assets/styles/profile.style';
import postUserInfoStyle from "../assets/styles/postUserInfo.style";
import postTextsStyles from "../assets/styles/postTexts.style";
import postActionsStyle from "../assets/styles/postActions.style";
import postStyle from "../assets/styles/post.style";
import homeStyles from "../assets/styles/home.style";

const userPostData = [
  {
    id: "1",
    userName: "k.kayserili",
    userPic: admin,
    likesCount: "1451",
    caption: "Coffee is the most imp part of my life !",
  },
  {
    id: "2",
    userName: "k.kayserili",
    userPic: admin,
    likesCount: "155",
    caption: "Nothings is better than reading book !",
  },
  {
    id: "3",
    userName: "k.kayserili",
    userPic: admin,
    likesCount: "77",
    caption: "Waiting for someone to come back !",
  },
  {
    id: "4",
    userName: "k.kayserili",
    userPic: admin,
    likesCount: "7555",
    caption: "Coffee is the most imp part of my life !",
  },
  {
    id: "5",
    userName: "k.kayserili",
    userPic: admin,
    likesCount: "93578",
    caption: "car",
  },
  {
    id: "6",
    userName: "k.kayserili",
    userPic: admin,
    likesCount: "5265",
    caption: "rose",
  },
  {
    id: "7",
    userName: "k.kayserili",
    userPic: admin,
    likesCount: "4858",
    caption: "Flowers",
  },
  {
    id: "8",
    userName: "k.kayserili",
    userPic: admin,
    likesCount: "2723",
    caption: "kaan",
  },
  {
    id: "9",
    userName: "k.kayserili",
    userPic: admin,
    likesCount: "66855",
    caption: "This app is made by Suyash.",
  },
];
const isVerified=true;

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
export default function ProfileScreen() {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [saveVisible, setSaveVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [logoutVisible, setLogOutVisible] = useState(false);
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
        <View style={profileStyles.container}>
          <Modal visible={uploadVisible} onRequestClose={()=>{setUploadVisible(!uploadVisible)}}>
            <Upload/>
          </Modal>

          <Modal visible={saveVisible} onRequestClose={()=>{setSaveVisible(!saveVisible)}}>
            <Saved/>
          </Modal>

          <Modal visible={editVisible} onRequestClose={()=>{setEditVisible(!editVisible)}}>
            <ProfileEdit/>
          </Modal>

          <Modal visible={logoutVisible} onRequestClose={()=>{setLogOutVisible(!logoutVisible)}}>
            <Login/>
          </Modal>

          <Modal visible={showOtherComments} onRequestClose={()=>{setShowOtherComments(!showOtherComments)}}>
            <OtherComments/>
          </Modal>

          <View style={profileStyles.aHeadView}>

            <View style={profileStyles.leftTop}>
              <Text style={profileStyles.head}>k.kayserili</Text>
              {isVerified?(
                <Image source={verfy} style={profileStyles.ver}/>
              ):null}
            </View>

            <View style={profileStyles.rightTop}>
              <TouchableOpacity style={profileStyles.pactions} onPress={() => { setSaveVisible(!saveVisible); }}>
                <Icon type="feather" size={28} name={"save"} />
              </TouchableOpacity>

              <TouchableOpacity style={profileStyles.pactions} onPress={() => { setUploadVisible(!uploadVisible); }}>
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
              <Text style={profileStyles.name}>Kaan Kayserili</Text>
              <Post />{/*User Bio*/}
            </View>

            {/* Edit Profile Buttons */}
            <View style={profileStyles.btnHolder}>
              <TouchableOpacity style={profileStyles.editProfile} onPress={()=>{setEditVisible(!editVisible);}}>
                <Text style={profileStyles.btnTextF}>Edit Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity style={profileStyles.logOut} onPress={()=>{setLogOutVisible(!logoutVisible);}}>
                <Text style={profileStyles.btnTextF}>Log Out</Text>
              </TouchableOpacity>
            </View>

            {/* Posts */}

            <View style={profileStyles.postView}>
              <RenderPost userPostData={userPostData}/>
            </View>
          </ScrollView>
        </View>
  );
}


