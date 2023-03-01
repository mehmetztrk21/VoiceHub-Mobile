import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const PostActions = ({navigation}) => {
  return (
    <View style={{flexDirection:"row", justifyContent:"space-around"}}>
      <TouchableOpacity>
        <Icon type='font-awesome' name='heart-o'/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon type='font-awesome' name='comment-o'/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon type='font-awesome' name='bookmark-o'/>
      </TouchableOpacity>
    </View>
  )
}

export default PostActions