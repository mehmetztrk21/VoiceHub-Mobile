import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import colors from '../../assets/colors.js'
import editPostPopUpStyle from '../../assets/styles/editPostPopUp.style'

const editPostPopUp = ({bottomSize}) => {
  return (
    <View style={[editPostPopUpStyle.container, { backgroundColor: colors.green, paddingHorizontal:10, marginBottom:bottomSize }]}>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical:10}}>
        <Icon type={'font-awesome'} name={'pencil'} size={28} color={colors.white} />
        <Text style={editPostPopUpStyle.button}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical:10}}>
        <Icon type={'font-awesome'} name={'share'} size={28} color={colors.white} />
        <Text style={editPostPopUpStyle.button}>Share</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical:10}}>
        <Icon type={'font-awesome'} name={'heart'} size={28} color={colors.white} />
        <Text style={editPostPopUpStyle.button}>Unshow Likes Count</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical:10}}>
        <Icon type={'font-awesome'} name={'archive'} size={28} color={colors.white} />
        <Text style={editPostPopUpStyle.button}>Archive</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical:10 }}>
        <Icon type={'font-awesome'} name={'trash'} size={28} color={colors.red} />
        <Text style={[editPostPopUpStyle.button, { color: colors.red }]}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

export default editPostPopUp