import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";

export default function PostUserInfo(
    { navigation, userPic, userName, HeaderTitle, setOpenEditPostPopUp, setOpenArchivePopUp }) {
    return (
        <View style={postUserInfoStyle.postUser}>

            <TouchableOpacity style={postUserInfoStyle.clickUserPic}
                onPress={() => navigation.navigate('ProfileScreen', { uName: userName, isYourProfile: false })}>
                <Image style={postUserInfoStyle.userpostImg} source={userPic} />

                <View style={{ flexDirection: "column" }}>
                    <Text style={postUserInfoStyle.userName}>{userName}</Text>
                    <Text style={postUserInfoStyle.timeAgo}>20min</Text>
                </View>

            </TouchableOpacity>

            <View style={{ marginRight: 16 }}>
                {HeaderTitle == 'ProfileScreen' ? (
                    <TouchableOpacity onPress={() => { setOpenEditPostPopUp(prev=>!prev) }}>
                        <Icon type={'font-awesome'} name={'ellipsis-v'} size={28} />
                    </TouchableOpacity>
                ) : HeaderTitle == 'Archived' ? (
                    <TouchableOpacity onPress={() => { setOpenArchivePopUp(prev=>!prev) }}>
                        <Icon type={'font-awesome'} name={'ellipsis-v'} size={28} />
                    </TouchableOpacity>
                ) : null}
            </View>

        </View>
    );
}
