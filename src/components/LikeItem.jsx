import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import likeItemStyle from '../../assets/styles/likeItem.style'
import ver from "../../assets/ver.png"
import avatar from "../../assets/avatar.png"
import colors from '../../assets/colors'

import Alert from './Alert'

import { checkInternetConnection } from "../utils/NetworkUtils";
import { baseURL } from '../utils/constants'
import { useUser } from "../utils/userContext"

import { setFollowFollower } from "../services/actionServices";

import AsyncStorage from "@react-native-async-storage/async-storage";

const LikeItem = ({ navigation, userId, profilePhotoUrl, username, isTic, setShowAlert, setAlertMessage }) => {

    const { user, setUser } = useUser();

    const followUnfollow = async () => {
        checkInternetConnection(setShowAlert, setAlertMessage);
        await setFollowFollower({ userId: userId }).then(async (res) => {
            if (res?.success) {
                let temp = { ...user };
                if (res.data == "Unfollowed successfully")
                    temp?.followings?.splice(temp?.followings?.indexOf(userId), 1);
                else
                    temp?.followings?.push(userId);
                await AsyncStorage.setItem("user", JSON.stringify(temp));
                setUser(temp);
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

    return (
        <View style={likeItemStyle.item} >
            <TouchableOpacity style={likeItemStyle.seeProfile}
                onPress={() => {
                    user?._id == userId ?
                        navigation.navigate("ProfileScreen") :
                        navigation.navigate("SeeProfile", { userId: userId })
                }} >
                {!profilePhotoUrl ?
                    <Image source={avatar} style={likeItemStyle.profileImage} /> :
                    <Image source={{ uri: baseURL + profilePhotoUrl }} style={likeItemStyle.profileImage} />
                }
                <Text style={likeItemStyle.username}>{username}</Text>
                {isTic == true ? (
                    <Image source={ver} style={{ width: 14, height: 14, paddingLeft: 4, alignSelf: "center" }} />
                ) : null}
            </TouchableOpacity>

            {user?._id != userId ?
                <TouchableOpacity onPress={followUnfollow}
                    style={[user?.followings?.includes(userId) ?
                        {
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
                    ]}>
                    <Text
                        style={[user?.followings?.includes(userId) ? { color: colors.green, fontSize: 16, fontWeight: "600" } : { color: colors.white, fontSize: 16, fontWeight: "600" },]}
                    >
                        {user?.followings?.includes(userId) ? "Following" : "Follow"}
                    </Text>
                </TouchableOpacity> : null}
        </View>
    )
}

export default LikeItem