import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../assets/colors";

import Post from "./post";
import PostActions from "./postActions";
import PostCategories from "./postCategories";
import PostUserInfo from "./postUserInfo";

const RenderPost = ({ navigation, HeaderTitle, setOpenEditPostPopUp, setOpenArchivePopUp, posts }) => {


  useEffect(() => {
    console.log(posts)
  }, [])

  return posts?.map((item, index) => (
    <View style={styles.container} key={index}>

      {/* User Informations */}
      <PostUserInfo
        navigation={navigation} userPic={item.userPic} userId={item.createdBy._id}
        userName={item.userName} HeaderTitle={HeaderTitle} setOpenArchivePopUp={setOpenArchivePopUp}
        setOpenEditPostPopUp={setOpenEditPostPopUp} date={item.createdAt || item.date} id={item.id} />

      {/* Categories */}
      <View style={{ marginHorizontal: "3%" }}>
        <PostCategories navigation={navigation} categories={item.categories} username={item.userName} />
      </View>

      {/* Slider and Play Button */}
      <View style={{ paddingLeft: "20%", paddingRight: "2.5%" }}>
        <Post uri={item.contentUrl} />
      </View>

      {/* Like, Comment and Save Button */}
      <PostActions posts={item} navigation={navigation} userName={item.userName} likesCount={item.likesCount} commentCount={item.commentCount} postId={item.id} />

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

export default RenderPost;