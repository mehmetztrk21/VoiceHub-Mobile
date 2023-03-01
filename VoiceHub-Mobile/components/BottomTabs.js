import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Divider, Icon } from 'react-native-elements'
import colors from '../assets/colors'
import bottomTabsStyle from '../assets/styles/bottomTabs.style'

const BottomTabs = ({ navigation }) => {

  return (
    <View style={bottomTabsStyle.wrapper}>
      <Divider width={1} orientation='vertical'/>
      <View style={bottomTabsStyle.container}>
        <TouchableOpacity>
          <Icon size={25} type="font-awesome" name={'home'} color={colors.white}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon size={25} type="font-awesome" name={'microphone'} color={colors.white}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon size={25} type="font-awesome" name={'user'} color={colors.white}/>
        </TouchableOpacity>
      </View>
    </View>
  )


}
export default BottomTabs