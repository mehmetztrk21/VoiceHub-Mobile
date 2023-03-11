import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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


      {liked == true ? (
        <View style={{ flexDirection: "row", }}>
          <TouchableOpacity style={postActionsStyle.pactions} onPress={postLiked}>
            <Icon type="font-awesome" size={20} name={"heart"} color={colors.green} />
          </TouchableOpacity>
          <TouchableOpacity style={postActionsStyle.pactions} onPress={()=>navigation.navigate('SeeLikes',{title:'Likes'})}>
            <Text style={{ fontWeight: "700", marginLeft: 5, fontSize: 14, color: colors.green }}>12087</Text>
          </TouchableOpacity>
        </View>
      ) :
        <View style={{ flexDirection: "row", }}>
          <TouchableOpacity style={postActionsStyle.pactions} onPress={postLiked}>
            <Icon type="font-awesome" size={20} name={"heart-o"} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={postActionsStyle.pactions} onPress={()=>navigation.navigate('SeeLikes',{title:'Likes'})}>
            <Text style={{ fontWeight: "700", marginLeft: 5, fontSize: 14, color: colors.black }}>12087</Text>
          </TouchableOpacity>
        </View>
      }

      <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.push('OtherComments')}>
        <Icon type="font-awesome" size={20} name={"comment-o"} color={colors.black} />
        <Text style={{ fontWeight: "700", marginLeft: 5, fontSize: 14, color: colors.black }}>258</Text>
      </TouchableOpacity>

      <TouchableOpacity style={postActionsStyle.pactions} onPress={postSave}>
        {saved == true ? (
          <Icon type="font-awesome" size={20} name={"bookmark"} color={colors.green} />
        ) :
          <Icon type="font-awesome" size={20} name={"bookmark-o"} color={colors.black} />}
      </TouchableOpacity>
    </View>
  );
}