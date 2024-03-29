import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import ver from "../../assets/ver.png";
import Post from "../components/post";

import { Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import colors from "../../assets/colors";
import avatar from "../../assets/avatar.png"
import { timeAgoText } from "../../utils/timeAgoText";
import { useUser } from "../../utils/userContext";
import { baseURL } from "../../utils/constants";
import commentStyle from "../../assets/styles/comment.style";
const { width } = Dimensions.get('window');

export default function Comment({ navigation, commentId, contentUrl, userPic, username, setOpenAreYouSure, userId, createDate, postId }) {

    const { user } = useUser();

    const deleteComment = async () => {
        setOpenAreYouSure(commentId ? commentId : false);
    }

    return (
        <View style={commentStyle.container}>
            <View style={commentStyle.container2}>
                <TouchableOpacity
                    onPress={() => {
                        if (userId == user?._id) {
                            navigation.navigate("ProfileScreen");
                        }
                        else {
                            navigation.navigate("SeeProfile", { userId: userId });
                        }
                    }}>

                    {userPic ?
                        <Image source={{ uri: baseURL + userPic }} style={{ width: width * 0.125, height: width * 0.125, borderRadius: width * 0.0675 }} /> :
                        <Image source={avatar} style={{ width: width * 0.125, height: width * 0.125, borderRadius: width * 0.0675 }} />
                    }
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

            {user?.posts?.includes(postId) || user?._id == userId ? (
                <TouchableOpacity onPress={deleteComment}>
                    <Ionicons name="trash" size={16} color={colors.green} />
                </TouchableOpacity>
            ) : null}

        </View>
    );
}