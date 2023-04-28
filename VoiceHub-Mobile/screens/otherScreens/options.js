import React, { useState } from "react";
import { SafeAreaView, Switch, Text, View } from "react-native";
import colors from "../../assets/colors";
import OtherHeader from "../components/otherHeader";

import { Dimensions, TouchableOpacity } from "react-native";
import optionsStyle from "../../assets/styles/options.style";
import { updateUserInfo } from "../../services/userServices";
import { useUser } from "../../utils/userContext";

const Options = ({ navigation }) => {

    const { user } = useUser();
    const [isSecretAccount, setIsSecretAccount] = useState(user?.isSecretAccount);

    const toggleSwitch = async () => {
        setIsSecretAccount(previousState => !previousState);
        const formData = new FormData();
        formData.append("isSecretAccount", isSecretAccount);
        await updateUserInfo(formData)

    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.white, flex: 1, width: "100%" }}>
            <OtherHeader navigation={navigation} HeaderTitle={"Options"} isTic={false} />

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "25%", marginRight: "10%" }}>
                <Text style={optionsStyle.label}>Secret Account</Text>

                <Switch
                    trackColor={{ false: "#767577", true: colors.green }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isSecretAccount}
                />
            </View>

            <TouchableOpacity onPress={() => { navigation.navigate("ChangePassword") }}
                style={{ backgroundColor: colors.green, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 40, width: "50%", marginLeft: "25%", marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: colors.white, fontWeight: "600" }}> Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Blockeds") }}
                style={{ backgroundColor: colors.green, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 40, width: "50%", marginLeft: "25%", marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: colors.white, fontWeight: "600" }}> Blocked Accounts</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Options