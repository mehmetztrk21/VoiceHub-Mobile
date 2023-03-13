import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../assets/colors';
import editProfileStyle from "../../assets/styles/editProfile.style";
import AddVoice from "../components/addVoice";
import OtherHeader from '../components/otherHeader';
import Slider from '../components/slider';

export default function EditProfile({ navigation, route }) {
  const { RealName, uName, pic } = route.params;
  const hasBio = true;

  const [openAddVoice,setOpenAddVoice]=useState(false);

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
        <View style={{ marginBottom: "1%" }}>
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

      <View style={{ marginTop: "2.5%", marginHorizontal: "10%" }}>
        {hasBio ? (
          <View style={{ flexDirection: 'row', alignItems:"center", justifyContent:'center' }}>
            <Icon type="feather" size={"175%"} name={"play"} color={colors.black} style={{paddingRight:10}}/>
            <Slider />
            <TouchableOpacity onPress={()=>setOpenAddVoice(prev=>!prev)}>
              <Text style={{color:colors.green, fontSize:14, fontWeight:"700", paddingLeft:10}}>Edit</Text>
            </TouchableOpacity>

          </View>
        ) :
          <View style={{justifyContent:'center'}}>
            <Text style={{color:colors.black, fontSize:14, fontWeight:"400"}}>You Don't have a biography</Text>

            <TouchableOpacity onPress={()=>setOpenAddVoice(prev=>!prev)}>
              <Text style={{color:colors.green, fontSize:14, fontWeight:"700"}}>Add new voice</Text>
            </TouchableOpacity>
          </View>
        }
      </View>

      <TouchableOpacity onPress={() => navigation.goBack('ProfileScreen')}>
        <Text style={[editProfileStyle.saveButtonText, { background: colors.grad, textAlign: "center" }]}>Save</Text>
      </TouchableOpacity>

      {openAddVoice?(<AddVoice navigation={navigation} />):null}
    </SafeAreaView>
  );
}   