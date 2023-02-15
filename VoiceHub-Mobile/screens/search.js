import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View, Text, Image, TextInput, SafeAreaView } from "react-native";

import Post from "./components/post";
import PostUserInfo from "./components/postUserInfo";
import PostActions from "./components/postActions";
import PostTexts from "./components/postTexts"
import BottomTabs from "./components/BottomTabs";

import searchStyles from '../assets/styles/search.style';

import userPostData from "./components/userPostData"

export default function SearchScreen({ navigation }) {
  const [focused, setFocused] = useState(true);

  {/*Coming Soon --->*/ }
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  {/*<--- Coming Soon */ }


  const RenderUser = ({ userPostData }) => {
    return userPostData.map((item) => (
      <View>
        <PostUserInfo navigation={navigation} userPic={item.userPic} userName={item.userName} />
        <View style={{ paddingLeft: '10%', paddingRight: '2.5%' }}>
          <Post />
        </View>
        <PostActions navigation={navigation} />
        <PostTexts navigation={navigation} likesCount={item.likesCount} userPic={item.userPic} />
      </View>
    ));
  };

  const LastSerachedUser = ({ userPostData }) => {
    return userPostData.map((item) => (
      <View style={searchStyles.last}>
        <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.push('SeeProfile')}>
          <Image source={item.userPic} style={searchStyles.lastSearchImage} />
          <View style={{ flexDirection: "column" }}>
            <Text>{item.userName}</Text>
            <Text>k.kayserili ve 5 diğer kişi daha takip ediyor</Text>
          </View>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <SafeAreaView style={searchStyles.container}>

      <View style={searchStyles.searchBarHolder}>
        <TextInput
          placeholder="Search"
          style={searchStyles.searchBar}
          onChangeText={onChangeSearch}
          value={searchQuery}
          onFocus={() => setFocused(!focused)}          
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={searchStyles.scrollContainer}
      >
        {focused ? (
          <View style={searchStyles.userHodler}>
            {/* Get Users Infos */}
            <RenderUser userPostData={userPostData} />
          </View>
        ) :
          <View style={searchStyles.userHodler}>
            <LastSerachedUser userPostData={userPostData} />
          </View>
        }
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
}

