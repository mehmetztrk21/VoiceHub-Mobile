import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

import activityHeaderStyle from '../../assets/styles/activityHeader.style'

const activityHeader = ({navigation}) => {
  return (
    <View style={activityHeaderStyle.wrapper}>
      <View style={activityHeaderStyle.header}>
      
      <TouchableOpacity onPress={()=>navigation.goBack('HomeScreen')}>
        <Icon style={activityHeaderStyle.BackButton} type="ionicon" size={28} name={"arrow-back-outline"} />
      </TouchableOpacity>

      <Text style={activityHeaderStyle.headerName}>Activity</Text>
      </View>
    </View>
  )
}

export default activityHeader