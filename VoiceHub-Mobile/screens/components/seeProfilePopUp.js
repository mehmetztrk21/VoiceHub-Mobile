import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import React from "react"
import colors from "../../assets/colors";
import seeProfilePopUpStyles from "../../assets/styles/seeProfilePopUp.styles";
import { blockAccount } from "../../services/actionServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "../../utils/userContext";

const seeProfilePopUp = ({ navigation, userId, openSeeProfileOptions, setOpenSeeProfileOptions }) => {

    const { user, setUser } = useUser();

    const block = async () => {
        blockAccount({ userId: userId })
        setOpenSeeProfileOptions(false);
        getUserById({ id: userId }).then(async (res) => {
            await AsyncStorage.setItem("user", res.data);

            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        })

    }

    return (
        <View style={seeProfilePopUpStyles.container}>
            <View style={seeProfilePopUpStyles.container2}>

                <TouchableOpacity onPress={block}
                    style={{ flexDirection: "row", alignItems: "center", marginBottom: 12.5, }}>
                    <Icon size={22} type={"font-awesome"} name={"ban"} color={colors.white} />
                    <Text style={seeProfilePopUpStyles.button}>{user?.blockedUsers.includes(userId) ? "Unblock" : "Block"} Account</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}
                    style={{ flexDirection: "row", alignItems: "center", }}>
                    <Icon size={22} type={"font-awesome"} name={"share"} color={colors.white} />
                    <Text style={seeProfilePopUpStyles.button}>Share Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setOpenSeeProfileOptions(false) }}>
                    <Text style={seeProfilePopUpStyles.closeButton}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default seeProfilePopUp;