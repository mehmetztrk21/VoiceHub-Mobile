import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

import activityStyles from "../assets/styles/activity.style";

import BottomTabs from "./components/BottomTabs";

import userPostData from "./components/userPostData";

export default function ActivityScreen({ navigation }) {

  return (
    <SafeAreaView style={activityStyles.container}>

      <View style={activityStyles.header}>
      <TouchableOpacity onPress={() => navigation.goBack('HomeScreen')}>
          <Icon type="ionicon" size={28} name={"arrow-back-outline"} />
        </TouchableOpacity>
        <Text style={activityStyles.headerName}>Activity</Text>
      </View>

      <ScrollView style={activityStyles.sContainer}>
        {
          userPostData.map((item) => {
            return (
              <View style={activityStyles.actView} onPress={() => navigation.push('SeePost')}>
                <Image source={item.userPic} style={activityStyles.userPic} onPress={() => navigation.push('SeeProfile')} />
                <Text style={activityStyles.actText}>{item.userName} liked your Post.</Text>
              </View>
            )
          })
        }
      </ScrollView>

      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  )
}


