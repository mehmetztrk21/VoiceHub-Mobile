import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import colors from "../../assets/colors"

import ver from "../../assets/ver.png"
import avatar from "../../assets/avatar.png"
import { useUser } from "../../utils/userContext"
import { baseURL } from "../../utils/constants"

const BlockedItem = ({ navigation, blockedUser }) => {

    const { user } = useUser();

    return (
        <View style={{ backgroundColor: colors.white, width: "100%", paddingHorizontal: "7.5%", justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>

            <TouchableOpacity onPress={() => {
                if (blockedUser?.id == user?._id) {
                    navigation.navigate("ProfileScreen", { username: user?.username });
                }
                else {
                    navigation.navigate("SeeProfile", { userId: blockedUser?.id });
                }
            }}>

                {blockedUser?.profilePhotoUrl ?
                    <Image source={{ uri: baseURL + blockedUser?.profilePhotoUrl }} style={{
                        width: 40, height: 40, borderRadius: 20, marginRight: "2%",
                    }} /> :
                    <Image source={avatar} style={{ width: 40, height: 40, borderRadius: 25, marginRight: "2%", }} />
                }

                <Text style={{ marginLeft: "4%", marginRight: "3%", fontWeight: "700", fontSize: 16, }}>{blockedUser?.username}</Text>

                {blockedUser?.isTic == true ? (
                    <Image source={ver} style={{ width: 14, height: 14, paddingLeft: 4, alignSelf: "center" }} />
                ) : null}

            </TouchableOpacity >


            <TouchableOpacity style={{
                width: "30%",
                alignItems: "center",
                padding: "2%",
                backgroundColor: colors.green,
                borderRadius: 12.5,
            }}>
                <Text style={{ color: colors.white, fontSize: 16, fontWeight: "600", }}>Kaldır</Text>
            </TouchableOpacity>
        </View >
    )
}

export default BlockedItem