import React from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import { Icon } from "react-native-elements";

import postViewStyle from "../../assets/styles/postView.style";

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
    <View style={postViewStyle.postContainer}>

      {/* Users Info (pp and username) */}
      <View style={postViewStyle.postUser}>
        <TouchableOpacity style={postViewStyle.userpic}>
          <Image source={userPostPic} style={postViewStyle.userpostImg} />
        </TouchableOpacity>
        <Text style={postViewStyle.userName}>{userPostName}</Text>
      </View>


      {/* Voices are here */}
      <Image source={userPostPost} style={postViewStyle.postimg} />


      {/* Post's like, comment and save buttons are here*/}
      <View style={postViewStyle.postActions}>

        <TouchableOpacity style={postViewStyle.pactions} onPress={likeFuction}>
          <Icon type="feather" size={28} name={"heart"} />
        </TouchableOpacity>

        <TouchableOpacity style={postViewStyle.pactions} onPress={commentFunction}>
          <Icon type="fontisto" size={28} name={"comments"} />
        </TouchableOpacity>

        <TouchableOpacity style={postViewStyle.pactions} onPress={sendFunction}>
          <Icon type="feather" size={28} name={"send"} />
        </TouchableOpacity>
      </View>



      <View style={postViewStyle.textCounter}>
        {/*Posts Like Count*/}
        <Text style={postViewStyle.likesText}>{likesCount} likes</Text>

        {/*User Name and User Caption*/}
        <View style={postViewStyle.textHolder}>
          <Text style={postViewStyle.userCap}>{userid}</Text>
          <Text style={postViewStyle.captext}> {caption}</Text>
        </View>

        {/*User Add Comment View*/}
        <View style={postViewStyle.commentUser}>
          {/* Voice Recorder's PP is here */}
          <Image source={useradmin} style={postViewStyle.userPostCommentImg} />

          {/* Voice Recorder for comments is here */}

        </View>

        <Text style={postViewStyle.timeAgo}>29 minutes ago</Text>
      </View>
    </View>
  );
}


