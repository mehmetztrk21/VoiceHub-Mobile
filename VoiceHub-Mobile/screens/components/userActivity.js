import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import userActivityStyle from "../../assets/styles/userActivity.style";

export default function ActivityBar({navigation, userPic, userName }) {
  return (
    <View style={userActivityStyle.actView}>
      <TouchableOpacity onPress={()=>navigation.push('SeeProfile')}>
        <Image source={userPic} style={userActivityStyle.userPic} />
      </TouchableOpacity>
      <Text style={userActivityStyle.actText}>{userName} liked your Post.</Text>
    </View>
  );
}


