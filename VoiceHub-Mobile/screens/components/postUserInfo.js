import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";

export default function PostUserInfo({ navigation, userPic, userName, HeaderTitle }) {
    return (
        <View style={postUserInfoStyle.postUser}>

            <TouchableOpacity style={postUserInfoStyle.clickUserPic}
                onPress={() => navigation.navigate('ProfileScreen', { uName: userName, isYourProfile: false })}>
                <Image style={postUserInfoStyle.userpostImg} source={userPic} />

                <View style={{ flexDirection: "column" }}>
                    <Text style={postUserInfoStyle.userName}>{userName}</Text>
                    <Text style={postUserInfoStyle.timeAgo}>20 minutes ago</Text>
                </View>

            </TouchableOpacity>

            <View style={{marginRight:16}}>
                {HeaderTitle == 'ProfileScreen' || HeaderTitle == 'Saved' || HeaderTitle == 'Archived' ? (
                    <TouchableOpacity onPress={() => console.log('popup açıldı')}>
                        <Icon type={'font-awesome'} name={'ellipsis-v'} size={28} />
                    </TouchableOpacity>
                ) : null}
            </View>

        </View>
    );
}
