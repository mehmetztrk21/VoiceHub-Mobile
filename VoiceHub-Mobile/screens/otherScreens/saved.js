import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Icon } from "react-native-elements";

import Post from "../components/post";
import userPostData from '../components/userPostData';
import savedStyle from "../../assets/styles/saved.style";

export default function Saved({ navigation }) {
  return (
    <View style={savedStyle.container}>

      <View style={savedStyle.header}>
        <TouchableOpacity onPress={() => navigation.goBack('ProfileScreen')}>
          <Icon type="ionicon" size={28} name={"arrow-back-outline"} />
        </TouchableOpacity>
        <Text style={savedStyle.headerName}>Saved</Text>
      </View>

      <View style={savedStyle.savedPostContainer}>
        {userPostData.map((item) => (
          <View style={savedStyle.savedPosts}>
            <TouchableOpacity onPress={() => navigation.push('SeeProfile')}>
              <Image source={item.userPic} style={savedStyle.profilePhoto} />
            </TouchableOpacity>

            <View style={{ paddingLeft: '10%', paddingRight: '2.5%' }}>
              <Post />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}