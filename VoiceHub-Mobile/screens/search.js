import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View, Text, Image, TextInput, Modal,SafeAreaView } from "react-native";
import { Slider } from "react-native-elements";

import searchStyles from '../assets/styles/search.style';

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
  const [seePost, setSeePost] = useState(false);

  {/*Coming Soon --->*/ }
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  {/*<--- Coming Soon */ }


  const RenderUser = ({ RecData }) => {
    return RecData.map((item) => (
      <TouchableOpacity style={{ paddingBottom: 20, flexDirection:"row" }} onPress={()=>{setSeePost(!seePost)}}>
        <Image source={item.userPic} style={searchStyles.searchImg} />
        <Slider style={searchStyles.slider}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#1DB954"
        maximumTrackTintColor="#777777"
        thumbTintColor="#1DB954"
        />
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
    <SafeAreaView style={searchStyles.container}>
      <Modal visible={seePost}>
        <Text>SeePost Screen</Text>
      </Modal>
      <View style={searchStyles.sbarHolder}>
        <TextInput
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
    </SafeAreaView>
  );
}

