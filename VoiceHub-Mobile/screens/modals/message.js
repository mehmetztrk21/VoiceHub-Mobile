import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView, Modal } from 'react-native';

import messageStyle from "../../assets/styles/message.style";

import MessageItem from "../components/messageItem";
//import UserMessagePage from "../modals/userMessage"; sonra ekleyecegim

export default function Message(messageVisible) {
  //const [userMessagePage,setUserMessagePage]=useState(false);
  return (
    <Modal style={{width:"100%"}} onRequestClose={()=>{!messageVisible}}>
    <View>
    {messageVisible.messageVisible ?  (
        <View style={messageStyle.container}>
        <Text style={messageStyle.header}>Messages</Text>
        <View style={messageStyle.searchView}>
          <TextInput style={messageStyle.SearchBar} placeholder="Search" />
        </View>
        <ScrollView style={messageStyle.Items}>
          {/* map kullanacagim */}
          <TouchableOpacity>
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
          </TouchableOpacity>
        </ScrollView>
      </View>
      ) : (
        <View></View>
      )
    }
 </View>
 </Modal>
  );
}