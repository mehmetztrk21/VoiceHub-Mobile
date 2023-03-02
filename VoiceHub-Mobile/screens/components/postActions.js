import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";

import postActionsStyle from "../../assets/styles/postActions.style";

export default function postActions({ navigation }) {

  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  const postLiked = () => {
    setLiked(prev => {
      if (!prev == true) {
        console.log("begenildi")
      }
      return !prev
    })
  };

  const postSave = () => {
    setSaved(prev => {
      if (!prev == true) {
        console.log("kaydedildi")
      }
      return !prev
    })
  };

  return (
    <View style={postActionsStyle.postActions}>

      <TouchableOpacity style={postActionsStyle.pactions} onPress={postLiked}>
        {liked == true ? (
          <Icon type="font-awesome" size={20} name={"heart"} color={colors.green} />
        ) :
          <Icon type="font-awesome" size={20} name={"heart-o"} color={"black"} />}

        <Text style={{ fontWeight:"700", marginLeft:5, fontSize:14}}>12087</Text>
      </TouchableOpacity>

      <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.push('OtherComments')}>
        <Icon type="font-awesome" size={20} name={"comment-o"} color={"black"} />
        <Text style={{ fontWeight:"700", marginLeft:5, fontSize:14}}>258</Text>
      </TouchableOpacity>

      <TouchableOpacity style={postActionsStyle.pactions} onPress={postSave}>
        {saved == true ? (
          <Icon type="font-awesome" size={20} name={"bookmark"} color={colors.green} />
        ) :
          <Icon type="font-awesome" size={20} name={"bookmark-o"} color={"black"} />}
      </TouchableOpacity>
    </View>
  );
}