import React from 'react';
import { View } from 'react-native';

import seePostStyle from "../../assets/styles/seePost.style";

//import PostUserInfo from "../components/postUserInfo";
import Post from "../components/post";
import PostActions from "../components/postActions";
//import PostTexts from "../components/postTexts";

/* HALF SCREEN, CONTINUE THIS PAGE */
export default class seePostScreen extends React.Component {
    render() {
        return (
            <View style={seePostStyle.container}>
                {/*<PostUserInfo/>*/}
                <Post/>
                <PostActions/>
                {/*<PostTexts />*/}
            </View>
        );
    }
} 