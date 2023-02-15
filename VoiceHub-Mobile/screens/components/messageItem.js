import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import messageItemStyle from "../../assets/styles/messageItem.style";

import user1 from "../../assets/userImages/user1.jpg";

export default function MessageItemScreen({ navigation, userName }) {
    return (
        <View style={messageItemStyle.container}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.push('UserMessage')}>
                <Image source={user1} style={messageItemStyle.profilePhoto} />

                <View style={messageItemStyle.messageTexts}>
                    <Text style={messageItemStyle.userName}>{userName}</Text>

                    <View style={messageItemStyle.messageContents}>
                        <Text style={messageItemStyle.voiceLenght}>1:28</Text>
                        <Text style={messageItemStyle.time}>13:55</Text>
                    </View>

                </View>
                
            </TouchableOpacity>
        </View>
    );
}