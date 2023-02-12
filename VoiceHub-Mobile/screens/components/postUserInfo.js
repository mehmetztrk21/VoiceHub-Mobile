import React from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";

export default function PostUserInfo(userPic, userName){
    return (
        <View style={postUserInfoStyle.postUser}>
            <TouchableOpacity style={postUserInfoStyle.clickUserPic}>
                <Image style={postUserInfoStyle.userpostImg} source={userPic.userPic}/>
            </TouchableOpacity>
            <Text style={postUserInfoStyle.userName}>{userName.userName}</Text>
        </View>
    );
}
