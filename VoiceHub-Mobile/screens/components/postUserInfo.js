import React from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";

export default function PostUserInfo({ navigation, userPic, userName }) {
    return (
        <View style={postUserInfoStyle.postUser}>
            <TouchableOpacity style={postUserInfoStyle.clickUserPic} onPress={() => navigation.push('SeeProfile')}>
                <Image style={postUserInfoStyle.userpostImg} source={userPic} />
                <Text style={postUserInfoStyle.userName}>{userName}</Text>
            </TouchableOpacity>
        </View>
    );
}
