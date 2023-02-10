import React, {useState} from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView, Modal } from 'react-native';

import messageStyle from "../../assets/styles/message.style";

import MessageItem from "../components/messageItem";
//import UserMessagePage from "../modals/userMessage"; sonra ekleyecegim

export default class MessageScreen extends React.Component {
  render() {
    //const [userMessagePage,setUserMessagePage]=useState(false);
    return (
      <View style={messageStyle.container}>
        <Modal>
          {/*<UserMessagePage/> calismiyor*/}
        </Modal>
        <Text style={messageStyle.header}>Messages</Text>
        <View style={messageStyle.searchView}>
          <TextInput style={messageStyle.SearchBar} placeholder="Search"/>
        </View>
        <ScrollView style={messageStyle.Items}>
          {/* map kullanacagim */}
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