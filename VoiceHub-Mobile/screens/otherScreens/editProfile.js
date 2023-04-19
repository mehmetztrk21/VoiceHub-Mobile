import React, { useEffect, useState } from "react";
import { Image, Modal, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Icon } from "react-native-elements";

import DocumentPicker from "react-native-document-picker";

import colors from "../../assets/colors";
import editProfileStyle from "../../assets/styles/editProfile.style";

import AddVoice from "../components/addVoice";
import OtherHeader from "../components/otherHeader";
import BioVoicePopUp from "../components/bioVoicePopUp";
import Slider from "../components/slider";

import { Dimensions } from "react-native";
import { baseURL } from "../../utils/constants";
import ProfilePhotoPopUp from "../components/profilePhotoPopUp";
const { width } = Dimensions.get("window");

export default function EditProfile({ navigation, route }) {
  const { user } = route.params;

  const [openAddVoice, setOpenAddVoice] = useState(false);
  const [openBioVoicePopUp, setOpenBioVoicePopUp] = useState(false);
  const [openProfilePhotoPopUp, setOpenProfilePhotoPopUp] = useState(false);

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
      <OtherHeader HeaderTitle="Edit Profile" navigation={navigation} isTic={false} />

      <Modal visible={openBioVoicePopUp}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setOpenBioVoicePopUp(false)
        }}>
        <BioVoicePopUp setOpenAddVoice={setOpenAddVoice} setOpenBioVoicePopUp={setOpenBioVoicePopUp} />
      </Modal>

      <Modal visible={openProfilePhotoPopUp}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setOpenProfilePhotoPopUp(false)
        }}>
        <ProfilePhotoPopUp setOpenProfilePhotoPopUp={setOpenProfilePhotoPopUp} />
      </Modal>

      <View style={{ flexDirection: "column", marginTop: width * 0.07 }}>
        <View>
          <TouchableOpacity style={editProfileStyle.ppView} onPress={() => { setOpenProfilePhotoPopUp(true) }}>
            <Image source={{ uri: baseURL + user?.profilePhotoUrl }} style={editProfileStyle.profilePhoto} />
            <Text style={editProfileStyle.editPhotoText}>Edit Profile Photo</Text>
          </TouchableOpacity>
        </View>

        <Text style={editProfileStyle.label}>User Name</Text>
        <TextInput
          placeholder={user?.username}
          style={editProfileStyle.searchBar}
        />

        <Text style={editProfileStyle.label}>Name</Text>
        <TextInput
          placeholder={user?.name + " " + user?.surname}
          style={editProfileStyle.searchBar}
        />


        <View style={{ marginVertical: "3%", marginHorizontal: "10%" }}>
          {user?.descriptionVoiceInfo != null ? (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Icon type="feather" size={28} name={"play"} color={colors.black} style={{ paddingRight: 10 }} />
              <Slider />
              <TouchableOpacity onPress={() => { setOpenBioVoicePopUp(true) }}>
                <Text style={{ color: colors.green, fontSize: 14, fontWeight: "700", paddingLeft: 10 }}>Edit</Text>
              </TouchableOpacity>

            </View>
          ) :
            <View style={{ justifyContent: "center" }}>
              <Text style={{ color: colors.darkGray, fontSize: 14, fontWeight: "400", textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>You Don"t have a biography</Text>

              <TouchableOpacity onPress={() => setOpenAddVoice(prev => !prev)}
                style={{ width: "50%", marginLeft: "25%", backgroundColor: colors.green, borderRadius: 50, padding: 5, }}>
                <Text style={{ color: colors.white, fontSize: 14, fontWeight: "700", textAlign: "center", }}>Add Voice</Text>
              </TouchableOpacity>
            </View>
          }
        </View>




      </View>

      <TouchableOpacity onPress={() => navigation.goBack({ username: user?.username })} style={{ position: "absolute", bottom: 0, zIndex: 999 }}>
        <Text style={[editProfileStyle.saveButtonText, { backgroundColor: colors.green, textAlign: "center" }]}>Save</Text>
      </TouchableOpacity>

      {openAddVoice ? (<AddVoice title={"bio"} />) : null}
    </SafeAreaView >
  );
}   