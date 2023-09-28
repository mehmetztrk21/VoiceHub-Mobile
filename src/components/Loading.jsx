import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import colors from '../../assets/colors'

const Loading = () => {
    return (
        <View style={{
            flex: 1, backgroundColor: colors.white,
            justifyContent: "center", alignItems: "center"
        }}>
            <ActivityIndicator size="large" color={colors.green} />
        </View>
    )
}

export default Loading