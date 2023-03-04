import React from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import editProfileStyle from "../../assets/styles/editProfile.style";

import OtherHeader from '../components/otherHeader';

export default function EditProfile({ navigation, route }) {
  const { RealName, uName, pic } = route.params;
  const hasBio = false;
  return (
    <SafeAreaView style={editProfileStyle.container}>
      <OtherHeader HeaderTitle='Edit Profile' navigation={navigation} />

      <View>
        <TouchableOpacity style={editProfileStyle.ppView}>
          <Image source={pic} style={editProfileStyle.profilePhoto} />
          <Text style={editProfileStyle.editPhotoText}>Edit Profile Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={editProfileStyle.TextView}>
        <View style={{marginBottom:"1%"}}>
          <Text style={editProfileStyle.label}>User Name</Text>
          <TextInput
            placeholder={uName}
            style={editProfileStyle.searchBar}
          />
        </View>
        <View>
          <Text style={editProfileStyle.label}>Name</Text>
          <TextInput
            placeholder={RealName}
            style={editProfileStyle.searchBar}
          />
        </View>
      </View>

      <View style={{alignItems:"center", marginTop:"2.5%"}}>
        {hasBio ? (
          <Slider />
        ) :
            <Text>You Don't have a biography</Text>
        }
      </View>
      <AddVoice navigation={navigation}/>
    </SafeAreaView>
  );
}   