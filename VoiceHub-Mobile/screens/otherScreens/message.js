import React from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';

import { Icon } from 'react-native-elements';

import messageStyle from "../../assets/styles/message.style";

import MessageItem from "../components/messageItem";

export default function Message({ navigation }) {
  return (
    <View style={messageStyle.container}>

      <View style={messageStyle.header}>
        <TouchableOpacity onPress={() => navigation.goBack('HomeScreen')}>
          <Icon type="ionicon" size={28} name={"arrow-back-outline"} />
        </TouchableOpacity>
        <Text style={messageStyle.headerName}>Messages</Text>
      </View>

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