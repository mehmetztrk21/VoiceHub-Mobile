import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import { Share, Text, TouchableOpacity, View } from "react-native";


import colors from "../../assets/colors";
import PopUpPostStyles from "../../assets/styles/PopUpPost.style";


import { checkInternetConnection } from "../../utils/NetworkUtils";
import { useUser } from "../../utils/userContext";

import { setFollowFollower, setSeeLikes } from "../../services/actionServices";
import { getPostById } from "../../services/postServices";
import { getUserById } from "../../services/userServices";

import AsyncStorage from "@react-native-async-storage/async-storage";

const PopUpPost = ({ navigation, id, setId, uri, setShowAlert, setAlertMessage }) => {
    const { user, setUser } = useUser();
    const [post, setPost] = useState({});
    const [seeUser, setSeeUser] = useState({});

    useEffect(() => {
        checkInternetConnection(setShowAlert, setAlertMessage);
        getPostById({ postId: id }).then(async (res) => {
            if (res?.message == "Unauthorized") {
                await AsyncStorage.clear();
                navigation.navigate("Login");
            }
            else {
                setPost(res?.data);
                checkInternetConnection(setShowAlert, setAlertMessage);
                getUserById({ id: res?.data?.createdBy }).then(async (response) => {
                    if (response?.message == "Unauthorized") {
                        await AsyncStorage.clear();
                        navigation.navigate("Login");
                    }
                    else {
                        setSeeUser(response?.data);
                    }
                }).catch((err) => {
                    console.log(err)
                });
            }
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    const setSeeLike = async () => {
        checkInternetConnection(setShowAlert, setAlertMessage);
        const res = await setSeeLikes({ postId: id });
        setId(false);

        if (res?.message == "Unauthorized") {
            await AsyncStorage.clear();
            navigation.navigate("Login");
        }
    }

    const shareThisPost = async () => {
        try {
            Share.share({
                message: uri,
            });
        } catch (error) {
            console.error("Share error:", error);
        }
    }

    const followUnfollow = async () => {
        checkInternetConnection(setShowAlert, setAlertMessage);
        await setFollowFollower({ userId: seeUser._id }).then(async (res) => {
            if (res?.success) {
                let temp = { ...user };
                if (res.data == "Unfollowed successfully")
                    temp?.followings?.splice(temp?.followings?.indexOf(seeUser._id), 1);
                else
                    temp?.followings?.push(seeUser._id);
                setUser(temp);
                await AsyncStorage.setItem("user", JSON.stringify(temp));
                await getUser();
                setId(false);
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
        checkInternetConnection(setShowAlert, setAlertMessage);
        getUserById({ id: seeUser._id }).then(async (res) => {
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

    return (
        <View style={PopUpPostStyles.wrapper}>
            <View style={PopUpPostStyles.container}>

                {user?.posts?.includes(post?._id) ?
                    <TouchableOpacity style={PopUpPostStyles.buttonHolder} onPress={setSeeLike}>
                        <Ionicons name={post?.isLikesVisible == true ? "heart-outline" : "heart-sharp"} size={28} color={colors.white} />
                        <Text style={PopUpPostStyles.text}>{post?.isLikesVisible == true ? "Unshow Likes" : "Show Likes"}</Text>
                    </TouchableOpacity>
                    : null}

                <TouchableOpacity style={PopUpPostStyles.buttonHolder} onPress={shareThisPost}>
                    <Ionicons name={"share-outline"} size={28} color={colors.white} />
                    <Text style={PopUpPostStyles.text}>Share This Post</Text>
                </TouchableOpacity>

                {user?._id != seeUser._id ?
                    <TouchableOpacity style={PopUpPostStyles.buttonHolder} onPress={followUnfollow}>
                        <Feather name={user?.followings?.includes(seeUser?._id) ? "user-minus" : "user"} size={28} color={colors.white} />
                        <Text style={PopUpPostStyles.text}>
                            {user?.followings?.includes(seeUser?._id) ? "Unfollow" : "Follow"}
                        </Text>
                    </TouchableOpacity> : null}

                <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setId(false) }}>
                    <Text style={PopUpPostStyles.cancelText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default PopUpPost;