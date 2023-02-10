import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, Image } from 'react-native';

import { Icon } from "react-native-elements";

import Slider from "../../screens/components/slider"

import savedStyle from "../../assets/styles/saved.style";

import SeePost from "./seePost";

import user1 from "../../assets/userImages/user1.jpg";

//const [seeSavedPost, setSeeSavedPost] = useState(false);
// visible={seeSavedPost} onRequestClose={() => { setSeeSavedPost(!seeSavedPost) }}
export default function Saved() {
    return (

      <View style={savedStyle.container}>
        <Modal>
          <SeePost/>
        </Modal>

        <View style={savedStyle.top}>
          <Text style={savedStyle.header}>Saved</Text>
        </View>


        <View style={savedStyle.savedPosts}>
          {/* map kullanacagim */ /* onPress={() => { setSeeSavedPost(!seeSavedPost) }}*/}
          <TouchableOpacity>
            <Image source={user1} style={savedStyle.profilePhoto} />
            <Icon type="feather" size={28} name={"play"} />
            <Slider/>
          </TouchableOpacity>
        </View>

      </View>
    );
  }