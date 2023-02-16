import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import OtherHeader from '../components/otherHeader'
import userPostData from '../components/userPostData'

import FollowFollowerStyles from "../../assets/styles/follow&follower.style"

const FollowFollower = ({ navigation, route }) => {
    const { title } = route.params;
    return (


        <SafeAreaView>
            <OtherHeader HeaderTitle={title} navigation={navigation} />
            <ScrollView style={{ paddingHorizontal: "10%" }}>
                {
                    userPostData.map((item) => {
                        return (
                            <View style={FollowFollowerStyles.last}>
                                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.push('SeeProfile')}>
                                    <Image source={item.userPic} style={FollowFollowerStyles.lastSearchImage} />
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

export default FollowFollower