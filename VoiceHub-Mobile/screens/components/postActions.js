import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";

import postActionsStyle from "../../assets/styles/postActions.style";

export default function postActions({ navigation, isLiked, isSaved, showLike, likesCount, commentCount }) {

  const [liked, setLiked] = useState(isLiked)
  const [likeCount, setLikeCount] = useState(likesCount);
  const [saved, setSaved] = useState(isSaved)

  const postLiked = () => {
    setLiked(prev => {
      if (!prev == true) {
        console.log("begenildi");
        setLikeCount(likeCount => likeCount + 1);
      }
      else {
        console.log("beğeni geri çekildi");
        setLikeCount(likeCount => likeCount - 1);
      }
      return !prev;
    })
  };

  const postSave = () => {
    setSaved(prev => {
      if (!prev == true) {
        console.log("kaydedildi")
      }
      else {
        console.log("kaydetme geri çekildi")
      }
      return !prev;
    })
  };

  return (
    <View style={postActionsStyle.postActions}>
      {/* Likes */}
      {liked == true ? (
        <View style={{ flexDirection: "row", }}>
          <TouchableOpacity style={postActionsStyle.pactions} onPress={postLiked}>
            <Icon type="font-awesome" size={20} name={"heart"} color={colors.green} />
          </TouchableOpacity>

          <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.navigate("SeeLikes", { title: "Likes" })}>
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

          <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.navigate("SeeLikes", { title: "Likes" })}>
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
      <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.push("OtherComments")}>
        <Icon type="font-awesome" size={20} name={"comment-o"} color={colors.black} />
        <Text style={{ fontWeight: "700", marginLeft: 5, fontSize: 14, color: colors.black }}>
          {commentCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </TouchableOpacity>

      {/* Save */}
      <TouchableOpacity style={postActionsStyle.pactions} onPress={postSave}>
        {saved == true ? (
          <Icon type="font-awesome" size={20} name={"bookmark"} color={colors.green} />
        ) :
          <Icon type="font-awesome" size={20} name={"bookmark-o"} color={colors.black} />}
      </TouchableOpacity>
    </View>
  );
}