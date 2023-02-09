import React from "react";
import { View, Image } from "react-native";

import Post from "../components/post";

import user1 from "../../assets/userImages/user1.jpg";
import commentStyle from "../../assets/styles/comment.style";

export default function OtherComments() {
    return (
        <View style={commentStyle.container}>
            <Image source={user1} style={commentStyle.ProfilePhoto}/>
            <Post/>
        </View>
    );
}