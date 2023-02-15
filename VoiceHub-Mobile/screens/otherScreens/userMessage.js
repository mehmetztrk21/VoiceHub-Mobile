import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import userMessageStyle from "../../assets/styles/userMessage.style";
import userPostData from '../components/userPostData'
import user1 from "../../assets/userImages/user1.jpg";
import OtherHeader from '../components/otherHeader'
import Comment from "../components/comment";

export default function UserMessage({navigation, userName}) {
  return (
    <View style={userMessageStyle.container}>
      <OtherHeader navigation={navigation} HeaderTitle={userName}/>

      <Image source={user1} style={userMessageStyle.ProfilePhoto} />
      <Text style={userMessageStyle.uName}>{userName}</Text>

      <ScrollView style={userMessageStyle.scroll}>  
        {
          userPostData.map((item)=>{
            return(
              <Comment navigation={navigation} userName={item.userName} userPic={item.userPic}/>
            )
          })
        }
        
      </ScrollView>
    </View>
  );
}