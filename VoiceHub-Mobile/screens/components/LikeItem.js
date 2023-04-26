import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import seeLikesStyle from '../../assets/styles/seeLikes.style'
import ver from "../../assets/ver.png"
import avatar from "../../assets/avatar.png"
import colors from '../../assets/colors'
import { baseURL } from '../../utils/constants'
const LikeItem = ({ navigation, userId, profilePhotoUrl, username, isTic }) => {
    return (
        <View style={seeLikesStyle.item} >
            <TouchableOpacity style={seeLikesStyle.seeProfile}
                onPress={() => navigation.navigate("SeeProfile", { userId: userId })} >
                {!profilePhotoUrl ?
                    <Image source={avatar} style={seeLikesStyle.profileImage} /> :
                    <Image source={{ uri: baseURL + profilePhotoUrl }} style={seeLikesStyle.profileImage} />
                }
                <Text style={seeLikesStyle.username}>{username}</Text>
                {isTic == true ? (
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
                    Follow
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LikeItem