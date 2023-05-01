import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { Dimensions } from "react-native";
import colors from "../../assets/colors";
import Post from "../../screens/components/post";
import { useUser } from "../../utils/userContext";

const { width } = Dimensions.get("window");

export default function UserMessageItem({ navigation, userPic, who }) {
  const { user } = useUser();

  return (
    <View style={{ flexDirection: "row" }}>

      {who == "receiver" ? (
        <TouchableOpacity
          onPress={() => {
            user?._id == "item._id" ?
              navigation.navigate("ProfileScreen") :
              navigation.navigate("SeeProfile", { userId: "1" })
          }}>
          <Image source={userPic}
            style={{ width: width * 0.125, height: width * 0.125, borderRadius: width * 0.0675 }} />
        </TouchableOpacity>
      ) : null}

      <View style={[{
        width: width * 0.5, paddingLeft: width * 0.03,
        backgroundColor: colors.white, borderRadius: width * 0.0625, marginLeft: width * 0.03
      }, who == "sender" ? { marginLeft: width * 0.44 } : null]}>
        <Post />
      </View>

    </View>
  );
}