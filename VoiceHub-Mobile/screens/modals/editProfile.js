import React from 'react';
import { View, Text, Image } from 'react-native';
import editProfileStyle from "../../assets/styles/editProfile.style"
import Slider from "../components/slider";
import user1 from "../../assets/userImages/user1.jpg";
export default function EditProfile() {
  const hasBio=true;
    return (  
      <View style={editProfileStyle.container}>
      <View style={editProfileStyle.top}>
        <Text style={editProfileStyle.header}>Edit Profile</Text>
      </View>

      <View>
        <Image source={user1} style={editProfileStyle.profilePhoto}/>
      </View>

      <View>
        <Text>User Name</Text>
        <Text>Name LastName</Text>
      </View>

      <View>
        {hasBio?(
          <Slider/>
        ):
          <Text>You Don't have a biography</Text>
        }
      </View>

    </View> 
    );  
  }   
