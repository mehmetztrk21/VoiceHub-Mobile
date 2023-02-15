import React from 'react';
import { View,TouchableOpacity,Text } from 'react-native';

import seePostStyle from "../../assets/styles/seePost.style";

import PostUserInfo from "../components/postUserInfo";
import Post from "../components/post";
import PostActions from "../components/postActions";
import PostTexts from "../components/postTexts";
import { Icon } from 'react-native-elements';

/* HALF SCREEN, CONTINUE THIS PAGE */
export default function SeePost({ navigation, userName }) {
    return (
        <View style={seePostStyle.container}>

            <View style={seePostStyle.header}>
                <TouchableOpacity onPress={() => navigation.goBack('ActivityScreen')}>
                    <Icon type="ionicon" size={28} name={"arrow-back-outline"} />
                </TouchableOpacity>
                <Text style={seePostStyle.headerName}>{userName} Post</Text>
            </View>

            <View>
                <PostUserInfo navigation={navigation} />
                <View style={{ paddingLeft: '10%', paddingRight: '2.5%' }}>
                    <Post />
                </View>
                <PostActions navigation={navigation} />
                <PostTexts navigation={navigation} />
            </View>
        </View>
    );
}