import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

import * as FileSystem from 'expo-file-system';
import DatePicker from "react-native-modern-datepicker";
import { Picker } from "@react-native-picker/picker";

import editProfileStyle from "../assets/styles/editProfile.style";

import Loading from "./components/loading";
import AddVoice from "./components/addVoice";
import BioVoicePopUp from "./components/bioVoicePopUp";
import OtherHeader from "./components/otherHeader";
import Post from "./components/post";
import ProfilePhotoPopUp from "./components/profilePhotoPopUp";

import { getUserById, removeUserFiles, updateUserInfo } from '../services/userServices';
import { baseURL } from "../utils/constants";
import { useUser } from "../utils/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../assets/colors";
import { TouchableWithoutFeedback } from "react-native";

export default function EditProfile({ navigation }) {

  const { user, setUser } = useUser();

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [firstname, setFirstName] = useState(user?.name);
  const [surname, setSurname] = useState(user?.surname);
  const [phone, setPhone] = useState(user?.phone);
  const [birthDay, setBirthDay] = useState(user?.birthDay);
  const [gender, setGender] = useState(user?.gender);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [openAddVoice, setOpenAddVoice] = useState(false);
  const [isDeleteVoice, setIsDeleteVoice] = useState(false);
  const [isAddVoice, setIsAddVoice] = useState(false);
  const [openBioVoicePopUp, setOpenBioVoicePopUp] = useState(false);
  const [openProfilePhotoPopUp, setOpenProfilePhotoPopUp] = useState(false);

  const save = async () => {
    setLoading(true);

    console.log("1")

    const formData = new FormData();
    if (isDeleteVoice == true) {
      await removeUserFiles({ type: "descriptionVoice" });
    }
    else if (isAddVoice) {
      formData.append("descriptionVoice", {
        uri: isAddVoice.uri,
        name: `recording-${Date.now()}.mpeg`,
        type: 'audio/mpeg',
      });
    }

    console.log("2")

    const info = null;

    console.log("3")

    if (image == null) {
      console.log("4")
      const info = user?.profilePhotoUrl
      console.log("5")
    }
    else {
      console.log("6")
      const info = await FileSystem.getInfoAsync(image);
      console.log("7")
    }
    console.log("8")

    formData.append("name", firstname);
    formData.append("surname", surname);
    formData.append("phone", phone);
    console.log("8.1")
    let birth = null;
    if (birthDay.includes("/")) {
      birth = formatDate();
    }
    else {
      birth = birthDay;
    }
    formData.append("birthDay", birth);
    console.log("8.2")
    formData.append("gender", gender);
    console.log("9")
    if (image) {
      formData.append("profilePhoto", {
        uri: info.uri,
        type: 'image/jpeg', // ya da 'image/png'
        name: 'profilePhoto.jpeg',
      });
    }
    console.log("10")
    const response = await updateUserInfo(formData);
    console.log("11")
    if (response && response.success) {
      getUserById({ id: user?._id }).then(async (res) => {
        setUser(res?.data);
        await AsyncStorage.setItem("user", JSON.stringify(res?.data));
      }).catch((err) => {
        console.log(err);
      })
      setLoading(false);
    }
    else {
      if (res?.data?.message == "Unauthorized") {
        await AsyncStorage.clear();
        navigation.navigate("Login");
      }
    }
    navigation.goBack();
  }

  if (loading) {
    return <Loading />
  }

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  const handleDateChange = (date) => {
    setBirthDay(date);
  };

  const formatDate = () => {
    const parts = birthDay.split('/');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];

    const isoString = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00.000Z`;
    return isoString;
  }

  const formatDateString = () => {
    const date = new Date(birthDay);
    const formatted = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    return formatted;
  };

  return (
    <KeyboardAvoidingView style={editProfileStyle.container}>
      <OtherHeader HeaderTitle="Edit Profile" navigation={navigation} isTic={false} />

      <Modal visible={showDatePicker} animationType="slide" transparent>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ backgroundColor: 'white' }}>
            <DatePicker
              mode="calendar"
              selected={birthDay}
              onDateChange={handleDateChange}
            />
            <TouchableOpacity onPress={closeDatePicker}>
              <Text style={editProfileStyle.saveButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={openProfilePhotoPopUp}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setOpenProfilePhotoPopUp(false)
        }}>
        <TouchableWithoutFeedback onPress={()=>setOpenProfilePhotoPopUp(false)}>
          <View style={{ flex: 1, position: "absolute", width: width, height: height }} />
        </TouchableWithoutFeedback>
        <ProfilePhotoPopUp navigation={navigation} setOpenProfilePhotoPopUp={setOpenProfilePhotoPopUp} setImage={setImage} title={"EditProfile"} />
      </Modal>

      <Modal visible={openBioVoicePopUp}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setOpenBioVoicePopUp(false)
        }}>
        <TouchableWithoutFeedback onPress={()=>setOpenBioVoicePopUp(false)}>
          <View style={{ flex: 1, position: "absolute", width: width, height: height }} />
        </TouchableWithoutFeedback>
        <BioVoicePopUp setIsDeleteVoice={setIsDeleteVoice} setOpenAddVoice={setOpenAddVoice} setOpenBioVoicePopUp={setOpenBioVoicePopUp} />
      </Modal>

      <View style={{ paddingTop: "5%" }}>
        <TouchableOpacity style={editProfileStyle.ppView} onPress={() => { setOpenProfilePhotoPopUp(true) }}>
          {!image ? (
            user?.profilePhotoUrl ?
              <Image source={{ uri: baseURL + user?.profilePhotoUrl }} style={editProfileStyle.profilePhoto} /> :
              <Image source={require('../assets/avatar.png')} style={editProfileStyle.profilePhoto} />
          ) : <Image source={{ uri: image }} style={editProfileStyle.profilePhoto} />
          }
          <Text style={editProfileStyle.editPhotoText}>Edit Profile Photo</Text>
        </TouchableOpacity>
      </View>



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
        keyboardType="phone-pad"
      />

      <Text style={editProfileStyle.label}>Birth Day</Text>
      <TouchableOpacity onPress={openDatePicker} style={{
        backgroundColor: colors.lightgray,
        borderRadius: 45,
        paddingVertical: "2.5%",
        paddingHorizontal: 10,
        width: "80%",
        marginHorizontal: "10%",
      }}>
        <Text>{birthDay.includes("-") ? formatDateString() : birthDay}</Text>
      </TouchableOpacity>

      <Text style={editProfileStyle.label}>Gender</Text>
      <View style={{
        backgroundColor: colors.lightgray,
        borderRadius: 45,
        paddingHorizontal: 10,
        width: "80%",
        marginHorizontal: "10%",
      }}>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          dropdownIconColor={colors.green}
          dropdownIconRippleColor={colors.gray}>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
      </View>

      {isDeleteVoice ? <Text style={editProfileStyle.isDeleteVoice}>Is delete?</Text> : null}
      <View style={{ marginVertical: "3%", marginHorizontal: "10%" }}>
        {user?.descriptionVoiceUrl != null ? (
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Post uri={user?.descriptionVoiceUrl} />
            <TouchableOpacity onPress={() => { setOpenBioVoicePopUp(true) }}>
              <Text style={editProfileStyle.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        ) :
          <View style={{ justifyContent: "center" }}>
            <Text style={editProfileStyle.dontHave}>
              {"You Don't have a biography"}</Text>

            <TouchableOpacity onPress={() => setOpenAddVoice(prev => !prev)}
              style={editProfileStyle.addVoiceHolder}>
              <Text style={editProfileStyle.addVoiceHolderText}>Add Voice</Text>
            </TouchableOpacity>
          </View>
        }
      </View>

      <TouchableOpacity onPress={save}>
        <Text style={editProfileStyle.saveButtonText}>Save</Text>
      </TouchableOpacity>

      {openAddVoice ? (<AddVoice title={"bio"} setIsAddVoice={setIsAddVoice} setOpenAddVoice={setOpenAddVoice} />) : null}
    </KeyboardAvoidingView >
  );
}   