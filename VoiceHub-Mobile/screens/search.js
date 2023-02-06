import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Searchbar } from "react-native-paper";

import searchStyles from '../assets/styles/search.style';

import Post from "../screens/components/post";

import user1 from "../assets/userImages/user1.jpg";

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
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  {/*<--- Coming Soon */ }


  const RenderUser = ({ RecData }) => {
    return RecData.map((item) => (
      <TouchableOpacity style={{ paddingBottom: 20 }}>
        <Post />
      </TouchableOpacity>
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
        {focused &&
          <View style={searchStyles.userHodler}>
            {/* Get Users Infos */}
            <RenderUser RecData={recUser} />
          </View>
        }

        {!focused && 
          <View>
            {/* Buraya Son Arananlar Gelecek */}
          </View>
        }
      </ScrollView>
    </View>
  );
}

