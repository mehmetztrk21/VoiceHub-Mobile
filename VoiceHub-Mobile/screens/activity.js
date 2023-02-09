import React from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView
} from "react-native";

import activityStyles from "../assets/styles/activity.style";

import ActivityBar from "../screens/components/userActivity";

import user1 from "../assets/userImages/user1.jpg";

const activityData = [
  { id: "1", userName: "Alex", userPic: user1 },
  { id: "2", userName: "Synthia", userPic: user1 },
  { id: "3", userName: "Martha", userPic: user1 },
  { id: "4", userName: "Rohit", userPic: user1 },
  { id: "5", userName: "Aditi", userPic: user1 },
  { id: "6", userName: "Praveen", userPic: user1 },
  { id: "7", userName: "Hemant", userPic: user1 },
  { id: "8", userName: "Kakashi", userPic: user1 },
  { id: "9", userName: "Ronaldo", userPic: user1 },
  { id: "10", userName: "Shreya", userPic: user1 },
  { id: "11", userName: "Elon", userPic: user1 },
  { id: "12", userName: "Naruto", userPic: user1 },
  { id: "13", userName: "Minato", userPic: user1 },
];

const ActivityScreen = () => {
  const RenderActivity = ({ item }) => (
    <ActivityBar userPic={item.userPic} userName={item.userName} />
  );

  return (
    <SafeAreaView style={activityStyles.container}>
      <View style={activityStyles.aHeadView}>
        <Text style={activityStyles.head}>Activity</Text>
      </View>

      <FlatList
        data={activityData}
        renderItem={RenderActivity}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={activityStyles.flatList}
      />
    </SafeAreaView>
  );
};

export default ActivityScreen;


