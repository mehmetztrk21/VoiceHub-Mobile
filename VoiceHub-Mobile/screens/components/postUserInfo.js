import React from "react";
import { Image, Text, View } from "react-native";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";

export default function PostUserInfo({ navigation, userPic, userName}) {
    return (
        <View style={postUserInfoStyle.postUser}>
                <Image style={postUserInfoStyle.userpostImg} source={userPic} onPress={() => navigation.push('SeeProfile')}/>
            <Text style={postUserInfoStyle.userName}>{userName}</Text>
        </View>
    );
}
