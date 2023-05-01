import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import colors from '../../assets/colors'

const DontShowPosts = () => {
    return (
        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: 'center', paddingTop: 20 }}>
            <Icon name='lock' size={140} color={colors.white} />
            <Text style={{ color: colors.white, fontSize: 24, fontWeight: "700" }}>This profile is private. Follow now!</Text>
        </View>
    )
}

export default DontShowPosts