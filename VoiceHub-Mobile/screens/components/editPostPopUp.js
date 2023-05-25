import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Share } from "react-native";

import { Ionicons } from '@expo/vector-icons';


import colors from "../../assets/colors.js";
import editPostPopUpStyle from "../../assets/styles/editPostPopUp.style";

import { setArchivePost, setSeeLikes, } from "../../services/actionServices";
import { deletePost, getPostById } from "../../services/postServices.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const editPostPopUp = ({ navigation, id, setId, setOpenEditCategoriesPopUp }) => {

  const [post, setPost] = useState({});

  const setArchive = async () => {
    await setArchivePost({ id: id });
    setId(false);
  }

  const setSeeLike = async () => {
    await setSeeLikes({ postId: id });
    setId(false);
  }

  const deleteThisPost = async () => {
    await deletePost({ id: id });
    setId(false);
  }

  const shareThisPost = async () => {
    try {
      Share.share({
        message: "https://github.com/mehmetztrk21/VoiceHub-Mobile/",
      });
    } catch (error) {
      console.error('Share error:', error);
    }
  }

  useEffect(() => {
    getPostById({ postId: id }).then(async (res) => {
      if (res?.message == "Unauthorized") {
        await AsyncStorage.clear();
        navigation.navigate("Login");
      }
      else {
        setPost(res?.data);
      }
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <View style={editPostPopUpStyle.container}>
      <View style={editPostPopUpStyle.container2}>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }} onPress={() => {
          setOpenEditCategoriesPopUp(post?.categories ? [post?.categories, id] : false); setId(false);
        }}>
          <Ionicons name={"pencil"} size={28} color={colors.white} />
          <Text style={editPostPopUpStyle.button}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }} onPress={shareThisPost}>
          <Ionicons name={"share-outline"} size={28} color={colors.white} />
          <Text style={editPostPopUpStyle.button}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }} onPress={setSeeLike}>
          <Ionicons name={"heart-sharp"} size={28} color={colors.white} />
          {post?.isLikesVisible == true ?
            <Text style={editPostPopUpStyle.button}>Unshow Likes Count</Text> :
            <Text style={editPostPopUpStyle.button}>Show Likes Count</Text>}
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }} onPress={setArchive}>
          <Ionicons name={"archive"} size={28} color={colors.white} />
          <Text style={editPostPopUpStyle.button}>Archive</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }} onPress={deleteThisPost}>
          <Ionicons name={"trash"} size={28} color={colors.red} />
          <Text style={[editPostPopUpStyle.button, { color: colors.red }]}>Delete</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setId(false) }}>
          <Text style={{
            color: colors.green, fontSize: 14, textAlign: "center", fontWeight: "600",
            backgroundColor: colors.white, padding: 10, borderRadius: 10,
          }}>Close</Text>
        </TouchableOpacity>
      </View>
    </View >
  )

}

export default editPostPopUp