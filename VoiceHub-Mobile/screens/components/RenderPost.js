import React from "react";
import { View } from "react-native";

import colors from "../../assets/colors";

import { baseURL } from "../../utils/constants";
import Post from "./post";
import PostActions from "./postActions";
import PostCategories from "./postCategories";
import PostUserInfo from "./postUserInfo";

const RenderPost = ({ navigation, HeaderTitle, setOpenEditPostPopUp, setOpenArchivePopUp, posts, user }) => {

  return posts?.map((item, index) => (
    <View style={{
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
    }} key={index}>

      {/* User Informations */}
      <PostUserInfo
        navigation={navigation} userPic={HeaderTitle == "OtherProfiles" ? baseURL + user?.profilePhotoUrl : item.userPic}
        userId={item.createdBy._id} username={item.username || user?.username} HeaderTitle={HeaderTitle}
        setOpenArchivePopUp={setOpenArchivePopUp} setOpenEditPostPopUp={setOpenEditPostPopUp} date={item.createdAt || item.date}
        id={item.id} isVerify={user?.isVerify} />

      {/* Categories */}
      <View style={{ marginHorizontal: "3%" }}>
        <PostCategories navigation={navigation} categories={item.categories} username={item.username} />
      </View>

      {/* Slider and Play Button */}
      <View style={{ paddingLeft: "20%", paddingRight: "2.5%" }}>
        <Post uri={item.contentUrl} />
      </View>

      {/* Like, Comment and Save Button */}
      <PostActions posts={item} navigation={navigation} username={item.username} likes={item.likes} commentCount={item?.comments?.length} postId={item.id} />

    </View>
  ));
}

export default RenderPost;