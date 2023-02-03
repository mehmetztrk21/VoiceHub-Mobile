import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";

import searchStyles from '../assets/styles/search.style';

import RecUser from "../screens/components/recoUser";

import user1 from "../assets/userImages/user1.jpg";
import user2 from "../assets/userImages/user2.jpg";
import user3 from "../assets/userImages/user3.jpg";
import user4 from "../assets/userImages/rohit.jpg";
import user5 from "../assets/userImages/aditi.jpg";
import Uk from "../assets/userImages/userUK.png";

const adminuser = "Suyash";
const username1 = "Alex";
const username2 = "Synthia";
const username3 = "Martha";
const username4 = "Rohit";
const username5 = "Aditi";
const username6 = "Arun";
const username7 = "Nikita";
const username8 = "Praveen";

const recUser = [
  { id: "1", userName: "Alex", userPic: user1 },
  { id: "2", userName: "Synthia", userPic: user2 },
  { id: "3", userName: "Martha", userPic: user3 },
  { id: "4", userName: "Rohit", userPic: user4 },
  { id: "5", userName: "Aditi", userPic: user5 },
  { id: "6", userName: "Praveen", userPic: Uk },
  { id: "7", userName: "Hemant", userPic: Uk },
  { id: "8", userName: "Kakashi", userPic: Uk },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const RenderUser = ({ RecData }) => {
    return RecData.map((item) => (
      <RecUser key={item.id} userPic={item.userPic} userName={item.userName} />
    ));
  };

  return (
    <View style={searchStyles.container}>
      <View style={searchStyles.sbarHolder}>
        <Searchbar
          placeholder="Search"
          style={searchStyles.sbar}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={searchStyles.sContainer}
      >
        <Text style={searchStyles.Shead}>Recommended</Text>
        <View style={searchStyles.userHodler}>
          <RenderUser RecData={recUser} />
        </View>
      </ScrollView>
    </View>
  );
}

