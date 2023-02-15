import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import userMessageStyle from "../../assets/styles/userMessage.style";
import userPostData from '../components/userPostData'
import user1 from "../../assets/userImages/user1.jpg";
import OtherHeader from '../components/otherHeader'
import UserMessageItem from "../components/userMessageItem";

export default function UserMessage({navigation, userName}) {
  //const [userMessagePage,setUserMessagePage]=useState(false);
  return (
    <View style={userMessageStyle.container}>
      <OtherHeader navigation={navigation}/>

      <Image source={user1} style={userMessageStyle.ProfilePhoto} />
      <Text style={userMessageStyle.uName}>{userName}</Text>

      <ScrollView style={userMessageStyle.scroll}>  
        {
          userPostData.map((item)=>{
            return(
              <UserMessageItem navigation={navigation} userName={item.userName} userPic={item.userPic}/>
            )
          })
        }
        
      </ScrollView>
    </View>
  );
}