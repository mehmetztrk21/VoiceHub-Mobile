import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import activityStyles from "../assets/styles/activity.style";

import ActivityHeader from "./components/activityHeader";
import BottomTabs from "./components/BottomTabs";

import userPostData from "./components/userPostData";

export default function ActivityScreen({ navigation, route }) {
  const { uName, isYourProfile } = route.params;

  const [visibleUpload, setVisibleUpload] = useState(false)
  const [visiblePopUp, setVisiblePopUp] = useState(false)

  return (
    <SafeAreaView style={activityStyles.container}>
      <ActivityHeader />
      <ScrollView style={activityStyles.sContainer}>
        {
          userPostData.map((item) => {
            return (
              <View>
                <TouchableOpacity style={activityStyles.actView} onPress={() => navigation.push('SeePost')}>
                  <TouchableOpacity onPress={() => navigation.push('SeeProfile')}>
                    <Image source={item.userPic} style={activityStyles.userPic} />
                  </TouchableOpacity>
                  <Text style={activityStyles.actText}>{item.userName} liked your Post.</Text>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>

      <BottomTabs navigation={navigation} userName={uName}
      visiblePopUp={visiblePopUp} setVisiblePopUp={setVisiblePopUp}
      pageName={"ActivityScreen"} visibleUpload={visibleUpload} 
      setVisibleUpload={setVisibleUpload}/>
    </SafeAreaView>
  )
}

