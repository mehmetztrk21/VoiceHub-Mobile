import React, { useRef, useState } from "react";
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView, Text, TouchableOpacity, View
} from "react-native";

import activityStyles from "../assets/styles/activity.style";

import OtherHeader from "./components/otherHeader";
import ActivityItem from "./components/activityItem";
import userPostData from "./components/userPostData";

import { Dimensions } from "react-native";
import colors from "../assets/colors";

const { width } = Dimensions.get("window");

export default function ActivityScreen({ navigation }) {

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
    <SafeAreaView style={activityStyles.container}>
      <OtherHeader navigation={navigation} HeaderTitle={"Notifications"} isTic={false} />
      <ScrollView style={[activityStyles.sContainer, { marginTop: width * 0.06 }]}
        ref={scrollViewRef} onLayout={handleLayout}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
        } >
        {
          userPostData.map((item, index) => {
            return (
              <ActivityItem navigation={navigation} userPic={item.userPic} username={item.username} text={item.caption} index={index} />
            )
          })
        }
      </ScrollView>
    </SafeAreaView >
  )
}

