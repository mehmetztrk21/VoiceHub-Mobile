import React from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";

import recoUserStyle from "../../assets/styles/recoUser.style";

export default function RecUser({ userPic, userName }) {
  return (
    <TouchableOpacity style={recoUserStyle.userListing}>
      <Image source={userPic} style={recoUserStyle.userPic} />
      <View style={recoUserStyle.userTexts}>
        <Text style={recoUserStyle.userName}>{userName}</Text>
        <Text style={recoUserStyle.userJointFollowers}>k.kayserili ve 5 diğer kişi takip ediyor.</Text>
      </View>
    </TouchableOpacity>
  );
}