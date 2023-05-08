import React, { useEffect, useRef, useState } from "react";
import {
    Image, Modal, RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View
} from "react-native";

import colors from "../../assets/colors";
import seeProfileStyles from '../../assets/styles/seeProfile.style';
import verfy from "../../assets/ver.png";

import { Icon } from "react-native-elements";

import DontShowPosts from "../components/DontShowPosts";
import RenderPost from "../components/RenderPost";
import AreYouSure from "../components/areYouSure";
import Post from "../components/post";

import { setFollowFollower } from "../../services/actionServices";
import { getMyPosts } from "../../services/postServices";
import { getUserById } from "../../services/userServices";
import { baseURL } from "../../utils/constants";
import { followerCountFormatText } from "../../utils/followerCountFormatText";
import { useUser } from "../../utils/userContext";
import Loading from "../components/loading";
import SeeProfilePopUp from "../components/seeProfilePopUp";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SeeProfile({ navigation, route }) {
    const { userId } = route.params;
    const { user, setUser } = useUser();
    const scrollViewRef = useRef(null);

    const handleLayout = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    const [seeUser, setSeeUser] = useState({});
    const [posts, setPosts] = useState([]);

    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openSeeProfileOptions, setOpenSeeProfileOptions] = useState(false);


    const pullThePage = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 800)
    }

    const [openAreYouSure, setOpenAreYouSure] = useState(false);

    const getPosts = async () => {
        setLoading(true)
        const response = await getMyPosts({ isArchived: false, userId: userId });
        if (response && response.success) {
            setPosts(response?.data);
        }
        setLoading(false)
    }
    const followUnfollow = async () => {
        await setFollowFollower({ userId: seeUser._id }).then(async (res) => {
            console.log(res);
            if (res?.success) {
                let temp = { ...user };
                if (res.data == "Unfollowed successfully")
                    temp?.followings?.splice(temp?.followings?.indexOf(seeUser._id), 1);
                else
                    temp?.followings?.push(seeUser._id);
                setUser(temp);
                await AsyncStorage.setItem("user", JSON.stringify(temp));
                await getUser();
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    const getUser = async () => {
        getUserById({ id: userId }).then(async (res) => {
            setSeeUser(res?.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        setLoading(true)
        getUser();
        getPosts();
    }, []);

    if (loading) return <Loading />

    return (
        <SafeAreaView style={seeProfileStyles.container}>

            {/* SeeProfile's Header */}
            <View style={seeProfileStyles.SeeProfileHeader}>
                <View style={seeProfileStyles.nameHolder}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon style={seeProfileStyles.BackButton} type="ionicon" size={28} name={"arrow-back-outline"} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLayout} style={{ flexDirection: "row" }}>
                        <Text style={seeProfileStyles.head}>{seeUser?.username}</Text>

                        {seeUser?.isTic == true ? (
                            <Image source={verfy} style={seeProfileStyles.ver} />
                        ) : null}
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => { setOpenSeeProfileOptions(true) }} style={{ paddingHorizontal: "5%" }}>
                    <Icon type={"font-awesome"} size={24} name={"ellipsis-v"} />
                </TouchableOpacity>
            </View>

            <Modal
                visible={openSeeProfileOptions}
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                    setOpenSeeProfileOptions(false)
                }}>
                <SeeProfilePopUp navigation={navigation} userId={userId} openSeeProfileOptions={openSeeProfileOptions} setOpenSeeProfileOptions={setOpenSeeProfileOptions} />
            </Modal>

            <View style={{ width: "100%", borderBottomStartRadius: 26, borderBottomEndRadius: 26, backgroundColor: colors.white }}>

                {/* PP, Follow Count,  */}
                <View style={seeProfileStyles.actView}>

                    {seeUser?.profilePhotoUrl ?
                        <Image source={{ uri: baseURL + seeUser?.profilePhotoUrl }} style={seeProfileStyles.userPic} /> :
                        <Image source={require("../../assets/avatar.png")} style={seeProfileStyles.userPic} />
                    }

                    <View style={seeProfileStyles.followContents}>

                        <View style={seeProfileStyles.postCount}>
                            <Text style={seeProfileStyles.fNumber}>{posts?.length}</Text>
                            <Text style={seeProfileStyles.fText}>Post</Text>
                        </View>

                        <TouchableOpacity style={seeProfileStyles.followerCount}
                            onPress={() => { seeUser?.isSecretAccount == false || (!user?.blockedUsers?.includes(userId)) ? navigation.navigate("FollowFollower", { title: "Followers", thisUser: seeUser }) : null }}>
                            <Text style={seeProfileStyles.fNumber}>
                                {followerCountFormatText(seeUser?.followers?.length)}
                            </Text>
                            <Text style={seeProfileStyles.fText}>Followers</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={seeProfileStyles.followCount}
                            onPress={() => { seeUser?.isSecretAccount == false || (!user?.blockedUsers?.includes(userId)) ? navigation.navigate("FollowFollower", { title: "Followings", thisUser: seeUser }) : null }}>
                            <Text style={seeProfileStyles.fNumber}>
                                {followerCountFormatText(seeUser?.followings?.length)}
                            </Text>
                            <Text style={seeProfileStyles.fText}>Following</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Bio */}
                <View style={seeProfileStyles.bioContents}>
                    <Text style={seeProfileStyles.name}>{seeUser?.name + " " + seeUser?.surname}</Text>
                    {seeUser?.hasBio ? (<Post uri={seeUser?.descriptionVoiceUrl} />) : null}
                </View>

                {/* Message and Follow Buttons */}
                <View style={seeProfileStyles.btnHolder}>
                    <TouchableOpacity style={seeProfileStyles.messageButtonHolder}
                        onPress={() => { navigation.navigate("Message", { title: "UserMessage", id: seeUser?._id }); }}>
                        <Text style={seeProfileStyles.messageButtonText}>
                            Message
                        </Text>
                    </TouchableOpacity>
                    {
                        seeUser?.followers?.includes(user._id) ?
                            (
                                <TouchableOpacity style={seeProfileStyles.unfollowButtonHolder}
                                    onPress={() => { followUnfollow() }}
                                >
                                    <Text style={seeProfileStyles.unfollowButtonText}>
                                        Unfollow
                                    </Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={seeProfileStyles.followButtonHolder}
                                    onPress={() => { followUnfollow() }}
                                >
                                    <Text style={seeProfileStyles.followButtonText}>
                                        Follow
                                    </Text>
                                </TouchableOpacity>
                            )
                    }
                </View>
            </View>
            {/* Posts */}

            < ScrollView
                showsVerticalScrollIndicator={false}
                style={seeProfileStyles.scroll}
                ref={scrollViewRef}
                onLayout={handleLayout}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
                }>
                {(user?.blockedUsers?.includes(userId)) ?
                    (<DontShowPosts userId={userId} title={"blocked"} />) : (
                        (seeUser?.isSecretAccount == false) ?
                            (posts?.length > 0 ?
                                (<RenderPost navigation={navigation} HeaderTitle={"OtherProfiles"} posts={posts} thisUser={seeUser} />) :
                                (<Text style={seeProfileStyles.notPost}>Have not post anyone yet</Text>)
                            ) : <DontShowPosts userId={userId} title={"secret"} />)
                }
            </ScrollView>
            {
                openAreYouSure == true ? (
                    <AreYouSure process={'LogOut'} navigation={navigation}
                        setOpenAreYouSure={setOpenAreYouSure} />
                ) : null
            }
        </SafeAreaView >
    );
}
