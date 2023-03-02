import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import SearchHeaderStyle from "../../assets/styles/SearchHeader.style"
import { Divider } from 'react-native-elements'
import logo from "../../assets/images/VoiceHub-4.png"

const SearchHeader = ({ pressLogo }) => {
    return (
        <View style={SearchHeaderStyle.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={SearchHeaderStyle.head}>
                <TouchableOpacity onPress={pressLogo}>
                    <Image source={logo} style={{ width: 115.2, height: 64.8 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchHeader