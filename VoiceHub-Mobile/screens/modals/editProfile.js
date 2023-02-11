import React from 'react';
import { View, Text, Image, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements"
import editProfileStyle from "../../assets/styles/editProfile.style"
import Slider from "../components/slider";
import user1 from "../../assets/userImages/user1.jpg";

export default function EditProfile(editVisible) {
  const hasBio = false;
  return (
    <Modal style={{ width: "100%" }} onRequestClose={() => { !editVisible }}>
      <View>
        {editVisible.editVisible ? (
          <View style={editProfileStyle.container}>
            <View style={editProfileStyle.top}>
              <Text style={editProfileStyle.header}>Edit Profile</Text>
            </View>

            <View>
              <TouchableOpacity>
                <Image source={user1} style={editProfileStyle.profilePhoto} />
              </TouchableOpacity>
            </View>

            <View>
              <Text>User Name</Text>
              <TextInput
                placeholder="Search"
                style={editProfileStyle.searchBar}
              />
            </View>
            <View>
              <Text>Name LastName</Text>
              <TextInput
                placeholder="Search"
                style={editProfileStyle.searchBar}
              />
            </View>

            <View>
              {hasBio ? (
                <Slider />
              ) :
                <View>
                  <Text>You Don't have a biography</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon type="feather" size={"175%"} name={"mic"} />
                    <Slider />
                  </View>
                </View>
              }
            </View>

          </View>
        ) : null}
      </View></Modal>
  );
}   
