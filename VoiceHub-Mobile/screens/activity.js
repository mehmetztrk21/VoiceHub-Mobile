import React, { useRef, useState } from "react";
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView, Text, TouchableOpacity, View
} from "react-native";

import activityStyles from "../assets/styles/activity.style";

import OtherHeader from "./components/otherHeader";

import userPostData from "./components/userPostData";

import { Dimensions } from "react-native";
import colors from "../assets/colors";
const { width } = Dimensions.get("window");

export default function ActivityScreen({ navigation, route }) {
  const { username } = route.params;

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
              <View key={index}>
                <TouchableOpacity style={activityStyles.actView} onPress={() => navigation.navigate("SeePost", { postId: "6426dcf9a8166e045ab80f56" })}>

                  <TouchableOpacity onPress={() => navigation.navigate("SeeProfile", { userId: "6426be97c779bd5c88513545" })}>
                    <Image source={item.userPic} style={activityStyles.userPic} />
                  </TouchableOpacity>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={activityStyles.actText}>{item.username} liked your Post.</Text>
                    <Text style={activityStyles.date}>{item.date}</Text>
                  </View>

                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>
    </SafeAreaView >
  )
}

