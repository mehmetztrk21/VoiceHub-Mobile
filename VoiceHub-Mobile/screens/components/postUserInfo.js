import React, { useEffect } from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";

export default function PostUserInfo(test){
    useEffect(()=>{
        console.log("test: ",test.test)
    })
    return (
        <View style={postUserInfoStyle.postUser}>
            <TouchableOpacity style={postUserInfoStyle.userpic}>
                <Image style={postUserInfoStyle.userpostImg}/>
            </TouchableOpacity>
            <Text style={postUserInfoStyle.userName}>{test.test}</Text>
        </View>
    );
}
