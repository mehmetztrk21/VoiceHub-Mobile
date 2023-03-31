import React, { useEffect, useRef, useState } from "react"
import { ActivityIndicator, Dimensions, Image, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"

import { FollowFollowerButtonText } from "../../utils/followFollowerButtonText"
import OtherHeader from "../components/otherHeader"

import { getFollowers, getFollowings } from "../../services/userServices";

import colors from "../../assets/colors"
import followFollowerStyle from "../../assets/styles/follow&follower.style"
import ver from "../../assets/ver.png"
import { baseURL } from "../../utils/constants";

const { width } = Dimensions.get("window");

const FollowFollower = ({ navigation, route }) => {
    const { title, user } = route.params;

    const scrollViewRef = useRef();
    const handleLayout = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [followings, setFollowings] = useState([]);
    const [followers, setFollowers] = useState([]);

    const pullThePage = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false)
        }, 800)
    }

    useEffect(() => {
        setLoading(true);

        if (title == "Followings") {
            getFollowings({ userId: user?._id }).then((res) => {
                setFollowings(res?.data);
                setLoading(false);
            }).catch((err) => {
                console.log(err);
                setLoading(false);

            })
        }
        else if (title == "Followers") {
            getFollowers({ userId: user?._id }).then((res) => {
                setFollowers(res?.data);
                setLoading(false);

            }).catch((err) => {
                console.log(err);
                setLoading(false);

            })
        }
        else {
            //empty
        }
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

                {((title == "Followers" && followers?.length == 0) || (title == "Followings" && followings?.length == 0)) ? (
                    <View style={{ marginTop: "5%" }}>
                        <Text style={
                            { textAlign: "center", marginBottom: 20, color: colors.green, fontWeight: "700", fontSize: 16 }
                        }>
                            {"You are not following anyone yet :("}
                        </Text>

                        <TouchableOpacity onPress={() => { navigation.navigate("SearchScreen", { uName: uName, getCategory: "all", type: "discovery" }) }}>
                            <Text style={
                                { width: "60%", marginLeft: "20%", textAlign: "center", marginBottom: 20, color: colors.white, fontWeight: "700", fontSize: 16, backgroundColor: colors.green, borderRadius: 15, paddingVertical: 10, }}>
                                Discover now!
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : null}

                <ScrollView style={followFollowerStyle.scroll} ref={scrollViewRef}
                    onLayout={handleLayout} refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
                    } >
                    {title == "Followers" ? (
                        followers?.map((item, index) => {
                            return (
                                <View style={followFollowerStyle.item} key={index} >
                                    <TouchableOpacity style={followFollowerStyle.seeProfile}
                                        onPress={() => navigation.navigate("SeeProfile", { userId: user?._id })}>
                                        <Image source={{ uri: baseURL + item.profilePhotoUrl }} style={followFollowerStyle.profileImage} />
                                        <Text style={followFollowerStyle.userName}>{item.username}</Text>
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
                                            {FollowFollowerButtonText(title, item, user?._id)}
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
                                        onPress={() => navigation.navigate("SeeProfile", { userId: user?._id })}>
                                        <Image source={{ uri: baseURL + item?.profilePhotoUrl || "" }} style={followFollowerStyle.profileImage} />
                                        <Text style={followFollowerStyle.userName}>{item.username}</Text>
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
                                            {FollowFollowerButtonText(title, item, user?._id)}
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