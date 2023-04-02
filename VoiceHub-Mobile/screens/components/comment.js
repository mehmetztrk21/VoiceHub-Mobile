import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import ver from "../../assets/ver.png";
import Post from "../components/post";

import { Dimensions } from "react-native";
import colors from "../../assets/colors";
import { Icon } from "react-native-elements";
import { getUserInfo } from "../../utils/getUserInfo";
import { timeAgoText } from "../../utils/timeAgoText";
import { baseURL } from "../../utils/constants";
const { width } = Dimensions.get('window');

export default function Comment({ navigation, contentUrl, userPic, username, setOpenAreYouSurePopUp, userId, createDate }) {

    const deleteComment = async () => {
        setOpenAreYouSurePopUp(true);
    }


    return (
        <View style={{
            justifyContent: "space-around", flexDirection: "row",
            alignItems: "center", paddingVertical: width * 0.02,
            paddingHorizontal: width * 0.07
        }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => {
                        getUserInfo().then(res => {
                            if (userId == res?.data?._id) {
                                navigation.navigate("ProfileScreen", { username: username });
                            }
                            else {
                                navigation.navigate("SeeProfile", { userId: userId });
                            }
                        })
                    }}>
                    <Image source={{ uri: userPic }}
                        style={{ width: width * 0.125, height: width * 0.125, borderRadius: width * 0.0675 }} />
                </TouchableOpacity>

                <View style={{ width: width * 0.75, flexDirection: "column", paddingLeft: width * 0.03 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontWeight: "700", fontSize: 16 }}>{username}</Text>
                        {true ? (
                            <Image source={ver} style={{ width: 14, height: 14, marginLeft: 3, alignSelf: "center" }} />
                        ) : null}
                        <Text style={{ fontWeight: "700", fontSize: 12, color: colors.gray }}>{timeAgoText(createDate)}</Text>
                    </View>
                    <Post uri={contentUrl} />
                </View>
            </View>

            <TouchableOpacity onPress={deleteComment}>
                <Icon type="font-awesome" name="trash" size={16} color={colors.green} />
            </TouchableOpacity>
        </View>
    );
}