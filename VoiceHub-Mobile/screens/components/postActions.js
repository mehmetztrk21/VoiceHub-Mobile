import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";

import postActionsStyle from "../../assets/styles/postActions.style";

export default function postActions({ navigation, pageName }) {

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
          <Icon type="font-awesome" size={20} name={"heart"} color={pageName === 'ProfileScreen' ? (colors.white) :
            pageName === 'HomeScreen' ? (colors.black) : (null)} />
        ) :
          <Icon type="font-awesome" size={20} name={"heart-o"} color={pageName === 'ProfileScreen' ? (colors.white) :
            pageName === 'HomeScreen' ? (colors.black) : (null)} />}

        <Text style={[{ fontWeight: "700", marginLeft: 5, fontSize: 14 }, {
          color: (pageName === 'ProfileScreen' ? (colors.white) :
            pageName === 'HomeScreen' ? (colors.black) : (null))
        }]}>12087</Text>
      </TouchableOpacity>

      <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.push('OtherComments')}>
        <Icon type="font-awesome" size={20} name={"comment-o"} color={pageName === 'ProfileScreen' ? (colors.white) :
          pageName === 'HomeScreen' ? (colors.black) : (null)} />
        <Text style={[{ fontWeight: "700", marginLeft: 5, fontSize: 14 }, {
          color: (pageName === 'ProfileScreen' ? (colors.white) :
            pageName === 'HomeScreen' ? (colors.black) : (null))
        }]}>258</Text>
      </TouchableOpacity>

      <TouchableOpacity style={postActionsStyle.pactions} onPress={postSave}>
        {saved == true ? (
          <Icon type="font-awesome" size={20} name={"bookmark"} color={pageName === 'ProfileScreen' ? (colors.white) :
            pageName === 'HomeScreen' ? (colors.black) : (null)} />
        ) :
          <Icon type="font-awesome" size={20} name={"bookmark-o"} color={pageName === 'ProfileScreen' ? (colors.white) :
            pageName === 'HomeScreen' ? (colors.black) : (null)} />}
      </TouchableOpacity>
    </View>
  );
}