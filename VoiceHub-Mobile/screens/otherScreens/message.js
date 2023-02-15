import React from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';

import OtherHeader from '../components/otherHeader';

import messageStyle from "../../assets/styles/message.style";

import MessageItem from "../components/messageItem";

export default function Message({ navigation }) {
  return (
    <View style={messageStyle.container}>

      <OtherHeader HeaderTitle='Messages' navigation={navigation}/>

      <View style={messageStyle.searchView}>
        <TextInput style={messageStyle.SearchBar} placeholder="Search" />
      </View>

      <ScrollView style={messageStyle.Items}>
        {/* map kullanacagim */}
        <TouchableOpacity onPress={() => navigation.push('UserMessage')}>
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}