import React from "react";
import { Image, Text, View } from "react-native";

import Post from "../components/post";

import commentStyle from "../../assets/styles/comment.style";

export default function Comment({ navigation, userPic, userName }) {
    return (
        <View style={commentStyle.container}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={userPic} style={commentStyle.ProfilePhoto} onPress={() => navigation.navigate('Profile',{uName:userName,isYourProfile:true})} />
                    <View style={{ flexDirection: 'column', width: '100%', paddingLeft:'2.5%'}}>
                        <Text style={commentStyle.userName} onPress={() => navigation.navigate('Profile',{uName:userName,isYourProfile:true})}>{userName}</Text>
                        <Post />
                    </View>
                </View>
                <Text style={commentStyle.date}>12 day ago</Text>
            </View>


        </View>
    );
}