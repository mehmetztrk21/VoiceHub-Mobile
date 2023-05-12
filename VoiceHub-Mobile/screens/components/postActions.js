import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";
import { useUser } from "../../utils/userContext"
import { setLikedPost, setSavedPost } from '../../services/actionServices'

import postActionsStyle from "../../assets/styles/postActions.style";

export default function postActions({ navigation, post, likes, postId, title }) {
  const { user, setUser } = useUser();

  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes?.length);
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (likes?.includes(user?._id)) {
      setLiked(true);
    }
    else {
      setLiked(false);
    }

    if (user?.savedPosts?.includes(postId)) {
      setSaved(true);
    }
    else {
      setSaved(false);
    }
  }, [])



  const postLiked = async () => {
    setLiked(prev => {
      if (!prev == true) {
        console.log("beğenildi");
        setLikeCount(prev => prev + 1);
      }
      else {
        console.log("beğenme geri çekildi");
        setLikeCount(prev => prev - 1);

      }
      return !prev;
    })
    await setLikedPost({ postId: postId });
  };

  const postSave = async () => {
    setSaved(prev => {
      if (!prev == true) {
        console.log("kaydedildi");
        let temp = { ...user };
        temp?.savedPosts?.push(postId);
        setUser(temp);
      }
      else {
        console.log("kaydetme geri çekildi");
        let temp = { ...user };
        temp?.savedPosts?.splice(temp?.savedPosts?.indexOf(postId), 1);
        setUser(temp);
      }
      return !prev;
    })
    await setSavedPost({ postId: postId });
  };

  return (
    <View style={postActionsStyle.postActions}>
      {/* Likes */}
      {liked == true ? (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={postActionsStyle.pactions} onPress={postLiked}>
            <Icon type="font-awesome" size={20} name={"heart"} color={colors.green} />
          </TouchableOpacity>

          <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.navigate("SeeLikes", { likes: likes })}>
            {post?.isLikesVisible == true ? (
              <Text style={[title == "seePost" ? { fontWeight: "500", fontSize: 20, marginLeft: 5, color: colors.green, marginRight: 30 } : { fontWeight: "700", fontSize: 14, marginLeft: 5, color: colors.green }]}>
                {likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Text>
            ) :
              <Text style={[title == "seePost" ? { fontWeight: "500", fontSize: 20, marginLeft: 5, color: colors.green, marginRight: 30 } : { fontWeight: "700", fontSize: 14, marginLeft: 5, color: colors.green }]}>See Likes</Text>
            }
          </TouchableOpacity>
        </View>
      ) :
        <View style={{ flexDirection: "row", }}>
          <TouchableOpacity style={postActionsStyle.pactions} onPress={postLiked}>
            <Icon type="font-awesome" size={20} name={"heart-o"} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.navigate("SeeLikes", { likes: likes })}>
            {post?.isLikesVisible == true ? (
              <Text style={[title == "seePost" ? { fontWeight: "500", fontSize: 20, marginLeft: 5, color: colors.black, marginRight: 30 } : { fontWeight: "700", fontSize: 14, marginLeft: 5, color: colors.black }]}>
                {likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Text>
            ) :
              <Text style={[title == "seePost" ? { fontWeight: "500", fontSize: 20, marginLeft: 5, color: colors.black, marginRight: 30 } : { fontWeight: "700", fontSize: 14, marginLeft: 5, color: colors.black }]}>See Likes</Text>}
          </TouchableOpacity>
        </View>
      }

      {/* Comments */}
      {title != "seePost" ? <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.navigate("OtherComments", { postId: postId, comments: post?.comments })}>
        <Icon type="font-awesome" size={20} name={"comment-o"} color={colors.black} />
        <Text style={{ fontWeight: "700", fontSize: 14, marginLeft: 5, color: colors.black }}>
          {post?.comments?.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </TouchableOpacity> : null}

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