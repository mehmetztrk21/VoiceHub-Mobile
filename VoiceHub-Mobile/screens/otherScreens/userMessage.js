import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import userMessageStyle from "../../assets/styles/userMessage.style";
import AddVoice from '../components/addVoice';

import UserMessageItem from "../components/userMessageItem";
import OtherHeader from '../components/otherHeader';
import userPostData from '../components/userPostData';

export default function UserMessage({navigation, route}) {
  const { uName } = route.params;
  return (
    <SafeAreaView style={userMessageStyle.container}>
      <OtherHeader navigation={navigation} HeaderTitle={uName}/>

      <ScrollView style={userMessageStyle.scroll}>  
        {
          userPostData.map((item)=>{
            return(
              <View style={{marginBottom:20}}>
                <UserMessageItem navigation={navigation} userName={item.userName} userPic={item.userPic} who={item.type}/>
              </View>
            )
          })
        }
        
      </ScrollView>

      <AddVoice bottomSize={0}/>

    </SafeAreaView>
  );
}