import React from 'react';
import { View } from 'react-native';

import seePostStyle from "../../assets/styles/seePost.style";

import PostUserInfo from "../components/postUserInfo";
import Post from "../components/post";
import PostActions from "../components/postActions";
import PostTexts from "../components/postTexts";
import OtherHeader from "../components/otherHeader"

/* HALF SCREEN, CONTINUE THIS PAGE */
export default function SeePost({ navigation }) {
    return (
        <View style={seePostStyle.container}>

            <OtherHeader HeaderTitle={"Post"} navigation={navigation}/>

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