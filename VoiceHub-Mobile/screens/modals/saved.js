import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, Image } from 'react-native';

import { Slider, Icon } from "react-native-elements";

import savedStyle from "../../assets/styles/saved.style";

import SeePost from "./seePost";

import user1 from "../../assets/userImages/user1.jpg";

//const [seeSavedPost, setSeeSavedPost] = useState(false);
// visible={seeSavedPost} onRequestClose={() => { setSeeSavedPost(!seeSavedPost) }}
export default class SavedScreen extends React.Component {
  render() {
    
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
            <Slider
              style={savedStyle.slider}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#1DB954"
              maximumTrackTintColor="#777777"
              thumbTintColor="#1DB954"
            />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
} 