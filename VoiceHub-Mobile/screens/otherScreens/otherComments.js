import React from "react";
import { View, ScrollView } from "react-native";

import Comment from "../components/comment";
import AddVoice from "../components/addVoice";
import OtherHeader from "../components/otherHeader";
import userPostData from "../components/userPostData";

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

            <AddVoice/>

        </View>
    );
}