import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";

export default function RecUser({ userPic, userName }) {
  return (
    <TouchableOpacity style={styles.userListing}>
      <Image source={userPic} style={styles.userPic} />
      <Text style={styles.userName}>{userName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  userListing: {
    margin: 10,
    height: 200,
    width: 160,
    backgroundColor: "white",
    borderRadius: 25,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 4,

    alignItems: "center",
    justifyContent: "center",
  },

  userPic: {
    width: "70%",
    height: "60%",
    resizeMode: "stretch",
    borderRadius: 20,
    marginBottom: 10,
  },

  userName: {
    fontSize: 18,
  },
});
