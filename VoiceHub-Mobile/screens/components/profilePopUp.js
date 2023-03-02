import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import profilePopUpStyle from '../../assets/styles/profilePopUp.style';

const profilePopUp = ({navigation, bottomSize}) => {
  return (
    <View style={[profilePopUpStyle.wrapper, { marginBottom: bottomSize }]}>
      <Divider width={1} orientation='vertical' />

      <TouchableOpacity style={profilePopUpStyle.container}>
        <Icon type="font-awesome" size={"175%"} name={"cog"} style={profilePopUpStyle.icon}/>
        <Text style={profilePopUpStyle.text}>Options</Text>
      </TouchableOpacity>

      <TouchableOpacity style={profilePopUpStyle.container}
      onPress={()=>navigation.push('Login')}>
        <Icon type="font-awesome" size={"175%"} name={"sign-out"} style={profilePopUpStyle.icon}/>
        <Text style={profilePopUpStyle.text}>Log out</Text>
      </TouchableOpacity>

    </View>
  )
}

export default profilePopUp