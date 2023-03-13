import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import Post from "../components/post";

import commentStyle from "../../assets/styles/comment.style";

import { Dimensions } from "react-native";
import colors from "../../assets/colors";

const { width } = Dimensions.get('window');

export default function Comment({ navigation, userPic, userName }) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", padding:width*0.0125 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile', { uName: userName, isYourProfile: true })}>
                <Image source={userPic}
                    style={{ width: width * 0.125, height: width * 0.125, borderRadius: width * 0.0675 }} />
            </TouchableOpacity>

            <View style={{ width: width * 0.75, flexDirection:'column', paddingLeft:width*0.03 }}>
                <Text>{userName}</Text>
                <Post />
            </View>
        </View>
    );
}