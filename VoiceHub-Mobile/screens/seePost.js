import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, Modal, RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native";

import colors from "../assets/colors";
import seePostStyle from "../assets/styles/seePost.style";
import avatar from "../assets/avatar.png";
import ver from "../assets/ver.png";

import AddVoice from "./components/addVoice";
import AreYouSure from "./components/areYouSure";
import Comment from "./components/comment";
import OtherHeader from "./components/otherHeader";
import Post from "./components/post";
import PostActions from "./components/postActions";
import PostCategories from "./components/postCategories";
import userPostData from "./components/userPostData";

import { getUserById } from "../services/userServices";
import { getPostById } from "../services/postServices";
import { baseURL } from "../utils/constants";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function SeePost({ navigation, route }) {
    const { userId, postId } = route.params;

    const scrollViewRef = useRef();

    const handleLayout = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    const [refreshing, setRefreshing] = useState(false);
    const [user, setUser] = useState(null);
    const [post, setPost] = useState({});
    const [openAreYouSure, setOpenAreYouSure] = useState(false);

    const pullThePage = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 800)
    }

    useEffect(() => {
        getUser();
        getPost();
    }, [])

    const getUser = async () => {
        getUserById({ id: userId }).then(async (res) => {
            setUser(res?.data);
        }).catch((err) => {
            console.log(err, index);
        })
    }

    const getPost = async () => {
        getPostById({ postId: postId }).then(async (res) => {
            setPost(res?.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <SafeAreaView style={seePostStyle.container}>

            <OtherHeader HeaderTitle={user?.username + "'s Post"} navigation={navigation} isTic={false} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={openAreYouSure}
                onRequestClose={() => {
                    setOpenAreYouSure(false);
                }}
            >
                <AreYouSure process={"DeleteComment"} setOpenAreYouSure={setOpenAreYouSure} />

            </Modal>
            <View style={[seePostStyle.top, { marginTop: height * 0.11 }]}>
                {user?.profilePhotoUrl ?
                    <Image source={{ uri: baseURL + user?.profilePhotoUrl }} style={seePostStyle.profilePhoto} /> :
                    <Image source={avatar} style={seePostStyle.profilePhoto} />
                }
                <View style={seePostStyle.usernameHolder}>
                    <Text style={seePostStyle.username}>
                        {user?.username}
                    </Text>

                    {user?.isTic ? (
                        <Image source={ver} style={seePostStyle.ver} />
                    ) : null}
                </View>

                {/* SOUND PLAYER */}
                <View style={seePostStyle.postHolder}>
                    <Post uri={post?.contentUrl} />
                </View>

                {/* CATEGORIES */}
                <View style={seePostStyle.categoryHolder}>
                    <PostCategories navigation={navigation} categories={post?.categories} title={"seePost"}/>
                </View>

                <View style={seePostStyle.postActionsHolder}>
                    <PostActions title={"seePost"} posts={post} navigation={navigation} username={user?.username} likes={post?.likes} commentCount={12} postId={postId} />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={seePostStyle.comments} ref={scrollViewRef}
                onLayout={handleLayout} refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
                } >
                {
                    userPostData.map((item, index) => {
                        return (
                            <View key={index} style={seePostStyle.commentHolder}>
                                <Comment navigation={navigation} userPic={item.userPic}
                                    username={item.username} setOpenAreYouSure={setOpenAreYouSure} />
                            </View>
                        )
                    })
                }
            </ScrollView>

            <AddVoice title={"comments"} />
        </SafeAreaView>
    );
}