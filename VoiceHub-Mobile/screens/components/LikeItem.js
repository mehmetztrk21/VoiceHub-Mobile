import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import likeItemStyle from '../../assets/styles/likeItem.style'
import ver from "../../assets/ver.png"
import avatar from "../../assets/avatar.png"
import colors from '../../assets/colors'
import { baseURL } from '../../utils/constants'
import { useUser } from "../../utils/userContext"

const LikeItem = ({ navigation, userId, profilePhotoUrl, username, isTic }) => {

    const { user } = useUser();

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
                <TouchableOpacity style={[
                    user?.followings?.includes(userId) ?
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