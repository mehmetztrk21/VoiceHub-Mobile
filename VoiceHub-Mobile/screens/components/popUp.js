import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import colors from '../../assets/colors';
import popUpStyle from '../../assets/styles/popUp.style';
const PopUp = ({ navigation, bottomSize, setOpenAreYouSure, setVisiblePopUp }) => {

  return (
    <View style={[popUpStyle.wrapper,
    {
      marginBottom: bottomSize,
      backgroundColor: colors.green
    }]}>
      <Divider width={1} orientation='vertical' />

      <TouchableOpacity style={popUpStyle.container}
        onPress={() => { navigation.navigate("Options"); setVisiblePopUp(false); }}>
        <Icon type="font-awesome" size={28} name={"cog"} style={popUpStyle.icon} color={colors.white} />
        <Text style={popUpStyle.text}>Options</Text>
      </TouchableOpacity>

      <TouchableOpacity style={popUpStyle.container}
        onPress={() => { setVisiblePopUp(false); setOpenAreYouSure(true) }}>
        <Icon type="font-awesome" size={28} name={"sign-out"} style={popUpStyle.icon} color={colors.white} />
        <Text style={popUpStyle.text}>Log out</Text>
      </TouchableOpacity>

    </View>
  )
}

export default PopUp