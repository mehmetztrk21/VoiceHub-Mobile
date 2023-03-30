import React, { useEffect, useRef, useState } from "react";
import {
    ActivityIndicator,
    Image, RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View
} from "react-native";

import colors from "../../assets/colors";
import seeProfileStyles from '../../assets/styles/seeProfile.style';
import verfy from "../../assets/ver.png";

import { Icon } from "react-native-elements";
import AreYouSure from "../components/areYouSure";
import DontShowPosts from "../components/DontShowPosts";
import Post from "../components/post";
import RenderPost from "../components/RenderPost";

import { getMyPosts } from "../../services/postServices";
import { getUserById } from "../../services/userServices";
import { baseURL } from "../../utils/constants";

export default function SeeProfile({ navigation, route }) {
    const { userId } = route.params;

    const scrollViewRef = useRef(null);

    const handleLayout = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);


    const pullThePage = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 800)
    }

    const [openAreYouSure, setOpenAreYouSure] = useState(false);

    const getPosts = async (user=null) => {
        const response = await getMyPosts({ isArchived: false, userId: userId });
        if (response && response.success) {
            let temp = response.data.map((item) => {
                return {
                    id: item._id,
                    contentUrl: item.contentUrl,
                    categories: item.categories,
                    userName: user?.username,
                    createdBy: item.createdBy,
                    createdAt: item.createdAt,
                    userPic: baseURL + user?.profilePhotoUrl,
                    likesCount: 1451,
                    caption: "Coffee is the most imp part of my life !",
                    type: "sender",
                    category: "all",
                    showLike: false,
                    isSaved: item.isSaved,
                    isLiked: true,
                    date: "12/02/2023 12:41",
                    isYourFollower: true,
                    isYouFollowing: true,
                    commentCount: 12,
                    hasBio: false,
                    isVerify: false,
                }
            })
            setPosts(temp);
        }
    }
    useEffect(() => {
        setLoading(true);
        getUserById({ id: userId }).then(async (res) => {
            setUser(res.data);
            console.log(res);
            await getPosts(res.data);
        }).catch((err) => {
            console.log(err);
        })
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <View style={{
                flex: 1, backgroundColor: "rgba(255, 255, 255, 0)",
                justifyContent: "center", alignItems: "center",
            }}>
                <ActivityIndicator size="large" color={colors.green} />
            </View>)
    }

    return (
        <SafeAreaView style={[seeProfileStyles.container, { backgroundColor: colors.green }]}>

            <View style={seeProfileStyles.leftTop}>
                <TouchableOpacity onPress={() => navigation.goBack('HomeScreen')}>
                    <Icon style={seeProfileStyles.BackButton} type="ionicon" size={28} name={"arrow-back-outline"} />
                </TouchableOpacity>

                <Text style={seeProfileStyles.head}>{user.username}</Text>

                {true ? (
                    <Image source={verfy} style={seeProfileStyles.ver} />
                ) : null}
            </View>

            <View style={{ width: "100%", borderBottomStartRadius: 26, borderBottomEndRadius: 26, backgroundColor: colors.white }}>

                {/* PP, Follow Count,  */}
                <View style={seeProfileStyles.actView}>
                    <Image source={{ uri: baseURL + user.profilePhotoUrl }} style={seeProfileStyles.userPic} />
                    <View style={seeProfileStyles.followContents}>

                        <View style={seeProfileStyles.postCount}>
                            <Text style={seeProfileStyles.fNumber}>{user?.posts?.length}</Text>
                            <Text style={seeProfileStyles.fText}>Post</Text>
                        </View>

                        <TouchableOpacity style={seeProfileStyles.followerCount}
                            onPress={() => { navigation.navigate("FollowFollower", { title: "Followers", user: user }); }}>
                            <Text style={seeProfileStyles.fNumber}>
                                {
                                    user["followers"]?.length >= 1000000 ? `${Math.floor(user["followers"]?.length / 1000000)},${Math.floor((user["followers"]?.length) / 100000)}M`
                                        : user["followers"]?.length >= 1000 ? `${Math.floor(user["followers"]?.length / 1000)},${Math.floor((user["followers"]?.length) / 100)}K`
                                            : user["followers"]?.length
                                }
                            </Text>
                            <Text style={seeProfileStyles.fText}>Followers</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={seeProfileStyles.followCount}
                            onPress={() => { navigation.navigate("FollowFollower", { title: "Followings", user: user }); }}>
                            <Text style={seeProfileStyles.fNumber}>
                                {
                                    user["followings"]?.length >= 1000000 ? `${Math.floor(user["followings"]?.length / 1000000)}M`
                                        : user["followings"]?.length >= 1000 ? `${Math.floor(user["followings"]?.length / 1000)},${Math.floor((user["followings"]?.length % 1000) / 100)}K`
                                            : user["followings"]?.length
                                }
                            </Text>
                            <Text style={seeProfileStyles.fText}>Following</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Bio */}
                <View style={seeProfileStyles.bioContents}>
                    <Text style={seeProfileStyles.name}>{user.name + " " + user.surname}</Text>
                    {true ? (<Post />) : null}
                </View>

                {/* Edit Profile Buttons */}
                <View style={seeProfileStyles.btnHolder}>
                    <TouchableOpacity style={{
                        width: "80%",
                        alignItems: "center",
                        padding: "2%",
                        backgroundColor: colors.green,
                        borderRadius: 12.5,
                    }}>
                        <Text style={{ color: colors.white, fontSize: 16, fontWeight: "600", }}>
                            Follow
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Posts */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={seeProfileStyles.scroll}
                ref={scrollViewRef}
                onLayout={handleLayout}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
                }
            >
                <View style={[seeProfileStyles.postView, { backgroundColor: colors.green }]}>
                    {true ? (
                        <RenderPost navigation={navigation} HeaderTitle={'OtherProfiles'} posts={posts} />
                    ) :
                        <DontShowPosts />
                    }
                </View>
            </ScrollView>

            {openAreYouSure == true ? (
                <AreYouSure process={'LogOut'} navigation={navigation}
                    setOpenAreYouSure={setOpenAreYouSure} />
            ) : null}
        </SafeAreaView>
    );
}

