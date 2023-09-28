import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import avatar from "../../assets/avatar.png";
import blockedItemStyle from "../../assets/styles/blockedItem.style";
import ver from "../../assets/ver.png";

import { baseURL } from "../utils/constants";
import { useUser } from "../utils/userContext";
import { blockAccount } from "../services/actionServices";

import AsyncStorage from "@react-native-async-storage/async-storage";

const BlockedItem = ({ navigation, blockedUser }) => {

    const { user, setUser } = useUser();

    const block = async () => {
        await blockAccount({ userId: blockedUser?._id })
        let temp = { ...user };
        temp?.blockedUsers?.splice(temp?.blockedUsers?.indexOf(blockedUser?._id), 1);
        setUser(temp);
        await AsyncStorage.setItem("user", JSON.stringify(temp));
    }

    return (
        <View style={blockedItemStyle.container}>

            <TouchableOpacity onPress={() => {
                if (blockedUser?._id == user?._id) {
                    navigation.navigate("ProfileScreen");
                }
                else {
                    navigation.navigate("SeeProfile", { userId: blockedUser?._id });
                }
            }} style={{ flexDirection: "row", alignItems: "center", }}>

                {blockedUser?.profilePhotoUrl ?
                    <Image source={{ uri: baseURL + blockedUser?.profilePhotoUrl }} style={blockedItemStyle.profilePhoto} /> :
                    <Image source={avatar} style={blockedItemStyle.profilePhoto} />
                }

                <Text style={blockedItemStyle.username}>{blockedUser?.username}</Text>

                {blockedUser?.isTic == true ? (
                    <Image source={ver} style={blockedItemStyle.verify} />
                ) : null}

            </TouchableOpacity >


            <TouchableOpacity style={blockedItemStyle.removeButtonHolder} onPress={block}>
                <Text style={blockedItemStyle.removeButtonText}>UnBlock</Text>
            </TouchableOpacity>
        </View >
    )
}

export default BlockedItem