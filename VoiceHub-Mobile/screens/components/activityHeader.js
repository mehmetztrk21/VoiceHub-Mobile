import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

import activityHeaderStyle from '../../assets/styles/activityHeader.style'

const activityHeader = () => {
  return (
    <View style={activityHeaderStyle.wrapper}>
      <Divider width={1} orientation='vertical' />
      <View style={activityHeaderStyle.header}>
        <Text style={activityHeaderStyle.headerName}>Activity</Text>
      </View>
    </View>
  )
}

export default activityHeader