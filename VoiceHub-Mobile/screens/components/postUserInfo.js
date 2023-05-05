import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Header, Icon } from "react-native-elements";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";
import ver from "../../assets/ver.png";
import { timeAgoText } from "../../utils/timeAgoText";
import { useUser } from "../../utils/userContext";
import { baseURL } from "../../utils/constants";
import colors from "../../assets/colors";
import { setFollowFollower } from "../../services/actionServices";

export default function PostUserInfo(
    { navigation, userPic, username, HeaderTitle,
        setOpenEditPostPopUp, setOpenArchivePopUp, userId,
        date, id, isTic, setOpenPopUpPost }) {

    const [differenceInDays, setDifferenceInDays] = useState("0");
    const { user, setUser } = useUser();

    const followUnfollow = async () => {
        await setFollowFollower({ userId: userId }).then(async (res) => {
            console.log(res);
            if (res?.success) {
                let temp = { ...user };
                if (res.data == "Unfollowed successfully")
                    temp?.followings?.splice(temp?.followings?.indexOf(userId), 1);
                else
                    temp?.followings?.push(userId);
                setUser(temp);
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        setDifferenceInDays(timeAgoText(date));
    }, []);

    return (
        <View style={postUserInfoStyle.postUser}>

            <TouchableOpacity style={postUserInfoStyle.clickUserPic}
                onPress={() => {
                    if (HeaderTitle != "ProfileScreen")
                        user._id != userId ? navigation.navigate("SeeProfile", { userId: userId }) : navigation.navigate("ProfileScreen")
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

                        {HeaderTitle == "SearchScreen" ?
                            <TouchableOpacity onPress={followUnfollow} style={
                                { marginLeft: "5%", backgroundColor: colors.white, borderRadius: 10, paddingHorizontal: 7.5, paddingVertical: 2.5, borderWidth: 2, borderColor: colors.green }}>
                                <Text style={{ fontWeight: "700", fontSize: 15, color: colors.green, textAlign: "center" }}>
                                    {user?.followings?.includes(userId) ? "Unfollow" : "Follow"}
                                </Text>
                            </TouchableOpacity> : null}
                    </View>
                    <Text style={postUserInfoStyle.timeAgo}>{differenceInDays}</Text>
                </View>

            </TouchableOpacity>

            <View style={{ marginRight: 16 }}>
                {HeaderTitle == "ProfileScreen" ? (
                    <TouchableOpacity onPress={() => { setOpenEditPostPopUp(id ? id : false); }}>
                        <Icon type={"font-awesome"} name={"ellipsis-v"} size={28} />
                    </TouchableOpacity>
                ) : HeaderTitle == "Archived" ? (
                    <TouchableOpacity onPress={() => { setOpenArchivePopUp(id ? id : false) }}>
                        <Icon type={"font-awesome"} name={"ellipsis-v"} size={28} />
                    </TouchableOpacity>
                ) : HeaderTitle == "HomeScreen" || HeaderTitle == "SearchScreen" || HeaderTitle == "Saved" ? (
                    <TouchableOpacity onPress={() => { setOpenPopUpPost(id ? id : false) }}>
                        <Icon type={"font-awesome"} name={"ellipsis-v"} size={28} />
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    );
}
