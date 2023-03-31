import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";

import { setLikedPost, setSavedPost } from '../../services/actionServices'

import postActionsStyle from "../../assets/styles/postActions.style";

export default function postActions(
  { navigation, isLiked, isSaved, showLike, likesCount, commentCount, id, setId }) {

  const [liked, setLiked] = useState(isLiked)
  const [likeCount, setLikeCount] = useState(likesCount);
  const [saved, setSaved] = useState(isSaved)

  const postLiked = async () => {
    setLiked(prev => {
      if (!prev == true) {
        console.log("beğenildi");

      }
      else {
        console.log("beğenme geri çekildi");

      }
      return !prev;
    })

    const response = await setLikedPost({ postId: id });
    if (response && response.success) {
      let temp = response.data.map((item) => {
        return {
          id: item._id,
          contentUrl: item.contentUrl,
          categories: item.categories,
          userName: "Mehmet",
          createdBy: item.createdBy,
          createdAt: item.createdAt,
          userPic: "user1",
          likesCount: 1451,
          caption: "Coffee is the most imp part of my life !",
          type: "sender",
          visible: true,
          category: "all",
          showLike: false,
          isSaved: false,
          isLiked: true,
          date: "12/02/2023 12:41",
          isYourFollower: true,
          isYouFollowing: true,
          commentCount: 12,
          hasBio: false,
          isVerify: false,
        }
      });
      setId(false);
      setPosts(temp);
    }
  };

  const postSave = async () => {
    setSaved(prev => {
      if (!prev == true) {
        console.log("kaydedildi");

      }
      else {
        console.log("kaydetme geri çekildi");

      }
      return !prev;
    })

    const response = await setSavedPost({ postId: id });
    if (response && response.success) {
      let temp = response.data.map((item) => {
        return {
          id: item._id,
          contentUrl: item.contentUrl,
          categories: item.categories,
          userName: "Mehmet",
          createdBy: item.createdBy,
          createdAt: item.createdAt,
          userPic: "user1",
          likesCount: 1451,
          caption: "Coffee is the most imp part of my life !",
          type: "sender",
          visible: true,
          category: "all",
          showLike: false,
          isSaved: false,
          isLiked: true,
          date: "12/02/2023 12:41",
          isYourFollower: true,
          isYouFollowing: true,
          commentCount: 12,
          hasBio: false,
          isVerify: false,
        }
      });
      setId(false);
      setPosts(temp);
    }
  };

  return (
    <View style={postActionsStyle.postActions}>
      {/* Likes */}
      {liked == true ? (
        <View style={{ flexDirection: "row", }}>
          <TouchableOpacity style={postActionsStyle.pactions} onPress={postLiked}>
            <Icon type="font-awesome" size={20} name={"heart"} color={colors.green} />
          </TouchableOpacity>

          <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.navigate("SeeLikes")}>
            {showLike ? (
              <Text style={{ fontWeight: "700", fontSize: 14, marginLeft: 5, color: colors.black }}>
                {likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </Text>
            ) :
              <Text style={{ fontWeight: "700", fontSize: 14, marginLeft: 5, color: colors.black }}>See Likes</Text>
            }
          </TouchableOpacity>
        </View>
      ) :
        <View style={{ flexDirection: "row", }}>
          <TouchableOpacity style={postActionsStyle.pactions} onPress={postLiked}>
            <Icon type="font-awesome" size={20} name={"heart-o"} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.navigate("SeeLikes")}>
            {showLike ? (
              <Text style={{ fontWeight: "700", fontSize: 14, marginLeft: 5, color: colors.black }}>
                {likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Text>
            ) :
              <Text style={{ fontWeight: "700", fontSize: 14, marginLeft: 5, color: colors.black }}>See Likes</Text>}
          </TouchableOpacity>
        </View>
      }

      {/* Comments */}
      <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.navigate("OtherComments")}>
        <Icon type="font-awesome" size={20} name={"comment-o"} color={colors.black} />
        <Text style={{ fontWeight: "700", marginLeft: 5, fontSize: 14, color: colors.black }}>
          {commentCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </TouchableOpacity>

      {/* Save */}
      <TouchableOpacity style={postActionsStyle.pactions} onPress={postSave}>
        {
          saved == true ? (
            <Icon type="font-awesome" size={20} name={"bookmark"} color={colors.green} />
          ) :
            <Icon type="font-awesome" size={20} name={"bookmark-o"} color={colors.black} />
        }
      </TouchableOpacity>
    </View>
  );
}