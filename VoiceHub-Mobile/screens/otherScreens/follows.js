import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import OtherHeader from '../components/otherHeader'
import userPostData from '../components/userPostData'

import followStyles from "../../assets/styles/follow.style"

const Follows = ({ navigation }) => {
    return (


        <SafeAreaView>
            <OtherHeader HeaderTitle='Follows' navigation={navigation} />
            <ScrollView style={{ paddingHorizontal: "10%" }}>
                {
                    userPostData.map((item) => {
                        return (
                            <View style={followStyles.last}>
                                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.push('SeeProfile')}>
                                    <Image source={item.userPic} style={followStyles.lastSearchImage} />
                                    <View style={{ flexDirection: "column" }}>
                                        <Text>{item.userName}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Follows