import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView, Text, TouchableOpacity, View
} from "react-native";

import activityStyles from "../assets/styles/activity.style";

import OtherHeader from "./components/otherHeader";

import userPostData from "./components/userPostData";

export default function ActivityScreen({ navigation, route }) {
  const { uName } = route.params;

  return (
    <SafeAreaView style={activityStyles.container}>
      <OtherHeader navigation={navigation} HeaderTitle={'Notifications'}/>
      <ScrollView style={activityStyles.sContainer}>
        {
          userPostData.map((item) => {
            return (
              <View>
                
                <TouchableOpacity style={activityStyles.actView} onPress={() => navigation.navigate('SeePost', { uName: uName, isYourProfile: true })}>
                  
                  <TouchableOpacity onPress={() => navigation.navigate('SeeProfile',{uName: uName, isYourProfile: true, isVerified:true, visible: item.visible})}>
                    <Image source={item.userPic} style={activityStyles.userPic} />
                  </TouchableOpacity>
                  
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={activityStyles.actText}>{item.userName} liked your Post.</Text>
                    <Text style={activityStyles.date}>2h</Text>
                  
                  </View>
                </TouchableOpacity>

              </View>
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

