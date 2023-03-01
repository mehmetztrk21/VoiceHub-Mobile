import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const PostMedia = ({navigation}) => {
  return (
    <View>
      <Text>Slider</Text>
      <TouchableOpacity>
        <Icon type='font-awesome' name='play'/>
      </TouchableOpacity>
      <Text>00:56</Text>
    </View>
  )
}

export default PostMedia