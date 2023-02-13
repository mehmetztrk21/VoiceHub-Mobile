import React from 'react';
import { View } from 'react-native';

import seePostStyle from "../../assets/styles/seePost.style";

import PostUserInfo from "../components/postUserInfo";
import Post from "../components/post";
import PostActions from "../components/postActions";
import PostTexts from "../components/postTexts";

/* HALF SCREEN, CONTINUE THIS PAGE */
export default function SeePost() {
        return (
            <View style={seePostStyle.container}>
                <PostUserInfo test= {1}/>
                <Post/>
                <PostActions/>
                <PostTexts />
            </View>
        );
    }