import { View, Text } from 'react-native'
import React from 'react'
import { colors, Icon } from 'react-native-elements'

const DontShowPosts = () => {
    return (
        <View style={{flexDirection:"column", justifyContent:"center", alignItems:'center', paddingTop:20}}>
            <Icon name='lock' size={140} color={colors.white}/>
            <Text style={{color:colors.white, fontSize:24, fontWeight:"700"}}>This profile is private</Text>
        </View>
    )
}

export default DontShowPosts