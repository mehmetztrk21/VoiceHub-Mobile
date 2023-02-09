import React from "react";
import { View } from "react-native";

import Comment from "../components/comment";

import otherCommentsStyle from "../../assets/styles/otherComments.style";

export default function OtherComments() {
    return (
        <View style={otherCommentsStyle.container}>
            {/*map kullanacagim*/}
            <Comment/>
        </View>
    );
}