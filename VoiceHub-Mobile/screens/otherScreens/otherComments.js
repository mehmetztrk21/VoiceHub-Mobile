import React from "react";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { Icon } from "react-native-elements";

import Comment from "../components/comment";
import userPostData from "../components/userPostData";

import user1 from "../../assets/userImages/user1.jpg";

import otherCommentsStyle from "../../assets/styles/otherComments.style";

export default function OtherComments({ navigation }) {

    const RenderComments = ({ userPostData }) => {
        return userPostData.map((item) => (
            <Comment navigation={navigation} userPic={item.userPic} userName={item.userName} />
        ))
    }

    return (
        <View style={otherCommentsStyle.container}>
            <View style={otherCommentsStyle.header}>
                <TouchableOpacity onPress={() => navigation.goBack('HomeScreen')}>
                    <Icon type="ionicon" size={28} name={"arrow-back-outline"} />
                </TouchableOpacity>
                <Text style={otherCommentsStyle.headerName}>Comments</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={otherCommentsStyle.comments}>
                <RenderComments userPostData={userPostData} />
            </ScrollView>

            <View style={otherCommentsStyle.userVoiceRecord}>
                <Image style={otherCommentsStyle.userPic} source={user1} />
                <Icon type="feather" size={28} name={"mic"} />
            </View>

        </View>
    );
}