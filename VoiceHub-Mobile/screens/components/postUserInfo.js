import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";
import ver from "../../assets/ver.png";
import { timeAgoText } from "../../utils/timeAgoText";
import { useUser } from "../../utils/userContext";
import { baseURL } from "../../utils/constants";
export default function PostUserInfo(
    { navigation, userPic, username, HeaderTitle,
        setOpenEditPostPopUp, setOpenArchivePopUp, userId,
        date, id, isTic, setOpenEditCategoriesPopUp }) {

    const [differenceInDays, setDifferenceInDays] = useState("0");
    const { user } = useUser();

    useEffect(() => {
        setDifferenceInDays(timeAgoText(date));
    }, []);

    return (
        <View style={postUserInfoStyle.postUser}>

            <TouchableOpacity style={postUserInfoStyle.clickUserPic}
                onPress={() => {
                    if (HeaderTitle != 'ProfileScreen')
                        user._id != userId ? navigation.navigate("SeeProfile", { userId: userId }) : navigation.navigate("ProfileScreen", { username: username })
                }
                }>
                {userPic == null || userPic == baseURL + null || userPic == baseURL ?
                    <Image source={require("../../assets/avatar.png")} style={postUserInfoStyle.userpostImg} /> :
                    <Image style={postUserInfoStyle.userpostImg} source={{ uri: userPic }} />
                }

                <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={postUserInfoStyle.username}>{username}</Text>
                        {isTic == true ?
                            <Image style={{ width: 14, height: 14, marginLeft: 4 }} source={ver} />
                            : null}
                    </View>
                    <Text style={postUserInfoStyle.timeAgo}>{differenceInDays}</Text>
                </View>

            </TouchableOpacity>

            <View style={{ marginRight: 16 }}>
                {HeaderTitle == 'ProfileScreen' ? (
                    <TouchableOpacity onPress={() => {
                        setOpenEditPostPopUp(id ? id : false);
                    }}>
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
