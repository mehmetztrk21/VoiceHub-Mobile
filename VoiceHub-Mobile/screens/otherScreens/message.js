import React, { useRef, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, TextInput, View } from 'react-native';

import messageStyle from "../../assets/styles/message.style";
import OtherHeader from '../components/otherHeader';
import userPostData from '../components/userPostData';

import MessageItem from "../components/messageItem";

import { Dimensions } from "react-native";
import colors from '../../assets/colors';
const { width } = Dimensions.get("window");

export default function Message({ navigation }) {
  const scrollViewRef = useRef(null);

  const handleLayout = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  const [refreshing, setRefreshing] = useState(false);

  const pullThePage = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false)
    }, 800)
  }

  return (
    <SafeAreaView style={messageStyle.container}>

      <OtherHeader HeaderTitle='Messages' navigation={navigation} />
      <View style={{ marginTop: width * 0.04 }}>

        <View style={messageStyle.searchView}>
          <TextInput style={messageStyle.SearchBar} placeholder="Search" />
        </View>

        <ScrollView style={messageStyle.Items} ref={scrollViewRef} onLayout={handleLayout}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
          } >
          {
            userPostData.map((item, index) => {
              return (
                <MessageItem key={index} navigation={navigation} username={item.username} date={item.date} />
              )
            })
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}