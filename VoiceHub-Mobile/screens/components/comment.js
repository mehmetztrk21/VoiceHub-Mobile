import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import ver from "../../assets/ver.png";
import Post from "../components/post";

import { Dimensions } from "react-native";
const { width } = Dimensions.get('window');

export default function Comment({ navigation, userPic, userName, isVerify }) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", padding: width * 0.0125 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile', { uName: userName, isYourProfile: true })}>
                <Image source={userPic}
                    style={{ width: width * 0.125, height: width * 0.125, borderRadius: width * 0.0675 }} />
            </TouchableOpacity>

            <View style={{ width: width * 0.75, flexDirection: 'column', paddingLeft: width * 0.03 }}>
                <View style={{ flexDirection: "row", alignItems:"center" }}>
                    <Text>{userName}</Text>
                    {isVerify ? (
                        <Image source={ver} style={{ width: 14, height: 14, marginLeft: 3, alignSelf: "center" }} />
                    ) : null}
                </View>
                <Post />
            </View>
        </View>
    );
}