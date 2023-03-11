import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from "../../assets/colors"
const areYouSure = () => {
  return (
    <View style={{justifyContent:'center', borderRadius:16, backgroundColor:colors.white}}>
      <Text style={{textAlign:"center", fontWeight:"400"}}>Are you sure?</Text>

      <TouchableOpacity>
        <Text style={{fontSize:16, fontWeight:"700", borderTopWidth:1, borderBottomWidth:1, borderColor:colors.gray}}>Yes</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{fontSize:16, fontWeight:"700", borderTopWidth:1, borderBottomWidth:1, borderColor:colors.gray}}>No</Text>
      </TouchableOpacity>
    </View>
  )
}

export default areYouSure