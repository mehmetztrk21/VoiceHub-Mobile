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
      <OtherHeader navigation={navigation} HeaderTitle={"Notifications"} />
      <ScrollView style={[activityStyles.sContainer, { marginTop: width * 0.06 }]}
        ref={scrollViewRef} onLayout={handleLayout}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
        } >
        {
          userPostData.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity style={activityStyles.actView} onPress={() => navigation.navigate("SeePost", { username: username })}>

                  <TouchableOpacity onPress={() => navigation.navigate("SeeProfile", { userId: item.id })}>
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

