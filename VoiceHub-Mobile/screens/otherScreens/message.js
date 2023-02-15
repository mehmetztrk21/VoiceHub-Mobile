import React from 'react';
import { View, TextInput, ScrollView } from 'react-native';

import OtherHeader from '../components/otherHeader';
import userPostData from '../components/userPostData'
import messageStyle from "../../assets/styles/message.style";

import MessageItem from "../components/messageItem";

export default function Message({ navigation }) {
  return (
    <View style={messageStyle.container}>

      <OtherHeader HeaderTitle='Messages' navigation={navigation} />

      <View style={messageStyle.searchView}>
        <TextInput style={messageStyle.SearchBar} placeholder="Search" />
      </View>

      <ScrollView style={messageStyle.Items}>
        {
          userPostData.map((item) => {
            return (
                <MessageItem navigation={navigation} userName={item.userName}/>
            )
          })
        }
      </ScrollView>
    </View>
  );
}