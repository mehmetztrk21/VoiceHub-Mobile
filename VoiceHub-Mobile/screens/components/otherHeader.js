import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider, Icon } from 'react-native-elements'

import otherHeaderStyle from "../../assets/styles/otherHeader.style";

const otherHeader = ({ navigation, HeaderTitle }) => {
    return (
        <View style={otherHeaderStyle.wrapper}>
            <Divider width={1} orientation='vertical' />
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