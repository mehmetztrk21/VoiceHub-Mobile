import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
} from "react-native";

import ActivityBar from "../screens/components/userActivity";

import user1 from "../assets/userImages/user1.jpg";
import user2 from "../assets/userImages/user2.jpg";
import user3 from "../assets/userImages/user3.jpg";
import user4 from "../assets/userImages/rohit.jpg";
import user5 from "../assets/userImages/aditi.jpg";
import Uk from "../assets/userImages/userUK.png";

const activityData = [
  { id: "1", userName: "Alex", userPic: user1 },
  { id: "2", userName: "Synthia", userPic: user2 },
  { id: "3", userName: "Martha", userPic: user3 },
  { id: "4", userName: "Rohit", userPic: user4 },
  { id: "5", userName: "Aditi", userPic: user5 },
  { id: "6", userName: "Praveen", userPic: Uk },
  { id: "7", userName: "Hemant", userPic: Uk },
  { id: "8", userName: "Kakashi", userPic: Uk },
  { id: "9", userName: "Ronaldo", userPic: Uk },
  { id: "10", userName: "Shreya", userPic: Uk },
  { id: "11", userName: "Elon", userPic: Uk },
  { id: "12", userName: "Naruto", userPic: Uk },
  { id: "13", userName: "Minato", userPic: Uk },
];

const ActivityScreen = () => {
  const RenderActivity = ({ item }) => (
    <ActivityBar userPic={item.userPic} userName={item.userName} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.aHeadView}>
        <Text style={styles.head}>Activity</Text>
      </View>

      <FlatList
        data={activityData}
        renderItem={RenderActivity}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      />
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  aHeadView: {
    top: 0,
    left: 0,
    width: "100%",
    height: 60,
    width: "90%",
    marginTop: 22,
  },

  head: {
    fontSize: 22,
    padding: 20,
    paddingLeft: 5,
    fontWeight: "bold",
  },

  sContainer: {
    backgroundColor: "white",

    width: "95%",
  },

  flatList: {
    width: "100%",
    height: "90%",
  },
});
