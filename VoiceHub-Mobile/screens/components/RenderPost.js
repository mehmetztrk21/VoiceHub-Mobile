import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../assets/colors";

import { baseURL } from "../../utils/constants";
import Post from "./post";
import PostActions from "./postActions";
import PostCategories from "./postCategories";
import PostUserInfo from "./postUserInfo";
import { useUser } from "../../utils/userContext";

const RenderPost = ({ navigation, HeaderTitle, setOpenEditPostPopUp, setOpenArchivePopUp, setOpenPopUpPost, posts, thisUser }) => {

  const { user } = useUser();

  return posts?.map((item, index) => (
    <View style={styles.container} key={index}>

      {/* User Informations */}
      <PostUserInfo
        navigation={navigation} userPic={item.createdBy?.profilePhotoUrl ? baseURL + item.createdBy?.profilePhotoUrl : thisUser?.profilePhotoUrl ? baseURL + thisUser?.profilePhotoUrl : baseURL + user?.profilePhotoUrl}
        userId={item.createdBy._id} username={item.createdBy.username || thisUser?.username || user?.username} HeaderTitle={HeaderTitle}
        setOpenArchivePopUp={setOpenArchivePopUp} setOpenEditPostPopUp={setOpenEditPostPopUp} date={item.createdAt || item.date}
        id={item._id} isTic={item?.createdBy?.isTic ? item?.createdBy?.isTic : thisUser?.isTic} setOpenPopUpPost={setOpenPopUpPost} />

      {/* Categories */}
      <View style={{ marginHorizontal: "3%" }}>
        <PostCategories navigation={navigation} categories={item.categories} title={HeaderTitle} />
      </View>

      {/* Slider and Play Button */}
      <View style={{ paddingLeft: "20%", paddingRight: "2.5%" }}>
        <Post uri={item.contentUrl} />
      </View>

      {/* Like, Comment and Save Button */}
      <PostActions post={item} navigation={navigation} likes={item.likes} postId={item._id} title={HeaderTitle} />

    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: colors.white,
    marginHorizontal: "5%",
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