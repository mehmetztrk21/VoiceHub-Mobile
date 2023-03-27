import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";
import ver from "../../assets/ver.png"

const user = {
    name: "Mehmet",
    surname: "Öztürk",
    username: "mehmet.ztrk"
} //TODO: get in localStorage

export default function PostUserInfo(
    { navigation, userPic, userName, HeaderTitle,
        setOpenEditPostPopUp, setOpenArchivePopUp,
        visible, date, isVerify, isYouFollowing, hasBio, isYourFollower }) {
    return (
        <View style={postUserInfoStyle.postUser}>

            <TouchableOpacity style={postUserInfoStyle.clickUserPic}
                onPress={() => {
                    if (userName == user.username) {
                        navigation.navigate('ProfileScreen', { uName: userName, isVerified: isVerify });
                    }
                    else {
                        navigation.navigate('SeeProfile', { uName: userName, isVerified: isVerify, visible: visible, isYouFollowing: isYouFollowing, isYourFollower: isYourFollower, hasBio: hasBio });
                    }
                }}>
                <Image style={postUserInfoStyle.userpostImg} source={userPic} />

                <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={postUserInfoStyle.userName}>{userName}</Text>
                        {isVerify ? (
                            <Image style={{ width: 14, height: 14, marginLeft: 4 }} source={ver} />
                        ) : null}
                    </View>
                    <Text style={postUserInfoStyle.timeAgo}>{date}</Text>
                </View>

            </TouchableOpacity>

            <View style={{ marginRight: 16 }}>
                {HeaderTitle == 'ProfileScreen' ? (
                    <TouchableOpacity onPress={() => { setOpenEditPostPopUp(prev => !prev) }}>
                        <Icon type={'font-awesome'} name={'ellipsis-v'} size={28} />
                    </TouchableOpacity>
                ) : HeaderTitle == 'Archived' ? (
                    <TouchableOpacity onPress={() => { setOpenArchivePopUp(prev => !prev) }}>
                        <Icon type={'font-awesome'} name={'ellipsis-v'} size={28} />
                    </TouchableOpacity>
                ) : null}
            </View>

        </View>
    );
}
