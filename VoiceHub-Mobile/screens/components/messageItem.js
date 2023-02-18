import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import messageItemStyle from "../../assets/styles/messageItem.style";

import user1 from "../../assets/userImages/user1.jpg";

export default function MessageItemScreen({ navigation, userName }) {
    return (
        <View>
            <TouchableOpacity style={messageItemStyle.container} 
            onPress={() => navigation.navigate('UserMessage',{uName:userName})}>
                <Image source={user1} style={messageItemStyle.profilePhoto} />

                <View style={{ flexDirection: "column", width: "62.5%" }}>
                    <Text style={messageItemStyle.userName}>{userName}</Text>
                    <View style={messageItemStyle.messageText}>
                        <Text style={messageItemStyle.voiceLenght}>1:28</Text>
                        <Text style={messageItemStyle.time}>13:55</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}