import React from "react";
import { Image, TouchableOpacity, Text } from "react-native";

import recoUserStyle from "../../assets/styles/recoUser.style";

export default function RecUser({ userPic, userName }) {
  return (
      <TouchableOpacity style={recoUserStyle.userListing}>
        <Image source={userPic} style={recoUserStyle.userPic} />
        <Text style={recoUserStyle.userName}>{userName}</Text>
      </TouchableOpacity>
  );
}