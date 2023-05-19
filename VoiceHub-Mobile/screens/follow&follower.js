import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import OtherHeader from "./components/otherHeader";

import { getFollowers, getFollowings } from "../services/userServices";

import colors from "../assets/colors";
import followFollowerStyle from "../assets/styles/follow&follower.style";
import ver from "../assets/ver.png";
import { baseURL } from "../utils/constants";
import Loading from "./components/loading";
import { useUser } from "../utils/userContext";
import { setFollowFollower } from "../services/actionServices";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

const FollowFollower = ({ navigation, route }) => {
    const { title, thisUser } = route.params;
    //thisUser is navigation user

    const { user, setUser } = useUser();//logined user

    const scrollViewRef = useRef();

    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [followings, setFollowings] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const pullThePage = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false)
        }, 800)
    }

    const followUnfollow = async (id) => {
        await setFollowFollower({ userId: id }).then(async (res) => {
            if (res?.success) {
                let temp = { ...user };
                if (res.data == "Unfollowed successfully")
                    temp?.followings?.splice(temp?.followings?.indexOf(id), 1);
                else
                    temp?.followings?.push(id);
                await AsyncStorage.setItem("user", JSON.stringify(temp));
                setUser(temp);
            }
            else {
                if (res?.data?.message == "Unauthorized") {
                    await AsyncStorage.clear();
                    navigation.navigate("Login");
                }
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        setLoading(true);
        if (title == "Followings") {
            getFollowings({ userId: thisUser?._id }).then((res) => {
                if (res?.data?.message == "Unauthorized") {
                    AsyncStorage.clear();
                    navigation.navigate("Login");
                }
                else {
                    setFollowings(res?.data);
                    setLoading(false);
                }
            }).catch((err) => {
                console.log(err);
                setLoading(false);

            })
        }
        else if (title == "Followers") {
            getFollowers({ userId: thisUser?._id }).then((res) => {
                if (res?.data?.message == "Unauthorized") {
                    AsyncStorage.clear();
                    navigation.navigate("Login");
                }
                else {
                    setFollowers(res?.data);
                    setLoading(false);
                }

            }).catch((err) => {
                console.log(err);
                setLoading(false);
            })
        }
        else {
            //empty
        }
    }, [thisUser])

    useEffect(() => {
        if (title == "Followings") {
            getFollowings({ userId: thisUser?._id }).then((res) => {
                if (res?.data?.message == "Unauthorized") {
                    AsyncStorage.clear();
                    navigation.navigate("Login");
                }
                else {
                    setFollowings(res?.data);
                }
            }).catch((err) => {
                console.log(err);

            })
        }
        else if (title == "Followers") {
            getFollowers({ userId: thisUser?._id }).then((res) => {
                if (res?.data?.message == "Unauthorized") {
                    AsyncStorage.clear();
                    navigation.navigate("Login");
                }
                else {
                    setFollowers(res?.data);
                }

            }).catch((err) => {
                console.log(err);
            })
        }
        else {
            //empty
        }
    }, [user])

    const filteredData = title === "Followers"
        ? followers.filter(item => item.username.toLowerCase().includes(searchQuery.toLowerCase()) || item.username.includes(searchQuery))
        : followings.filter(item => item.username.toLowerCase().includes(searchQuery.toLowerCase()) || item.username.includes(searchQuery));


    if (loading) return <Loading />

    return (
        <SafeAreaView style={followFollowerStyle.container}>
            <OtherHeader HeaderTitle={title} navigation={navigation} isTic={false} />
            <View style={{ marginTop: width * 0.07, backgroundColor: colors.white }}>
                <View style={[followFollowerStyle.searchBarHolder, { marginBottom: width * 0.07 }]}>
                    <TextInput
                        placeholder="Search"
                        style={[followFollowerStyle.searchBar, { marginBottom: width * 0.03 }]}
                        value={searchQuery}
                        onChangeText={searchQuery => setSearchQuery(searchQuery)}
                        autoCapitalize="none"
                        maxLength={18}
                    />
                </View>

                {((title == "Followers" && followers?.length == 0) || (title == "Followings" && followings?.length == 0)) ? (
                    <View style={{ marginTop: "5%" }}>
                        <Text style={
                            { textAlign: "center", marginBottom: 20, color: colors.green, fontWeight: "700", fontSize: 16 }
                        }>
                            {"You are not following anyone yet :("}
                        </Text>

                        <TouchableOpacity onPress={() => { navigation.navigate("SearchScreen", { getCategory: "all", type: "discovery" }) }}>
                            <Text style={
                                { width: "60%", marginLeft: "20%", textAlign: "center", marginBottom: 20, color: colors.white, fontWeight: "700", fontSize: 16, backgroundColor: colors.green, borderRadius: 15, paddingVertical: 10, }}>
                                Discover now!
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : null}

                <FlatList
                    data={filteredData}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={refreshing}
                    onRefresh={pullThePage}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={() => pullThePage()}
                            colors={[colors.green]}
                        />
                    }
                    renderItem={({ item, index }) => (
                        <View style={followFollowerStyle.item} key={index}>
                            <TouchableOpacity
                                style={followFollowerStyle.seeProfile}
                                onPress={() => {
                                    item?._id == user?._id
                                        ? navigation.navigate("ProfileScreen")
                                        : navigation.navigate("SeeProfile", { userId: item?._id });
                                }}
                            >
                                {item?.profilePhotoUrl ? (
                                    <Image
                                        source={{ uri: baseURL + item?.profilePhotoUrl || "" }}
                                        style={followFollowerStyle.profileImage}
                                    />
                                ) : (
                                    <Image
                                        source={require("../assets/avatar.png")}
                                        style={followFollowerStyle.profileImage}
                                    />
                                )}

                                <Text style={followFollowerStyle.username}>{item.username}</Text>
                                {item?.isTic == true ? (
                                    <Image
                                        source={ver}
                                        style={{ width: 14, height: 14, paddingLeft: 4, alignSelf: "center" }}
                                    />
                                ) : null}
                            </TouchableOpacity>

                            {user?._id != item?._id ? (
                                <TouchableOpacity
                                    style={[
                                        user?.followings?.includes(item?._id)
                                            ? {
                                                width: "30%",
                                                alignItems: "center",
                                                padding: "2%",
                                                backgroundColor: colors.white,
                                                borderRadius: 12.5,
                                                borderWidth: 2,
                                                borderColor: colors.green,
                                            }
                                            : {
                                                width: "30%",
                                                alignItems: "center",
                                                padding: "2%",
                                                backgroundColor: colors.green,
                                                borderRadius: 12.5,
                                                borderWidth: 2,
                                                borderColor: colors.green,
                                            },
                                    ]}
                                    onPress={() => followUnfollow(item?._id)}
                                >
                                    <Text
                                        style={[user?.followings?.includes(item?._id) ? { color: colors.green, fontSize: 16, fontWeight: "600" } : { color: colors.white, fontSize: 16, fontWeight: "600" },]}
                                    >
                                        {user?.followings?.includes(item?._id) ? "Following" : "Follow"}
                                    </Text>
                                </TouchableOpacity>
                            ) : null}
                        </View>
                    )}
                    ListEmptyComponent={
                        <View style={{ marginTop: "20%" }}>
                            <Text
                                style={{
                                    textAlign: "center",
                                    marginBottom: 20,
                                    color: colors.green,
                                    fontWeight: "700",
                                    fontSize: 16,
                                    textAlign: "center",
                                }}
                            >
                                {title == "Followers"
                                    ? "There are no followers"
                                    : "There are no followings"}
                            </Text>
                        </View>
                    }
                    contentContainerStyle={followFollowerStyle.scroll}
                />

            </View>
        </SafeAreaView>
    )
}

export default FollowFollower