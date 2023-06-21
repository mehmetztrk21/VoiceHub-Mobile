import React, { useEffect, useRef, useState } from "react";
import {
    Dimensions, FlatList, Image, Modal, RefreshControl, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View
} from "react-native";

import colors from "../assets/colors";
import seeProfileStyles from '../assets/styles/seeProfile.style';
import verfy from "../assets/ver.png";

import { Ionicons } from '@expo/vector-icons';


import RenderPost from "./components/RenderPost";
import AreYouSure from "./components/areYouSure";
import Post from "./components/post";
import Alert from "./components/alert";

import { setFollowFollower } from "../services/actionServices";
import { getMyPosts } from "../services/postServices";
import { getUserById } from "../services/userServices";

import { baseURL } from "../utils/constants";
import { checkInternetConnection } from "../utils/NetworkUtils";
import { followerCountFormatText } from "../utils/followerCountFormatText";
import { useUser } from "../utils/userContext";

import Loading from "./components/loading";
import SeeProfilePopUp from "./components/seeProfilePopUp";

import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get("window");
export default function SeeProfile({ navigation, route }) {
    const { userId } = route.params;
    const { user, setUser } = useUser();
    const scrollViewRef = useRef(null);

    const handleLayout = () => {
        scrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
    };

    const [alertMessage, setAlertMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false)

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
        checkInternetConnection(setShowAlert, setAlertMessage, setRefreshing, setLoading);
        const response = await getMyPosts({ isArchived: false, userId: userId });
        if (response && response.success) {
            setPosts(response?.data);
            console.log(response?.data)
        }
        else {
            if (response?.message == "Unauthorized") {
                await AsyncStorage.clear();
                navigation.navigate("Login");
            }
        }
        setLoading(false)
    }
    const followUnfollow = async () => {
        checkInternetConnection(setShowAlert, setAlertMessage, setRefreshing, setLoading);
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
            else {
                if (res?.message == "Unauthorized") {
                    await AsyncStorage.clear();
                    navigation.navigate("Login");
                }
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    const getUser = async () => {
        checkInternetConnection(setShowAlert, setAlertMessage, setRefreshing, setLoading);
        getUserById({ id: userId }).then(async (res) => {
            if (res?.message == "Unauthorized") {
                await AsyncStorage.clear();
                navigation.navigate("Login");
            }
            else {
                setSeeUser(res?.data);
            }
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
                        <Ionicons style={seeProfileStyles.BackButton} size={28} name={"arrow-back-outline"} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLayout} style={{ flexDirection: "row" }}>
                        <Text style={seeProfileStyles.head}>{seeUser?.username}</Text>

                        {seeUser?.isTic == true ? (
                            <Image source={verfy} style={seeProfileStyles.ver} />
                        ) : null}
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => { setOpenSeeProfileOptions(true) }} style={{ paddingHorizontal: "5%" }}>
                    <Ionicons size={24} name={"ellipsis-vertical"} />
                </TouchableOpacity>
            </View>

            <Modal
                visible={openSeeProfileOptions}
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                    setOpenSeeProfileOptions(false)
                }}>
                <TouchableWithoutFeedback onPress={() => setOpenSeeProfileOptions(false)}>
                    <View style={{ flex: 1, position: "absolute", width: width, height: height }} />
                </TouchableWithoutFeedback>
                <SeeProfilePopUp navigation={navigation} userId={userId} setOpenSeeProfileOptions={setOpenSeeProfileOptions} />
            </Modal>

            <View style={{ width: "100%", borderBottomStartRadius: 26, borderBottomEndRadius: 26, backgroundColor: colors.white }}>

                {/* PP, Follow Count,  */}
                <View style={seeProfileStyles.actView}>

                    {seeUser?.profilePhotoUrl ?
                        <Image source={{ uri: baseURL + seeUser?.profilePhotoUrl }} style={seeProfileStyles.userPic} /> :
                        <Image source={require("../assets/avatar.png")} style={seeProfileStyles.userPic} />
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


            <FlatList
                data={posts}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={seeProfileStyles.scroll}
                refreshing={refreshing}
                onRefresh={pullThePage}
                keyExtractor={(index) => index.toString()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
                }
                ListEmptyComponent={() => (
                    <Text style={seeProfileStyles.notPost}>Have not post anyone yet</Text>
                )}
                renderItem={({ item, index }) => (
                    <RenderPost
                        navigation={navigation}
                        HeaderTitle={"OtherProfiles"}
                        post={item}
                        thisUser={seeUser}
                        key={index}
                    />
                )}
            />

            <Alert showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />
        </SafeAreaView >
    );
}
