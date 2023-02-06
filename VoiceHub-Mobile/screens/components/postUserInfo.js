import React from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";

export default function PostUserInfo(postImg){
    return (
        <View style={postUserInfoStyle.postUser}>
            <TouchableOpacity style={postUserInfoStyle.userpic}>
                <Image style={postUserInfoStyle.userpostImg} source={postImg}/>
            </TouchableOpacity>
            <Text style={postUserInfoStyle.userName}>k.kayserili</Text>
        </View>
    );
}
