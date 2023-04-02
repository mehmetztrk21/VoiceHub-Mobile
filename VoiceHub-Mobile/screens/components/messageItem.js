import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import messageItemStyle from "../../assets/styles/messageItem.style";

import user1 from "../../assets/userImages/user1.jpg";
import ver from "../../assets/ver.png";

//import { deleteComment } from "../../services/commentServices";

import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default function MessageItemScreen({ navigation, username, date }) {
    return (
        <View>
            <TouchableOpacity style={messageItemStyle.container}
                onPress={() => navigation.navigate("UserMessage", { username: username })}>
                <Image source={user1} style={{ width: width * 0.125, height: width * 0.125, borderRadius: width * 0.0625 }} />

                <View style={{ flexDirection: "column", width: "70%" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={messageItemStyle.username}>{username}</Text>
                        {true ? (
                            <Image source={ver} style={{ width: 14, height: 14, paddingLeft: 4, alignSelf: "center" }} />
                        ) : null}
                    </View>
                    <View style={messageItemStyle.messageText}>
                        <Text style={messageItemStyle.voiceLenght}>1:28</Text>
                        <Text style={messageItemStyle.time}>{date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}