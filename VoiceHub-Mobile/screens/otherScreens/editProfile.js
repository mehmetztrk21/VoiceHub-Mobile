import React, { useState } from "react";
import { Image, Modal, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Icon } from "react-native-elements";


import colors from "../../assets/colors";
import editProfileStyle from "../../assets/styles/editProfile.style";

import * as FileSystem from 'expo-file-system';

import Loading from "../../screens/components/loading";

import AddVoice from "../components/addVoice";
import BioVoicePopUp from "../components/bioVoicePopUp";
import OtherHeader from "../components/otherHeader";
import Slider from "../components/slider";

import { Dimensions } from "react-native";
import { getUserById, updateUserInfo } from "../../services/userServices";
import { baseURL } from "../../utils/constants";
import { useUser } from "../../utils/userContext";
import ProfilePhotoPopUp from "../components/profilePhotoPopUp";
import { Picker } from "@react-native-picker/picker";

const { width } = Dimensions.get("window");

export default function EditProfile({ navigation }) {

  const { user, setUser } = useUser();

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [firstname, setFirstName] = useState(user?.name);
  const [surname, setSurname] = useState(user?.surname);
  const [username, setUserName] = useState(user?.username);
  const [phone, setPhone] = useState(user?.phone);
  const [birthDay, setBirthDay] = useState(user?.birthDay);
  const [gender, setGender] = useState(user?.gender);

  const [openAddVoice, setOpenAddVoice] = useState(false);
  const [openBioVoicePopUp, setOpenBioVoicePopUp] = useState(false);
  const [openProfilePhotoPopUp, setOpenProfilePhotoPopUp] = useState(false);

  const save = async () => {
    setLoading(true);
    const formData = new FormData();

    const info = await FileSystem.getInfoAsync((image) ? image : user?.profilePhotoUrl);

    formData.append("name", firstname);
    formData.append("surname", surname);
    formData.append("username", username);
    formData.append("phone", phone);
    formData.append("birthDay", birthDay);
    formData.append("gender", gender);

    if (image) {
      formData.append("profilePhoto", {
        uri: info.uri,
        type: 'image/jpeg', // ya da 'image/png'
        name: 'profilePhoto.jpeg',
      });
    }


    const response = await updateUserInfo(formData);

    if (response && response.success) {
      getUserById({ id: user?._id }).then(async (res) => {
        setUser(res?.data);
      }).catch((err) => {
        console.log(err);
      })
      setLoading(false);
    }
    navigation.goBack();
  }

  if (loading) {
    return <Loading />
  }

  return (
    <SafeAreaView style={editProfileStyle.container}>
      <OtherHeader HeaderTitle="Edit Profile" navigation={navigation} isTic={false} />

      <Modal visible={openProfilePhotoPopUp}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setOpenProfilePhotoPopUp(false)
        }}>
        <ProfilePhotoPopUp setOpenProfilePhotoPopUp={setOpenProfilePhotoPopUp} image={image} setImage={setImage} />
      </Modal>

      <Modal visible={openBioVoicePopUp}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setOpenBioVoicePopUp(false)
        }}>
        <BioVoicePopUp setOpenAddVoice={setOpenAddVoice} setOpenBioVoicePopUp={setOpenBioVoicePopUp} />
      </Modal>

      <ScrollView style={{ flexDirection: "column", marginTop: width * 0.07 }}>
        <View>
          <TouchableOpacity style={editProfileStyle.ppView} onPress={() => { setOpenProfilePhotoPopUp(true) }}>
            {!image ? (
              user?.profilePhotoUrl ?
                <Image source={{ uri: baseURL + user?.profilePhotoUrl }} style={editProfileStyle.profilePhoto} /> :
                <Image source={require('../../assets/avatar.png')} style={editProfileStyle.profilePhoto} />
            ) : <Image source={{ uri: image }} style={editProfileStyle.profilePhoto} />
            }
            <Text style={editProfileStyle.editPhotoText}>Edit Profile Photo</Text>
          </TouchableOpacity>
        </View>

        <Text style={editProfileStyle.label}>User Name</Text>
        <TextInput
          value={username}
          onChangeText={(username) => setUserName(username)}
          style={editProfileStyle.searchBar}
        />

        <Text style={editProfileStyle.label}>Name</Text>
        <TextInput
          value={firstname}
          onChangeText={firstname => setFirstName(firstname)}
          style={editProfileStyle.searchBar}
        />

        <Text style={editProfileStyle.label}>Surname</Text>
        <TextInput
          value={surname}
          onChangeText={surname => setSurname(surname)}
          style={editProfileStyle.searchBar}
        />

        <Text style={editProfileStyle.label}>Phone</Text>
        <TextInput
          value={phone}
          onChangeText={phone => setPhone(phone)}
          style={editProfileStyle.searchBar}
        />

        <Text style={editProfileStyle.label}>Birth Day</Text>
        <TextInput
          value={birthDay}
          onChangeText={birthDay => setBirthDay(birthDay)}
          style={editProfileStyle.searchBar}
        />

        <Text style={editProfileStyle.label}>Gender</Text>
        <Picker
          style={{
            backgroundColor: colors.lightgray,
            borderRadius: 15,
            paddingVertical: "2.5%",
            paddingHorizontal: "2.5%",
            width: "80%",
            marginHorizontal: "10%",
          }}
          value={gender}
          selectedValue={gender}
          onValueChange={(gender) => setGender(gender)}>
          <Picker.Item label="Choose Gender" value="" />
          <Picker.Item label={"Male"} value={"male"} />
          <Picker.Item label={"Female"} value={"female"} />
        </Picker>


        <View style={{ marginVertical: "3%", marginHorizontal: "10%" }}>
          {user?.descriptionVoiceUrl != null ? (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Icon type="feather" size={28} name={"play"} color={colors.black} style={{ paddingRight: 10 }} />
              <Slider />
              <TouchableOpacity onPress={() => { setOpenBioVoicePopUp(true) }}>
                <Text style={{ color: colors.green, fontSize: 14, fontWeight: "700", paddingLeft: 10 }}>Edit</Text>
              </TouchableOpacity>
            </View>
          ) :
            <View style={{ justifyContent: "center" }}>
              <Text style={{ color: colors.darkGray, fontSize: 14, fontWeight: "500", textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>
                {"You Don't have a biography"}</Text>

              <TouchableOpacity onPress={() => setOpenAddVoice(prev => !prev)}
                style={{ width: "50%", marginLeft: "25%", backgroundColor: colors.green, borderRadius: 50, padding: 5, }}>
                <Text style={{ color: colors.white, fontSize: 14, fontWeight: "700", textAlign: "center", }}>Add Voice</Text>
              </TouchableOpacity>
            </View>
          }
        </View>

        <TouchableOpacity onPress={save}>
          <Text style={editProfileStyle.saveButtonText}>Save</Text>
        </TouchableOpacity>

        {openAddVoice ? (<AddVoice title={"bio"} />) : null}
      </ScrollView>
    </SafeAreaView >
  );
}   