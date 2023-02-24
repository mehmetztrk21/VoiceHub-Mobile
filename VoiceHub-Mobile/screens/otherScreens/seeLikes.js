import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import userPostData from "../components/userPostData"
import OtherHeader from '../components/otherHeader'

import seeLikesStyle from "../../assets/styles/seeLikes.style"

const seeLikes = ({ navigation, route }) => {
    const { title } = route.params;
    return (
        <SafeAreaView>
            <OtherHeader HeaderTitle={title} navigation={navigation} />

            <View style={seeLikesStyle.searchBarHolder}>
                <TextInput
                    placeholder="Search"
                    style={seeLikesStyle.searchBar}
                />
            </View>

            <ScrollView style={seeLikesStyle.scroll}>
                {
                    userPostData.map((item) => {
                        return (
                            <View style={seeLikesStyle.item}>
                                <TouchableOpacity style={seeLikesStyle.seeProfile} 
                                onPress={() => navigation.navigate('ProfileScreen',{uName:item.userName, isYourProfile:false})} >
                                    <Image source={item.userPic} style={seeLikesStyle.profileImage} />
                                    <Text style={seeLikesStyle.userName}>{item.userName}</Text>
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

export default seeLikes