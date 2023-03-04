import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

import otherHeaderStyle from "../../assets/styles/otherHeader.style";

const otherHeader = ({ navigation, HeaderTitle }) => {
    return (
        <View style={otherHeaderStyle.wrapper}>
            <View style={otherHeaderStyle.aHeadView}>
                <TouchableOpacity onPress={() => navigation.goBack('HomeScreen')}>
                    <Icon type="ionicon" size={30} name={"arrow-back-outline"} style={otherHeaderStyle.BackButton}/>
                </TouchableOpacity>
                <Text style={otherHeaderStyle.headerName}>{HeaderTitle}</Text>
            </View>
        </View>
    )
}

export default otherHeader