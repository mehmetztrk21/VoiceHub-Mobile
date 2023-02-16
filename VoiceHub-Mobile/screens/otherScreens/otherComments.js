import React from "react";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { Icon } from "react-native-elements";

import Comment from "../components/comment";
import OtherHeader from "../components/otherHeader";
import userPostData from "../components/userPostData";

import user1 from "../../assets/userImages/user1.jpg";

import otherCommentsStyle from "../../assets/styles/otherComments.style";

export default function OtherComments({ navigation }) {
    return (
        <View style={otherCommentsStyle.container}>
            <OtherHeader HeaderTitle={'Comments'} navigation={navigation} />

            <ScrollView showsVerticalScrollIndicator={false} style={otherCommentsStyle.comments}>
                {
                    userPostData.map((item) => {
                        return (
                            <Comment navigation={navigation} userPic={item.userPic} userName={item.userName} />
                        )
                    })
                }
            </ScrollView>

            <View style={otherCommentsStyle.userVoiceRecord}>
                <Image style={otherCommentsStyle.userPic} source={user1} />
                <Icon type="feather" size={28} name={"mic"} />
            </View>

        </View>
    );
}