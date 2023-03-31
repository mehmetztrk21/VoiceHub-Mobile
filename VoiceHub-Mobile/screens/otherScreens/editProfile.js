import React, { useState } from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Icon } from "react-native-elements";

import DocumentPicker from "react-native-document-picker";

import colors from "../../assets/colors";
import editProfileStyle from "../../assets/styles/editProfile.style";

import AddVoice from "../components/addVoice";
import OtherHeader from "../components/otherHeader";
import Slider from "../components/slider";

import { Dimensions } from "react-native";
import { baseURL } from "../../utils/constants";
const { width } = Dimensions.get("window");

export default function EditProfile({ navigation, route }) {
  const { RealName, uName, pic } = route.params;
  const hasBio = true;

  const [openAddVoice, setOpenAddVoice] = useState(false);

  async function pickFile() {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        "URI : " + result.uri,
        "Type : " + result.type, // mime type
        "File Name : " + result.name,
        "File Size : " + result.size
      );
    } catch (error) {
      console.log("Error picking file: ", error);
    }
  }



  return (
    <SafeAreaView style={editProfileStyle.container}>
      <OtherHeader HeaderTitle="Edit Profile" navigation={navigation} />

      <View style={{ flexDirection: "column", marginTop: width * 0.07 }}>
        <View>
          <TouchableOpacity style={editProfileStyle.ppView} onPress={pickFile}>
            <Image source={{ uri: pic }} style={editProfileStyle.profilePhoto} />
            <Text style={editProfileStyle.editPhotoText}>Edit Profile Photo</Text>
          </TouchableOpacity>
        </View>

        <Text style={editProfileStyle.label}>User Name</Text>
        <TextInput
          placeholder={uName}
          style={editProfileStyle.searchBar}
        />

        <Text style={editProfileStyle.label}>Name</Text>
        <TextInput
          placeholder={RealName}
          style={editProfileStyle.searchBar}
        />


        <View style={{ marginTop: "2.5%", marginHorizontal: "10%" }}>
          {hasBio ? (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Icon type="feather" size={28} name={"play"} color={colors.black} style={{ paddingRight: 10 }} />
              <Slider />
              <TouchableOpacity onPress={() => setOpenAddVoice(prev => !prev)}>
                <Text style={{ color: colors.green, fontSize: 14, fontWeight: "700", paddingLeft: 10 }}>Edit</Text>
              </TouchableOpacity>

            </View>
          ) :
            <View style={{ justifyContent: "center" }}>
              <Text style={{ color: colors.black, fontSize: 14, fontWeight: "400" }}>You Don"t have a biography</Text>

              <TouchableOpacity onPress={() => setOpenAddVoice(prev => !prev)}>
                <Text style={{ color: colors.green, fontSize: 14, fontWeight: "700" }}>Add new voice</Text>
              </TouchableOpacity>
            </View>
          }
        </View>

        <TouchableOpacity onPress={() => navigation.goBack({ uName: uName })}>
          <Text style={[editProfileStyle.saveButtonText, { backgroundColor: colors.green, textAlign: "center" }]}>Save</Text>
        </TouchableOpacity>


      </View>
      {openAddVoice ? (<AddVoice title={"bio"} />) : null}
    </SafeAreaView >
  );
}   