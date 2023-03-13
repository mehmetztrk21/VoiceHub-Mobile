import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'

import OtherHeader from '../components/otherHeader'
import userPostData from '../components/userPostData'

import { TouchableOpacity } from 'react-native-web'
import followFollowerStyle from "../../assets/styles/follow&follower.style"

const FollowFollower = ({ navigation, route }) => {
    const { title } = route.params;
    return (
        <SafeAreaView style={followFollowerStyle.container}>
            <OtherHeader HeaderTitle={title} navigation={navigation} />

            <View style={followFollowerStyle.searchBarHolder}>
                <TextInput
                    placeholder="Search"
                    style={followFollowerStyle.searchBar}
                />
            </View>

            <ScrollView style={followFollowerStyle.scroll}>
                {
                    userPostData.map((item) => {
                        return (
                            <View style={followFollowerStyle.item} >
                                <TouchableOpacity style={followFollowerStyle.seeProfile}
                                onPress={() => navigation.navigate('SeeProfile',{ uName: item.userName, isVerified: true, visible: item.visible })}>
                                    <Image source={item.userPic} style={followFollowerStyle.profileImage} />
                                    <Text style={followFollowerStyle.userName}>{item.userName}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:"30%",alignItems:"center"}}>
                                    <Text style={followFollowerStyle.FollowButton}>Takip Et</Text>
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