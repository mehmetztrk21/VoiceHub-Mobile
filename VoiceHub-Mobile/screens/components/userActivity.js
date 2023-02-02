import React from "react";
import { StyleSheet, Image, ScrollView, Text, View } from "react-native";

export default function ActivityBar({ userPic, userName }) {
  return (
    <View style={styles.actView}>
      <Image source={userPic} style={styles.userPic} />
      <Text style={styles.actText}>{userName} liked your Post.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  actView: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },

  userPic: {
    width: 50,
    height: 50,

    borderRadius: 15,
    margin: 10,
    marginLeft: 4,
    marginVertical: 3,
  },

  actText: {
    fontSize: 16,
  },
});
