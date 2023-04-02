import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";

import { setLikedPost, setSavedPost } from '../../services/actionServices'

import postActionsStyle from "../../assets/styles/postActions.style";
import { baseURL } from "../../utils/constants";

export default function postActions(
  { navigation, posts, likesCount, commentCount, postId }) {

  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likesCount);
  const [saved, setSaved] = useState(false)

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

    await setLikedPost({ postId: postId });

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

    await setSavedPost({ postId: postId });
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
            {true ? (
              <Text style={{ fontWeight: "700", fontSize: 14, marginLeft: 5, color: colors.black }}>
                {likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
            {true ? (
              <Text style={{ fontWeight: "700", fontSize: 14, marginLeft: 5, color: colors.black }}>
                {likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Text>
            ) :
              <Text style={{ fontWeight: "700", fontSize: 14, marginLeft: 5, color: colors.black }}>See Likes</Text>}
          </TouchableOpacity>
        </View>
      }

      {/* Comments */}
      <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.navigate("OtherComments", { postId: postId, comments: posts?.comments })}>
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