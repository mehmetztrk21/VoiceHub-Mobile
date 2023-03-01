import React from 'react'
import { Image, Text, View } from 'react-native'

import { Icon } from 'react-native-elements'
import colors from '../assets/colors'
import image from "../assets/images/VoiceHub-3.png"
import BottomTabs from '../components/BottomTabs'

const upload = ({ navigation }) => {
    return (
        <View style={{ flex: 1, width: "100%", backgroundColor: colors.green, }}>
            <Image source={image} style={{ width: 300, height: 300, borderRadius: 150 }} />
            <Text style={{fontSize:32, fontWeight:"bold", color:colors.white}}>0:48:42</Text>
            <View style={{ backgroundColor: colors.white, padding: 10, borderRadius: 30, width: 60, height: 60, justifyContent:"center" }}>
                <Icon type='font-awesome' name='play' size={50} color={colors.green}/>
            </View>

            <BottomTabs navigation={navigation} pageName={'Upload'}/>
        </View>
    )
}

export default upload