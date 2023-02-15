import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import editProfileStyle from "../../assets/styles/editProfile.style"
import Post from "../components/post";
import user1 from "../../assets/userImages/user1.jpg";
import OtherHeader from '../components/otherHeader';

export default function EditProfile({navigation}) {
  const hasBio = false;
  return (
    <View style={editProfileStyle.container}>
      <OtherHeader HeaderTitle='Edit Profile' navigation={navigation}/>

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
              <View style={{ paddingLeft: '10%', paddingRight: '2.5%' }}>
                <Post />
              </View>
            </View>
          </View>
        }
      </View>

    </View>
  );
}   
