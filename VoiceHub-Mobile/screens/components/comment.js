import React from "react";
import { Image, Text, View } from "react-native";

import Post from "../components/post";

import commentStyle from "../../assets/styles/comment.style";

export default function Comment({ navigation, userPic, userName }) {
    return (
        <View style={commentStyle.container}>
            <Image source={userPic} style={commentStyle.ProfilePhoto} />

            <View style={{ flexDirection: 'column', paddingLeft: '2.5%', width: "60%" }}>
                <View style={{flexDirection:'row'}}>
                    <Text style={commentStyle.userName} onPress={() => navigation.navigate('Profile', { uName: userName, isYourProfile: true })}>{userName}</Text>
                    <Text style={commentStyle.date}>12d</Text>
                </View>
                <Post />
            </View>


        </View>
    );
}

//onPress={() => navigation.navigate('Profile', { uName: userName, isYourProfile: true })}