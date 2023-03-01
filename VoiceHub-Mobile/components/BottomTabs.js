import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Divider, Icon } from 'react-native-elements'
import colors from '../assets/colors'
import bottomTabsStyle from '../assets/styles/bottomTabs.style'

const BottomTabs = ({ navigation, pageName }) => {

  return (
    <View style={[bottomTabsStyle.wrapper,{backgroundColor:(pageName=='Home'?(colors.green):colors.white)}]}>
      <Divider width={1} orientation='vertical'/>
      <View style={bottomTabsStyle.container}>
        <TouchableOpacity>
          <Icon size={25} type="font-awesome" name={'home'} color={pageName=='Home'?(colors.white):colors.green}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon size={25} type="font-awesome" name={'microphone'} color={pageName=='Home'?(colors.white):colors.green}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon size={25} type="font-awesome" name={'user'} color={pageName=='Home'?(colors.white):colors.green}/>
        </TouchableOpacity>
      </View>
    </View>
  )


}
export default BottomTabs