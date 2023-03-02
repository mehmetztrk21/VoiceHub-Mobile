import React from 'react';
import { View, SafeAreaView } from 'react-native';

import seePostStyle from "../../assets/styles/seePost.style";
import user1 from "../../assets/userImages/user1.jpg"
import PostUserInfo from "../components/postUserInfo";
import Post from "../components/post";
import PostActions from "../components/postActions";
import PostTexts from "../components/postTexts";
import OtherHeader from "../components/otherHeader"

/* HALF SCREEN, CONTINUE THIS PAGE */
export default function SeePost({ navigation }) {
    return (
        <SafeAreaView style={seePostStyle.container}>

            <OtherHeader HeaderTitle={"Post"} navigation={navigation}/>

            <View style={seePostStyle.PostView}>
                <PostUserInfo navigation={navigation} userPic={user1} userName={'k.kayserili'}/>
                <View style={{ paddingLeft: '10%', paddingRight: '2.5%' }}>
                    <Post />
                </View>
                <PostActions navigation={navigation} />
                <PostTexts navigation={navigation} likesCount={'1221'} userPic={user1}/>
            </View>
        </SafeAreaView>
    );
}