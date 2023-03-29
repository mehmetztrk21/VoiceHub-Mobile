import React, { useEffect, useRef, useState } from "react"
import { ActivityIndicator, Dimensions, Image, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"

import { FollowFollowerButtonText } from "../components/followFollowerButtonText"
import OtherHeader from "../components/otherHeader"

import { getUserInfo } from "../../services/postServices";

import colors from "../../assets/colors"
import followFollowerStyle from "../../assets/styles/follow&follower.style"
import ver from "../../assets/ver.png"

const { width } = Dimensions.get("window");

const FollowFollower = ({ navigation, route }) => {
    const { title, followers, followings } = route.params;

    const scrollViewRef = useRef();
    const handleLayout = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [follow, setFollow] = useState([]);
    const [follower, setFollower] = useState([]);

    const pullThePage = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false)
        }, 800)
    }

    const getUserInfos = async () => {
        setLoading(true);
        const response = await getUserInfo({ page: 1, limit: 30 });
        console.log(response);
        if (response && response.success) {
            let temp = response.data.map((item) => {
                console.log(item.categories, "item.categories")
                return {
                    id: item._id,
                    userId: item.userId,
                    contentUrl: item.contentUrl,
                    categories: item.categories,
                    userName: "Mehmet",
                    createdBy: item.createdBy,
                    createdAt: item.createdAt,
                    userPic: "user1",
                    likesCount: 1451,
                    caption: "Coffee is the most imp part of my life !",
                    type: "sender",
                    visible: true,
                    category: "all",
                    showLike: false,
                    isSaved: false,
                    isLiked: true,
                    date: "12/02/2023 12:41",
                    isYourFollower: true,
                    isYouFollowing: true,
                    commentCount: 12,
                    hasBio: false,
                    isVerify: false,
                }
            });
        }
        setLoading(false);
    }

    useEffect(() => {
        //getUserInfos();
    }, [])

    if (loading) {
        return (
            <View style={{
                flex: 1, backgroundColor: "rgba(255, 255, 255, 0)",
                justifyContent: "center", alignItems: "center",
            }}>
                <ActivityIndicator size="large" color={colors.green} />
            </View>
        )
    }

    return (
        <SafeAreaView style={followFollowerStyle.container}>
            <OtherHeader HeaderTitle={title} navigation={navigation} />
            <View style={{ marginTop: width * 0.07, backgroundColor: colors.white }}>
                <View style={[followFollowerStyle.searchBarHolder, { marginBottom: width * 0.07 }]}>
                    <TextInput
                        placeholder="Search"
                        style={[followFollowerStyle.searchBar, { marginBottom: width * 0.03 }]}
                    />
                </View>

                <ScrollView style={followFollowerStyle.scroll} ref={scrollViewRef}
                    onLayout={handleLayout} refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
                    } >
                    {title == "Followers" ? (
                        followers?.map((item, index) => {
                            return (
                                <View style={followFollowerStyle.item} key={index} >
                                    <TouchableOpacity style={followFollowerStyle.seeProfile}
                                        onPress={() => navigation.navigate("SeeProfile", { uName: "kaan", isVerified: true, visible: true, hasBio: true })}>
                                        <Image source={item.userPic} style={followFollowerStyle.profileImage} />
                                        <Text style={followFollowerStyle.userName}>{"kaan"}</Text>
                                        {item.isVerify ? (
                                            <Image source={ver} style={{ width: 14, height: 14, paddingLeft: 4, alignSelf: "center" }} />
                                        ) : null}
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{
                                        width: "30%",
                                        alignItems: "center",
                                        padding: "2%",
                                        backgroundColor: colors.green,
                                        borderRadius: 12.5,
                                    }}>
                                        <Text style={{ color: colors.white, fontSize: 16, fontWeight: "600", }}>
                                            {(FollowFollowerButtonText(true, false))}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    ) : title == "Followings" ? (
                        followings?.map((item, index) => {
                            return (
                                <View style={followFollowerStyle.item} key={index} >
                                    <TouchableOpacity style={followFollowerStyle.seeProfile}
                                        onPress={() => navigation.navigate("SeeProfile", { uName: "kaan", isVerified: true, visible: true, hasBio: true })}>
                                        <Image source={item.userPic} style={followFollowerStyle.profileImage} />
                                        <Text style={followFollowerStyle.userName}>{"kaan"}</Text>
                                        {item.isVerify ? (
                                            <Image source={ver} style={{ width: 14, height: 14, paddingLeft: 4, alignSelf: "center" }} />
                                        ) : null}
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{
                                        width: "30%",
                                        alignItems: "center",
                                        padding: "2%",
                                        backgroundColor: colors.green,
                                        borderRadius: 12.5,
                                    }}>
                                        <Text style={{ color: colors.white, fontSize: 16, fontWeight: "600", }}>
                                            {(FollowFollowerButtonText(true, false))}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    ) : null}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default FollowFollower