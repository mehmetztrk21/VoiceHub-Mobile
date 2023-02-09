import React from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';

import messageStyle from "../../assets/styles/message.style";

import MessageItem from "../components/messageItem";

export default class MessageScreen extends React.Component {
  render() {

    return (
      <View style={messageStyle.container}>
        <Text style={messageStyle.header}>Messages</Text>
        <View style={messageStyle.searchView}>
          <TextInput style={messageStyle.SearchBar} placeholder="Search"/>
        </View>
        <ScrollView style={messageStyle.Items}>
          <TouchableOpacity>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
} 