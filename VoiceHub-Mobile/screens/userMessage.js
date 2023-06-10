import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, SafeAreaView, Text, View } from 'react-native';

import userMessageStyle from "../assets/styles/userMessage.style";
import AddVoice from './components/addVoice';

import colors from '../assets/colors';

import Alert from './components/alert';
import OtherHeader from './components/otherHeader';
import UserMessageItem from "./components/userMessageItem";
import userPostData from './components/userPostData';

const { width } = Dimensions.get("window");

export default function UserMessage({ navigation, route }) {
  const { username, date } = route.params;

  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const scrollViewRef = useRef(null);

  const handleLayout = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <SafeAreaView style={userMessageStyle.container}>
      <OtherHeader navigation={navigation} HeaderTitle={username} />
      <View style={{ marginTop: width * 0.04 }}>
        <FlatList
          style={userMessageStyle.scroll}
          data={userPostData}
          ref={scrollViewRef}
          onLayout={handleLayout}
          renderItem={({ item, index }) => (
            <View style={{ marginBottom: 20 }} key={index}>
              <UserMessageItem navigation={navigation} userPic={item.userPic} who={item.type} />
            </View>
          )}
          ListEmptyComponent={
            <View>
              <Text style={{ textAlign: "center", marginTop: 20, color: colors.green, fontWeight: "700", fontSize: 16 }}>You take the first step!</Text>
            </View>
          }
        />


        <AddVoice title={"messages"} setAlertMessage={setAlertMessage} setShowAlert={setShowAlert} />
        <Alert showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />
      </View>
    </SafeAreaView>
  );
}