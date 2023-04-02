import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import colors from '../../assets/colors'

const Loading = () => {
    return (
        <View style={{
            flex: 1, backgroundColor: "rgba(255, 255, 255, 0)",
            justifyContent: "center", alignItems: "center"
        }}>
            <ActivityIndicator size="large" color={colors.green} />
        </View>
    )
}

export default Loading