import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../assets/colors";

import Post from "./post";
import PostActions from "./postActions";
import PostCategories from "./postCategories";
import PostUserInfo from "./postUserInfo";
import userPostData from "./userPostData";
import user1 from "../../assets/userImages/user1.jpg";

//User"s Local Storage"s infos
const user = {
  name: "Mehmet",
  surname: "Öztürk",
  username: "mehmet.ztrk"
} //TODO: get in localStorage
const username = user.username;

const RenderPost = ({ navigation, HeaderTitle, setOpenEditPostPopUp, setOpenArchivePopUp, posts }) => {
useEffect(() => {
  console.log("posts", posts)
}, [])


  return posts?.map((item,index) => (
    <View style={[styles.container]} key={index}>

      {/* User Informations */}
      <PostUserInfo
        navigation={navigation} userPic={user1}
        userName={item.userName} HeaderTitle={HeaderTitle}
        setOpenArchivePopUp={setOpenArchivePopUp}
        setOpenEditPostPopUp={setOpenEditPostPopUp}
        visible={item.visible} date={item.createdAt || item.date}
        isVerify={item.isVerify} isYouFollowing={item.isYouFollowing}
        isYourFollower={item.isYourFollower} hasBio={item.hasBio} />

      {/* Categories */}
      <View style={{ marginHorizontal: "3%" }}>
        <PostCategories navigation={navigation} categories={item.categories} username={username} />
      </View>

      {/* Slider and Play Button */}
      <View style={{ paddingLeft: "20%", paddingRight: "2.5%" }}>
        <Post uri={item.contentUrl} />
      </View>

      {/* Like, Comment and Save Button */}
      <PostActions navigation={navigation} isLiked={item.isLiked} isSaved={item.isSaved} showLike={item.showLike} likesCount={item.likesCount} commentCount={item.commentCount} />

    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: colors.white,
    marginHorizontal: "5%",
    shadowColor: colors.darkGray,
    shadowOffset: {
      width: 0,
      height: 2,

    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 20,
    marginVertical: 10,

  },
})

export default RenderPost