import { View, Text, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider, Icon } from 'react-native-elements'
import Slider from '../components/slider'
import addVoice from '../../assets/styles/addVoice.style'
import addVoiceStyle from '../../assets/styles/addVoice.style'

export default function AddVoice() {
    const saveVoice = () => {
        Alert.alert("Recording Voice");
    }
    return (
        <View style={addVoice.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={addVoice.container}>
                <TouchableOpacity onPress={() => saveVoice()} style={addVoiceStyle.click}>
                    <Icon size={30} type="feather" name={'mic'} style={{marginTop:7.2}}/>
                </TouchableOpacity>
                <Slider />
                <Text style={addVoice.time}>0:00</Text>
            </View>
        </View>
    )
}
