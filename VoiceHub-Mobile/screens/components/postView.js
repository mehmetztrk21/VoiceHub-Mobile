import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import { Icon } from "react-native-elements";
import IconFasw from "react-native-vector-icons/FontAwesome";

export default function PostView({
  userPostPic,
  userPostName,
  userPostPost,
  likesCount,
  caption,
  likeFuction,
  commentFunction,
  sendFunction,
  userid,
  useradmin,
}) {
  const [comment, onChangeComment] = React.useState(null);
  return (
    <View style={styles.postContainer}>
      <View style={styles.postUser}>
        <TouchableOpacity style={styles.userpic}>
          <Image source={userPostPic} style={styles.userpostImg} />
        </TouchableOpacity>
        <Text style={styles.userName}>{userPostName}</Text>
      </View>

      <Image source={userPostPost} style={styles.postimg} />

      <View style={styles.postActions}>
        <TouchableOpacity style={styles.pactions} onPress={likeFuction}>
          <Icon type="feather" size={28} name={"heart"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.pactions} onPress={commentFunction}>
          <Icon type="fontisto" size={28} name={"comments"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.pactions} onPress={sendFunction}>
          <Icon type="feather" size={28} name={"send"} />
        </TouchableOpacity>
      </View>

      <View style={styles.textCounter}>
        <Text style={styles.likesText}>{likesCount} likes</Text>
        <View style={styles.textHolder}>
          <Text style={styles.userCap}>{userid}</Text>
          <Text style={styles.captext}> {caption}</Text>
        </View>
        <View style={styles.postUser}>
          <TouchableOpacity style={styles.userpic}>
            <Image source={useradmin} style={styles.userpostImg} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            onChangeText={onChangeComment}
            value={comment}
            placeholder="Add Comment ..."
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
  },

  postUser: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  userpostImg: {
    height: 30,
    width: 30,
  },
  input: {
    width: "70%",
    borderWidth: 0,
  },

  userName: {
    fontSize: 18,
    fontWeight: "400",
  },
  userpic: {
    width: 30,
    height: 30,

    overflow: "hidden",
    borderRadius: 100,
    backgroundColor: "black",
    marginRight: 10,
  },

  postcaption: {
    fontSize: 15,
    fontWeight: "bold",
  },

  postActions: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
  },

  textCounter: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    marginTop: 0,
  },

  likesText: {
    fontWeight: "bold",
    fontSize: 14,
  },

  textHolder: {
    flex: 1,
    flexDirection: "row",

    marginTop: 0,
  },

  userCap: {
    fontWeight: "bold",
    fontSize: 16,
  },

  captext: {
    fontSize: 16,
  },

  pactions: {
    margin: 10,
  },

  postimg: { width: 389, height: 389 },
});
