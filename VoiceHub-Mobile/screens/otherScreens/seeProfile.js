import React, { useEffect, useRef, useState } from "react";
import {
    Image, RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View
} from "react-native";

import colors from "../../assets/colors";
import seeProfileStyles from '../../assets/styles/seeProfile.style';
import verfy from "../../assets/ver.png";

import { Icon } from "react-native-elements";
import DontShowPosts from "../components/DontShowPosts";
import RenderPost from "../components/RenderPost";
import AreYouSure from "../components/areYouSure";
import Post from "../components/post";

import { getMyPosts } from "../../services/postServices";
import { baseURL } from "../../utils/constants";
import Loading from "../components/loading";
import { getUserById } from "../../services/userServices";
import { followerCountFormatText } from "../../utils/followerCountFormatText";

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

    const getPosts = async () => {
        setLoading(true)
        const response = await getMyPosts({ isArchived: false, userId: userId });
        if (response && response.success) {
            let temp = response?.data?.map((item) => {
                return {
                    id: item._id,
                    categories: item.categories,
                    contentUrl: item.contentUrl,
                    username: item.username,
                    createdAt: item.createdAt,
                    createdBy: item.createdBy,
                    userPic: baseURL + item.createdBy.profilePhotoUrl,
                    likes: item.likes,
                    hasBio: !item.descriptionVoiceUrl ? false : true,
                    descriptionVoiceUrl: item.descriptionVoiceUrl,
                    isVerify: item.isTic,
                    comments: item.comments,
                }
            })
            setPosts(temp);
        }
        setLoading(false)
    }
    useEffect(() => {
        setLoading(true)
        getUserById({ id: userId }).then(async (res) => {
            setUser(res?.data);
            await getPosts();
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    if (loading) return <Loading />

    return (
        <SafeAreaView style={[seeProfileStyles.container, { backgroundColor: colors.green }]}>

            <View style={seeProfileStyles.leftTop}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon style={seeProfileStyles.BackButton} type="ionicon" size={28} name={"arrow-back-outline"} />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLayout}>
                    <Text style={seeProfileStyles.head}>{user?.username}</Text>

                    {user?.isVerify ? (
                        <Image source={verfy} style={seeProfileStyles.ver} />
                    ) : null}
                </TouchableOpacity>
            </View>

            <View style={{ width: "100%", borderBottomStartRadius: 26, borderBottomEndRadius: 26, backgroundColor: colors.white }}>

                {/* PP, Follow Count,  */}
                <View style={seeProfileStyles.actView}>
                    <Image source={{ uri: baseURL + user?.profilePhotoUrl }} style={seeProfileStyles.userPic} />
                    <View style={seeProfileStyles.followContents}>

                        <View style={seeProfileStyles.postCount}>
                            <Text style={seeProfileStyles.fNumber}>{posts?.length}</Text>
                            <Text style={seeProfileStyles.fText}>Post</Text>
                        </View>

                        <TouchableOpacity style={seeProfileStyles.followerCount}
                            onPress={() => { navigation.navigate("FollowFollower", { title: "Followers", user: user }); }}>
                            <Text style={seeProfileStyles.fNumber}>
                                {followerCountFormatText(user?.followers?.length)}
                            </Text>
                            <Text style={seeProfileStyles.fText}>Followers</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={seeProfileStyles.followCount}
                            onPress={() => { navigation.navigate("FollowFollower", { title: "Followings", user: user }); }}>
                            <Text style={seeProfileStyles.fNumber}>
                                {followerCountFormatText(user?.followings?.length)}
                            </Text>
                            <Text style={seeProfileStyles.fText}>Following</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Bio */}
                <View style={seeProfileStyles.bioContents}>
                    <Text style={seeProfileStyles.name}>{user?.name + " " + user?.surname}</Text>
                    {user?.hasBio ? (<Post uri={user?.descriptionVoiceUrl} />) : null}
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
                        posts?.length > 0 ? (
                            <RenderPost navigation={navigation} HeaderTitle={"OtherProfiles"} posts={posts} user={user} />
                        ) :
                            <Text style={
                                { marginTop: "5%", textAlign: "center", marginBottom: 20, color: colors.white, fontWeight: "700", fontSize: 16 }
                            }>
                                {"You have not post anyone yet :("}
                            </Text>
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

