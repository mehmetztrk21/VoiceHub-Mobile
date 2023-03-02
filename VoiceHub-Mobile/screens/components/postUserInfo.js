import React from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";

export default function PostUserInfo({ navigation, userPic, userName }) {
    return (
        <View style={postUserInfoStyle.postUser}>

            <TouchableOpacity style={postUserInfoStyle.clickUserPic} 
            onPress={() => navigation.navigate('ProfileScreen', {uName:userName, isYourProfile:false})}>
                <Image style={postUserInfoStyle.userpostImg} source={userPic} />
                
                <View style={{flexDirection:"column"}}>
                    <Text style={postUserInfoStyle.userName}>{userName}</Text>
                    <Text style={postUserInfoStyle.timeAgo}>20 minutes ago</Text>
                </View>
                
            </TouchableOpacity>
            
        </View>
    );
}
