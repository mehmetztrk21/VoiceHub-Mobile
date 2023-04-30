import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"

import ver from "../../assets/ver.png"
import avatar from "../../assets/avatar.png"
import { useUser } from "../../utils/userContext"
import { baseURL } from "../../utils/constants"
import blockedItemStyle from "../../assets/styles/blockedItem.style"

const BlockedItem = ({ navigation, blockedUser }) => {

    const { user } = useUser();

    return (
        <View style={blockedItemStyle.container}>

            <TouchableOpacity onPress={() => {
                if (blockedUser?.id == user?._id) {
                    navigation.navigate("ProfileScreen", { username: user?.username });
                }
                else {
                    navigation.navigate("SeeProfile", { userId: blockedUser?.id });
                }
            }}>

                {blockedUser?.profilePhotoUrl ?
                    <Image source={{ uri: baseURL + blockedUser?.profilePhotoUrl }} style={blockedItemStyle.profilePhoto} /> :
                    <Image source={avatar} style={blockedItemStyle.profilePhoto} />
                }

                <Text style={blockedItemStyle.username}>{blockedUser?.username}</Text>

                {blockedUser?.isTic == true ? (
                    <Image source={ver} style={blockedItemStyle.verify} />
                ) : null}

            </TouchableOpacity >


            <TouchableOpacity style={blockedItemStyle.removeButtonHolder}>
                <Text style={blockedItemStyle.removeButtonText}>Remove</Text>
            </TouchableOpacity>
        </View >
    )
}

export default BlockedItem