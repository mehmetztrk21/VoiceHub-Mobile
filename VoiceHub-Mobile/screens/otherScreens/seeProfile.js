import React from "react";
import { View, Text } from "react-native";
import OtherHeader from '../components/otherHeader'
import PostUserInfo from '../components/postUserInfo'
import Post from '../components/post'
import PostActions from '../components/postActions'
import PostTexts from '../components/postTexts'
import seeProfileStyle from "../../assets/styles/seeProfile.style";

export default function SeeProfile({navigation}) {
    return(
        <View style={seeProfileStyle.container}>
            <OtherHeader HeaderTitle={'Profile'} navigation={navigation}/>

            <Text>See Profile</Text>
            
        </View>
    );
}