import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {Icon} from "react-native-elements"
import postTextsStyles from "../../assets/styles/postTexts.style";

export default function postTexts(likesCount, userPic) {
  const [showOtherComments, setShowOtherComments] = useState(false);
  return (
    <View style={postTextsStyles.textCounter}>
          <Text style={postTextsStyles.likesText}>{likesCount.likesCount} likes</Text>

          <View style={postTextsStyles.textHolder}>
            <Text style={postTextsStyles.userCap}>k.kayserili</Text>
            <Text style={postTextsStyles.captext}>asdsadasfwa</Text>
          </View>

          {showOtherComments ? (
            <View>
              <Text style={postTextsStyles.userCap}>k.kayserili</Text>
              <Text style={postTextsStyles.userCap}>k.kayserili</Text>
              <Text style={postTextsStyles.userCap}>k.kayserili</Text>
              <Text style={postTextsStyles.userCap}>k.kayserili</Text>
              {/* Post */}
            </View>
          ) :
            <View style={postTextsStyles.UserComments}>
              <Text style={postTextsStyles.userCap}>k.kayserili</Text>
            </View>
          }

          <View style={postTextsStyles.otherComments}>
            <TouchableOpacity onPress={() => { setShowOtherComments(!showOtherComments) }}>
              <Text style={postTextsStyles.showOtherComments}>Show Other Comments</Text>
            </TouchableOpacity>
          </View>

          <View style={postTextsStyles.addCommentUser}>
            
            <Image style={postTextsStyles.userPostCommentImg} source={userPic.userPic} />
            <TouchableOpacity>
              <Icon type="feather" size={28} name={"mic"} />
            </TouchableOpacity>
          </View>

          <Text style={postTextsStyles.timeAgo}>29 minutes ago</Text>
        </View>
  );
}