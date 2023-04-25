import React, { useRef } from 'react';
import { SafeAreaView, ScrollView, View, Dimensions } from 'react-native';

import userMessageStyle from "../../assets/styles/userMessage.style";
import AddVoice from '../components/addVoice';

import OtherHeader from '../components/otherHeader';
import UserMessageItem from "../components/userMessageItem";
import userPostData from '../components/userPostData';

const { width } = Dimensions.get("window");

export default function UserMessage({ navigation, route }) {
  const { id } = route.params;

  const scrollViewRef = useRef(null);

  const handleLayout = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <SafeAreaView style={userMessageStyle.container}>
      <OtherHeader navigation={navigation} HeaderTitle={username} />
      <View style={{ marginTop: width * 0.04 }}>
        <ScrollView style={userMessageStyle.scroll} ref={scrollViewRef} onLayout={handleLayout}>
          {userPostData.length != 0 ?
            userPostData.map((item, index) => {
              return (
                <View key={index} style={{ marginBottom: 20 }}>
                  <UserMessageItem navigation={navigation} userPic={item.userPic} who={item.type} />
                </View>
              )
            })
            :
            <View>
              <Text style={
                { textAlign: "center", marginTop: 20, color: colors.green, fontWeight: "700", fontSize: 16 }
              }>You take the first step!</Text>
            </View>
          }

        </ScrollView>

        <AddVoice title={"messages"} />
      </View>
    </SafeAreaView>
  );
}