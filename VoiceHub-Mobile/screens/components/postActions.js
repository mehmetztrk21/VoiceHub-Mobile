import React from "react";
import { TouchableOpacity, View, } from "react-native";
import { Icon } from "react-native-elements";

import postActionsStyle from "../../assets/styles/postActions.style";

const postLiked = () => {
  alert("You Liked this Voice !");
};

const postComment = () => {
  alert("You Commented on this Voice !");
};

const postSave = () => {
  alert("You Saved this Voice !");
};


export default function postActions() {
  return (
    <View style={postActionsStyle.postActions}>

      <TouchableOpacity style={postActionsStyle.pactions} onPress={postLiked}>
        <Icon type="feather" size={"175%"} name={"heart"} />
      </TouchableOpacity>

      <TouchableOpacity style={postActionsStyle.pactions} onPress={postComment}>
        <Icon type="fontisto" size={"175%"} name={"comments"} />
      </TouchableOpacity>

      <TouchableOpacity style={postActionsStyle.pactions} onPress={postSave}>
        <Icon type="feather" size={"175%"} name={"save"} />
      </TouchableOpacity>
    </View>
  );
}