import { View, Text, TouchableOpacity } from "react-native";
import { Share } from 'react-native';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import React from "react"
import colors from "../../assets/colors";
import seeProfilePopUpStyles from "../../assets/styles/seeProfilePopUp.styles";
import { blockAccount } from "../services/actionServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "../utils/userContext";

const SeeProfilePopUp = ({ userId, setOpenSeeProfileOptions }) => {

    const { user, setUser } = useUser();

    const block = async () => {
        await blockAccount({ userId: userId })
        setOpenSeeProfileOptions(false);

        let temp = { ...user };

        if (user?.blockedUsers?.includes(userId)) {
            temp?.blockedUsers?.splice(temp?.blockedUsers?.indexOf(userId), 1);
        }
        else {
            temp?.blockedUsers?.push(userId);
        }

        await AsyncStorage.setItem("user", JSON.stringify(temp));
        setUser(temp);
    }

    const shareThisProfile = async () => {
        try {
            Share.share({
                message: "https://github.com/mehmetztrk21/VoiceHub-Mobile/",
            });
        } catch (error) {
            console.error('Share error:', error);
        }
    }

    return (
        <View style={seeProfilePopUpStyles.container}>
            <View style={seeProfilePopUpStyles.container2}>

                <TouchableOpacity onPress={block}
                    style={{ flexDirection: "row", alignItems: "center", marginBottom: 12.5, }}>
                    <FontAwesome5 size={22} name={"ban"} color={colors.white} />
                    <Text style={seeProfilePopUpStyles.button}>{user?.blockedUsers?.includes(userId) ? "Unblock" : "Block"} Account</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={shareThisProfile} style={{ flexDirection: "row", alignItems: "center", }}>
                    <Ionicons size={22} name={"share-outline"} color={colors.white} />
                    <Text style={seeProfilePopUpStyles.button}>Share Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setOpenSeeProfileOptions(false) }}>
                    <Text style={seeProfilePopUpStyles.closeButton}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SeeProfilePopUp;