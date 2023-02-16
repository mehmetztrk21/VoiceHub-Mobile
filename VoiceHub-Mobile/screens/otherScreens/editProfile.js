import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import editProfileStyle from "../../assets/styles/editProfile.style"
import Post from "../components/post";
import OtherHeader from '../components/otherHeader';

export default function EditProfile({ navigation, route }) {
  const { RealName, uName, pic } = route.params;
  const hasBio = false;
  return (
    <View style={editProfileStyle.container}>
      <OtherHeader HeaderTitle='Edit Profile' navigation={navigation} />

      <View>
        <TouchableOpacity style={editProfileStyle.ppView}>
          <Image source={pic} style={editProfileStyle.profilePhoto} />
          <Text style={editProfileStyle.editPhotoText}>Edit Profile Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={editProfileStyle.TextView}>
        <View>
          <Text>User Name</Text>
          <TextInput
            placeholder={uName}
            style={editProfileStyle.searchBar}
          />
        </View>
        <View>
          <Text>Name</Text>
          <TextInput
            placeholder={RealName}
            style={editProfileStyle.searchBar}
          />
        </View>
      </View>

      <View style={{alignItems:"center"}}>
        {hasBio ? (
          <Slider />
        ) :
          <Text>You Don't have a biography</Text>
        }
      </View>

    </View>
  );
}   
