import { View, Text, TouchableOpacity, Image } from "react-native"
import React from "react";
import activityItemStyle from "../../assets/styles/activityItem.style";
import avatar from "../../assets/avatar.png"
import { useUser } from "../../utils/userContext";

const activityItem = ({ navigation, username, userPic, text, date }) => {

    const { user } = useUser();

    return (
        <View>
            <TouchableOpacity style={activityItemStyle.actView} onPress={() => {
                navigation.navigate("SeePost", { postId: "6426dcf9a8166e045ab80f56", userId: "6426be97c779bd5c88513545" })
            }}>

                <TouchableOpacity onPress={() => {
                    user?._id == "6426be97c779bd5c88513545" ?
                        navigation.navigate("ProfileScreen") :
                        navigation.navigate("SeeProfile", { userId: "6426be97c779bd5c88513545" })
                }}>
                    {userPic ?
                        <Image source={userPic} style={activityItemStyle.userPic} /> :
                        <Image source={avatar} style={activityItemStyle.userPic} />
                    }
                </TouchableOpacity>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={activityItemStyle.actText}>{username} {text}</Text>
                    <Text style={activityItemStyle.date}>{date}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

export default activityItem