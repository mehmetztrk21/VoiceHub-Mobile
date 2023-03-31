import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";
import ver from "../../assets/ver.png"
import { timeAgoText } from "../../utils/timeAgoText";

const user = {
    name: "Mehmet",
    surname: "Öztürk",
    username: "mehmet.ztrk"
} //TODO: get in localStorage

export default function PostUserInfo(
    { navigation, userPic, userName, HeaderTitle,
        setOpenEditPostPopUp, setOpenArchivePopUp, userId,
        date, id }) {

    const [differenceInDays, setDifferenceInDays] = useState("0");

    useEffect(() => {
        setDifferenceInDays(timeAgoText(date));
    }, []);


    return (
        <View style={postUserInfoStyle.postUser}>

            <TouchableOpacity style={postUserInfoStyle.clickUserPic}
                onPress={() => {
                    if (userName == user.username) {
                        navigation.navigate("ProfileScreen", { uName: userName });
                    }
                    else {
                        navigation.navigate("SeeProfile", { userId: userId, });
                    }
                }}>
                <Image style={postUserInfoStyle.userpostImg} source={{ uri: userPic }} />

                <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={postUserInfoStyle.userName}>{userName}</Text>
                        {true ? (
                            <Image style={{ width: 14, height: 14, marginLeft: 4 }} source={ver} />
                        ) : null}
                    </View>
                    <Text style={postUserInfoStyle.timeAgo}>{differenceInDays}</Text>
                </View>

            </TouchableOpacity>

            <View style={{ marginRight: 16 }}>
                {HeaderTitle == 'ProfileScreen' ? (
                    <TouchableOpacity onPress={() => { setOpenEditPostPopUp(id ? id : false) }}>
                        <Icon type={'font-awesome'} name={'ellipsis-v'} size={28} />
                    </TouchableOpacity>
                ) : HeaderTitle == 'Archived' ? (
                    <TouchableOpacity onPress={() => { setOpenArchivePopUp(id ? id : false) }}>
                        <Icon type={'font-awesome'} name={'ellipsis-v'} size={28} />
                    </TouchableOpacity>
                ) : null}
            </View>

        </View>
    );
}
