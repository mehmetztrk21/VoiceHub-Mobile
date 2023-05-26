import React, { useRef, useState } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView
} from "react-native";

import activityStyles from "../assets/styles/notifications.style";

import ActivityItem from "./components/notificationsItem";
import OtherHeader from "./components/otherHeader";
import userPostData from "./components/userPostData";

import { Dimensions } from "react-native";
import colors from "../assets/colors";

const { width } = Dimensions.get("window");

export default function NotificationScreen({ navigation }) {

  const scrollViewRef = useRef(null);

  const handleLayout = () => {
    scrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  const [refreshing, setRefreshing] = useState(false);

  const pullThePage = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false)
    }, 800)
  }

  return (
    <SafeAreaView style={activityStyles.container}>
      <OtherHeader navigation={navigation} HeaderTitle={"Notifications"} isTic={false} />
      <FlatList
        style={[activityStyles.sContainer, { marginTop: width * 0.06 }]}
        data={userPostData}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item, index }) => (
          <ActivityItem
            navigation={navigation}
            userPic={item.userPic}
            username={item.username}
            text={item.caption}
            key={index}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => pullThePage()}
            colors={[colors.green]}
          />
        }
      />

    </SafeAreaView >
  )
}

