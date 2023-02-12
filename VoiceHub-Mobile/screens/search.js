import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View, Text, Image, TextInput, SafeAreaView } from "react-native";

import SeePost from "./modals/seePost";
import SeeProfile from "./modals/seeProfile"
import Post from "./components/post";
import PostUserInfo from "./components/postUserInfo";
import PostActions from "./components/postActions";
import PostTexts from "./components/postTexts"

import searchStyles from '../assets/styles/search.style';

import userPostData from "./components/userPostData"

export default function SearchScreen() {
  const [focused, setFocused] = useState(true);
  const [seePost, setSeePost] = useState(false);
  const [seeProfile, setSeeProfile] = useState(false);

  {/*Coming Soon --->*/ }
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  {/*<--- Coming Soon */ }


  const RenderUser = ({ userPostData }) => {
    return userPostData.map((item) => (
      <View>
        <PostUserInfo userPic={item.userPic} userName={item.userName} />
        <Post/>
        <PostActions/>
        <PostTexts likesCount={item.likesCount} userPic={item.userPic}/>
      </View>
    ));
  };

  const LastSerachedUser = ({ userPostData }) => {
    return userPostData.map((item) => (
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
    <SafeAreaView style={searchStyles.container}>
      
        <SeePost seePost={seePost} onRequestClose={()=>{setSeePost(!seePost)}}/>

        <SeeProfile seeProfile={seeProfile} onRequestClose={()=>{setSeePost(!seeProfile)}}/>

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
    </SafeAreaView>
  );
}

