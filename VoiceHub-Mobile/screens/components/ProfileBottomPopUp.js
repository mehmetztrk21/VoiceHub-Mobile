import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import colors from '../../assets/colors';
import popUpStyle from '../../assets/styles/ProfileBottomPopUp.style';

const ProfileBottomPopUp = ({ navigation, setOpenAreYouSure, setVisiblePopUp }) => {

  return (
    <View style={popUpStyle.wrapper}>
      <View style={popUpStyle.container}>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}
          onPress={() => { navigation.navigate("Options"); setVisiblePopUp(false); }}>
          <Ionicons size={28} name={"settings-outline"} style={popUpStyle.icon} color={colors.white} />
          <Text style={popUpStyle.text}>Options</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10, }}
          onPress={() => { setVisiblePopUp(false); setOpenAreYouSure(true) }}>
          <Ionicons size={28} name={"log-out-outline"} style={popUpStyle.icon} color={colors.white} />
          <Text style={popUpStyle.text}>Log out</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setVisiblePopUp(false) }}>
          <Text style={popUpStyle.close}>Close</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default ProfileBottomPopUp