import React from "react";
import { Image, Text, View } from "react-native";
import userActivityStyle from "../../assets/styles/userActivity.style";

export default function ActivityBar({ userPic, userName }) {
  return (
    <View style={userActivityStyle.actView}>
      <Image source={userPic} style={userActivityStyle.userPic} />
      <Text style={userActivityStyle.actText}>{userName} liked your Post.</Text>
    </View>
  );
}


