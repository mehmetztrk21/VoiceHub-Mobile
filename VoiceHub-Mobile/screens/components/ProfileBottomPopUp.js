import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../assets/colors';
import popUpStyle from '../../assets/styles/ProfileBottomPopUp.style';

const ProfileBottomPopUp = ({ navigation }) => {

  return (
    <View style={popUpStyle.wrapper}>
      <View style={popUpStyle.container}>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}
          onPress={() => { navigation.navigate("Options"); setVisiblePopUp(false); }}>
          <Icon type="font-awesome" size={28} name={"cog"} style={popUpStyle.icon} color={colors.white} />
          <Text style={popUpStyle.text}>Options</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10, }}
          onPress={() => { setVisiblePopUp(false); setOpenAreYouSure(true) }}>
          <Icon type="font-awesome" size={28} name={"sign-out"} style={popUpStyle.icon} color={colors.white} />
          <Text style={popUpStyle.text}>Log out</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 10 }} onPress={setVisiblePopUp(false)}>
          <Text style={popUpStyle.close}>Close</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default ProfileBottomPopUp