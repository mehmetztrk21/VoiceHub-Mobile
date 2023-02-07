import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native";
import { Searchbar } from "react-native-paper";

import searchStyles from '../assets/styles/search.style';

import Post from "../screens/components/post";

import user1 from "../assets/userImages/user1.jpg";

const recUser = [
  { id: "1", userName: "Alex", userPic: user1 },
  { id: "2", userName: "Synthia", userPic: user1 },
  { id: "3", userName: "Martha", userPic: user1 },
  { id: "4", userName: "Rohit", userPic: user1 },
  { id: "5", userName: "Aditi", userPic: user1 },
  { id: "6", userName: "Praveen", userPic: user1 },
  { id: "7", userName: "Hemant", userPic: user1 },
  { id: "8", userName: "Kakashi", userPic: user1 },
  { id: "1", userName: "Alex", userPic: user1 },
  { id: "2", userName: "Synthia", userPic: user1 },
  { id: "3", userName: "Martha", userPic: user1 },
  { id: "4", userName: "Rohit", userPic: user1 },
  { id: "5", userName: "Aditi", userPic: user1 },
  { id: "6", userName: "Praveen", userPic: user1 },
  { id: "7", userName: "Hemant", userPic: user1 },
  { id: "8", userName: "Kakashi", userPic: user1 },
  { id: "1", userName: "Alex", userPic: user1 },
  { id: "2", userName: "Synthia", userPic: user1 },
  { id: "3", userName: "Martha", userPic: user1 },
  { id: "4", userName: "Rohit", userPic: user1 },
  { id: "5", userName: "Aditi", userPic: user1 },
  { id: "6", userName: "Praveen", userPic: user1 },
  { id: "7", userName: "Hemant", userPic: user1 },
  { id: "8", userName: "Kakashi", userPic: user1 },
];

export default function SearchScreen() {
  const [focused, setFocused] = useState(true);

  {/*Coming Soon --->*/ }
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  {/*<--- Coming Soon */ }


  const RenderUser = ({ RecData }) => {
    return RecData.map((item) => (
      <TouchableOpacity style={{ paddingBottom: 20, flexDirection:"row" }}>
        <Image source={item.userPic} style={{ width: 50, height: 50,borderRadius:25, }} />
        <Post />
      </TouchableOpacity>
    ));
  };

  const LastSerachedUser = ({ RecData }) => {
    return RecData.map((item) => (
      <View style={searchStyles.last}>
        <TouchableOpacity style={{flexDirection:"row"}}>
          <Image source={item.userPic} style={searchStyles.lastSearchImage}/>
          <View style={{flexDirection:"column"}}>
            <Text>{item.userName}</Text>
            <Text>k.kayserili ve 5 diğer kişi daha takip ediyor</Text>
          </View>
        </TouchableOpacity>
      </View>
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
          onFocus={() => setFocused(false)}
          onBlur={() => setFocused(true)}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={searchStyles.sContainer}
      >
        {focused ? (
          <View style={searchStyles.userHodler}>
            {/* Get Users Infos */}
            <RenderUser RecData={recUser} />
          </View>
        ) :
          <View style={searchStyles.userHodler}>
            <LastSerachedUser RecData={recUser} />
          </View>
        }
      </ScrollView>
    </View>
  );
}

