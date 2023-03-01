import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const PostMedia = ({navigation}) => {
  return (
    <View style={{flexDirection:"column"}}>
      <View style={{flexDirection:"row"}}>
        <Text>Slider</Text>
        <TouchableOpacity>
          <Icon type='font-awesome' name='play'/>
        </TouchableOpacity>
      </View>
      <Text style={{textAlign:"right"}}>00:56</Text>
    </View>
  )
}

export default PostMedia