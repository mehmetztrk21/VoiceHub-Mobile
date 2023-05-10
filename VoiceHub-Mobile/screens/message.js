import React, { useRef, useState } from "react";
import { FlatList, RefreshControl, SafeAreaView, Text, TextInput, View } from "react-native";

import messageStyle from "../assets/styles/message.style";
import OtherHeader from "./components/otherHeader";
import userPostData from "./components/userPostData";

import MessageItem from "./components/messageItem";

import { Dimensions } from "react-native";
import colors from "../assets/colors";
import { useUser } from "../utils/userContext";
const { width } = Dimensions.get("window");

export default function Message({ navigation, title, id }) {
  const scrollViewRef = useRef(null);

  const { user } = useUser();

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

  useState(() => {
    if (title == "UserMessage") {
      //kişiler ile olan mesajları göster
    }
    else {
      //mesajlaşılan kişileri getir
    }
  }, [])

  return (
    <SafeAreaView style={messageStyle.container}>

      <OtherHeader HeaderTitle="Messages" navigation={navigation} isTic={false} />
      <View style={{ marginTop: width * 0.04 }}>

        <View style={messageStyle.searchView}>
          <TextInput style={messageStyle.SearchBar} placeholder="Search" />
        </View>

        <FlatList
          style={messageStyle.Items}
          ref={scrollViewRef}
          onLayout={handleLayout}
          data={userPostData}
          renderItem={({ item, index }) => (
            <MessageItem
              key={index}
              navigation={navigation}
              username={item.username}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => pullThePage()}
              colors={[colors.green]}
            />
          }
          ListEmptyComponent={
            <View>
              <Text style={{ textAlign: "center", marginBottom: 20, color: colors.green, fontWeight: "700", fontSize: 16 }}>No message yet</Text>
            </View>
          }
        />

      </View>
    </SafeAreaView>
  );
}