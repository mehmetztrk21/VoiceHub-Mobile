import React from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

export default function PostImg({ postImg }) {
  return (
    <TouchableOpacity style={styles.post}>
      <Image source={postImg} style={styles.postImg} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postImg: {
    width: 124,
    height: 124,
  },

  post: {
    margin: 3,
  },
});
