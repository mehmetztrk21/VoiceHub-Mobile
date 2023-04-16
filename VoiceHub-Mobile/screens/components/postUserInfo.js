import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";
import ver from "../../assets/ver.png"
import { timeAgoText } from "../../utils/timeAgoText";
import { getUserInfo } from "../../utils/getUserInfo";
import BottomTabs from "./BottomTabs";
export default function PostUserInfo(
    { navigation, userPic, username, HeaderTitle,
        setOpenEditPostPopUp, setOpenArchivePopUp, userId,
        date, id, isVerify }) {

    const [differenceInDays, setDifferenceInDays] = useState("0");
            const [user, setUser] = useState({});
    useEffect(() => {
        console.log(userId);
        getUserInfo().then(async (res) => {
            console.log(res)
            setUser(res);
          });
        setDifferenceInDays(timeAgoText(date));
    }, []);

    return (
        <View style={postUserInfoStyle.postUser}>

            <TouchableOpacity style={postUserInfoStyle.clickUserPic}
                onPress={() => { user._id != userId ? navigation.navigate("SeeProfile", { userId: userId }) : navigation.navigate("ProfileScreen", { username: username })}}>
                <Image style={postUserInfoStyle.userpostImg} source={{ uri: userPic }} />

                <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={postUserInfoStyle.username}>{username}</Text>
                        {isVerify ? (
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
