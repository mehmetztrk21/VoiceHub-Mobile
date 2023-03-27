import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import colors from '../../assets/colors.js'
import archivePopUpStyle from "../../assets/styles/archivePopUp.style.js"

const archivePopUp = () => {

  return (
    <View style={[archivePopUpStyle.container, { backgroundColor: colors.green, paddingHorizontal:10 }]}>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical:10}}>
        <Icon name={'unarchive'} size={28} color={colors.white} />
        <Text style={archivePopUpStyle.button}>Unarchive</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical:10 }}>
        <Icon type={'font-awesome'} name={'trash'} size={28} color={colors.red} />
        <Text style={[archivePopUpStyle.button, { color: colors.red }]}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

export default archivePopUp