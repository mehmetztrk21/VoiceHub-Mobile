import React from 'react';
import { View, Image, Text } from 'react-native';
import messageItemStyle from "../../assets/styles/messageItem.style";

import user1 from "../../assets/userImages/user1.jpg";

export default class MessageItemScreen extends React.Component {
    render() {
        return (
            <View style={messageItemStyle.container}>
                <Image source={user1} style={messageItemStyle.profilePhoto} />
                <View style={messageItemStyle.messageTexts}>
                    <Text style={messageItemStyle.userName}>k.kayseriliiiiiiiiiii</Text>
                    <View style={messageItemStyle.messageContents}>
                        <Text style={messageItemStyle.voiceLenght}>1:28</Text>
                        <Text style={messageItemStyle.time}>19 min</Text>
                    </View>
                </View>
            </View>
        );
    }
} 