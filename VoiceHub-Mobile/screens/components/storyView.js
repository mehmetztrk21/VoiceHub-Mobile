import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function StoryView({
  storyFunction,
  userProfilePic,
  userProfileName,
}) {
  return (
    <View style={styles.storyView}>
      <TouchableOpacity style={styles.storyButtom} onPress={storyFunction}>
        <Image source={userProfilePic} style={styles.userstoryImg} />
      </TouchableOpacity>
      <Text>{userProfileName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  storyView: {
    margin: 20,
    marginRight: 0,
    alignItems: "center",
  },

  userstoryImg: {
    width: 60,
    height: 60,
  },

  storyButtom: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    overflow: "hidden",
    borderRadius: 100,
    backgroundColor: "black",

    borderWidth: 3,
    borderColor: "#f542ad",
  },
});
