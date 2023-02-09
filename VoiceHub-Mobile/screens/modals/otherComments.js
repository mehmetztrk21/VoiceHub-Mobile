import React from "react";
import { View, Image } from "react-native";
import { Icon, Slider } from "react-native-elements";
import Comment from "../components/comment";

import user1 from "../../assets/userImages/user1.jpg";

import otherCommentsStyle from "../../assets/styles/otherComments.style";

export default function OtherComments() {
    return (
        <View style={otherCommentsStyle.container}>
            <View style={otherCommentsStyle.comments}>
                {/*map kullanacagim*/}
                <Comment />
            </View>
            <View style={otherCommentsStyle.userVoiceRecord}>
                <Image style={otherCommentsStyle.userPic} source={user1}/>
                <Icon type="feather" size={28} name={"mic"} />
            </View>

        </View>
    );
}