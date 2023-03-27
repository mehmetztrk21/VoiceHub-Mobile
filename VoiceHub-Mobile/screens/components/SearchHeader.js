import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { Divider } from 'react-native-elements'
import logo from "../../assets/images/VoiceHub-1.png"
import SearchHeaderStyle from "../../assets/styles/SearchHeader.style"

const SearchHeader = ({ pressLogo }) => {
    return (
        <View style={SearchHeaderStyle.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={SearchHeaderStyle.head}>
                <View style={SearchHeaderStyle.FirstRow}>
                    <TouchableOpacity onPress={pressLogo}>
                        <Image source={logo} style={{ width: 115.2, height: 64.8 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SearchHeader