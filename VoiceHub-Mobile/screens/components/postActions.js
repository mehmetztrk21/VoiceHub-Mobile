import React, { useState } from "react";
import { TouchableOpacity, View, } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";

import postActionsStyle from "../../assets/styles/postActions.style";

export default function postActions({navigation}) {

  const [liked,setLiked]=useState(false)
  const [saved,setSaved]=useState(false)
  
  const postLiked = () => {
    setLiked(prev=>{
      if(!prev==true){
        console.log("begenildi")
      }
    return !prev})
  };
  
  const postSave = () => {
    setSaved(prev=>{
      if(!prev==true){
        console.log("kaydedildi")
      }
    return !prev})
  };
  
  return (
    <View style={postActionsStyle.postActions}>

      <TouchableOpacity style={postActionsStyle.pactions} onPress={postLiked}>
        {liked==true?(
          <Icon type="font-awesome" size={28} name={"heart"} color={colors.green}/>
        ):
          <Icon type="font-awesome" size={28} name={"heart-o"} color={"black"}/>}
      </TouchableOpacity>

      <TouchableOpacity style={postActionsStyle.pactions} onPress={() => navigation.push('OtherComments')}>
        <Icon type="font-awesome" size={28} name={"comment-o"}  color={"black"}/>
      </TouchableOpacity>

      <TouchableOpacity style={postActionsStyle.pactions} onPress={postSave}>
      {saved==true?(
          <Icon type="font-awesome" size={28} name={"bookmark"} color={colors.green}/>
        ):
          <Icon type="font-awesome" size={28} name={"bookmark-o"} color={"black"}/>}
      </TouchableOpacity>
    </View>
  );
}