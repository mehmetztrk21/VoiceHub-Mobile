import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../assets/colors";

import { baseURL } from "../../utils/constants";
import { useUser } from "../../utils/userContext";
import Post from "./post";
import PostActions from "./postActions";
import PostCategories from "./postCategories";
import PostUserInfo from "./postUserInfo";

const RenderPost = ({ navigation, HeaderTitle, setOpenEditPostPopUp, setOpenArchivePopUp, setOpenPopUpPost, post, thisUser }) => {

  const { user } = useUser();

  return (
    <View style={styles.container}>
      {/* User Informations */}
      <PostUserInfo
        navigation={navigation} userPic={post?.createdBy?.profilePhotoUrl ? baseURL + post?.createdBy?.profilePhotoUrl : thisUser?.profilePhotoUrl ? baseURL + thisUser?.profilePhotoUrl : baseURL + user?.profilePhotoUrl}
        userId={post?.createdBy._id} username={post?.createdBy.username || thisUser?.username || user?.username} HeaderTitle={HeaderTitle}
        setOpenArchivePopUp={setOpenArchivePopUp} setOpenEditPostPopUp={setOpenEditPostPopUp} date={post?.createdAt || post?.date}
        id={post?._id} isTic={post?.createdBy?.isTic ? post?.createdBy?.isTic : thisUser?.isTic} setOpenPopUpPost={setOpenPopUpPost} />

      {/* Categories */}
      <View style={{ marginHorizontal: "3%" }}>
        <PostCategories navigation={navigation} categories={post?.categories} title={HeaderTitle} />
      </View>

      {/* Slider and Play Button */}
      <View style={{ paddingLeft: "20%", paddingRight: "2.5%" }}>
        <Post uri={post?.contentUrl} />
      </View>

      {/* Like, Comment and Save Button */}
      <PostActions post={post} navigation={navigation} likes={post?.likes} postId={post?._id} title={HeaderTitle} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginLeft: "5%",
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 20,
    marginVertical: 10,
  },
})

export default RenderPost;