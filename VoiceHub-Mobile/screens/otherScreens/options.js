import React, { useState } from "react";
import { Modal, SafeAreaView, Switch, Text, TextInput, View } from "react-native";
import colors from "../../assets/colors";
import OtherHeader from "../components/otherHeader";

import { TouchableOpacity } from "react-native";
import optionsStyle from "../../assets/styles/options.style";
import { getUserById, updateUserInfo } from "../../services/userServices";
import { useUser } from "../../utils/userContext";
import Loading from "../components/loading";
import AreYouSure from "../components/areYouSure";

const Options = ({ navigation }) => {

    const { user, setUser } = useUser();

    const [loading, setLoading] = useState(false);
    const [openAreYouSure, setOpenAreYouSure] = useState(false);
    const [username, setUserName] = useState(user?.username);
    const [isSecretAccount, setIsSecretAccount] = useState(user?.isSecretAccount);

    const toggleSwitch = async () => {
        setIsSecretAccount(previousState => !previousState);
        const formData = new FormData();
        formData.append("isSecretAccount", isSecretAccount);
        await updateUserInfo(formData)
    }

    const changeUsername = async () => {
        setLoading(true);
        const formData = new FormData();

        formData.append("username", username);
        const response = await updateUserInfo(formData);

        if (response && response.success) {
            getUserById({ id: user?._id }).then(async (res) => {
                setUser(res?.data);
            }).catch((err) => {
                console.log(err);
            })
            alert("change your username succesfully")
        }
        else if ((!response.succes) && response.message == "Username or email already exists") {
            alert("Username already exists");
        }
        else {
            alert("error");
        }
        setLoading(false);
    }

    if (loading) {
        return <Loading />
    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.white, flex: 1, width: "100%" }}>
            <OtherHeader navigation={navigation} HeaderTitle={"Options"} isTic={false} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={openAreYouSure}
                onRequestClose={() => {
                    setOpenAreYouSure(false);
                }}
            >
                <AreYouSure process={"Freeze"} navigation={navigation} setOpenAreYouSure={setOpenAreYouSure} />
            </Modal>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "25%", marginBottom: "5%", marginRight: "10%" }}>
                <Text style={optionsStyle.label}>Secret Account</Text>

                <Switch
                    trackColor={{ false: "#767577", true: colors.green }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isSecretAccount}
                />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: "7.5%", }}>
                <View style={{ flexDirection: "column", width: "70%" }}>
                    <Text style={{
                        marginBottom: "1%",
                        marginHorizontal: "10%",
                        fontWeight: "500",
                    }}>Change User Name</Text>
                    <TextInput
                        value={username}
                        onChangeText={(username) => setUserName(username)}
                        style={{
                            backgroundColor: colors.lightgray,
                            borderRadius: 15,
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            marginHorizontal: "10%",
                        }}
                    />
                </View>

                {username == user?.username ?
                    <TouchableOpacity disabled
                        style={{ backgroundColor: colors.green, borderRadius: 40, padding: 10, alignSelf: "flex-end", marginBottom: "1%", opacity: 0.5 }}>
                        <Text style={{ fontSize: 16, color: colors.white, fontWeight: "600", textAlign: "center", }}>Change</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={changeUsername}
                        style={{ backgroundColor: colors.green, borderRadius: 40, padding: 10, alignSelf: "flex-end", marginBottom: "1%", }}>
                        <Text style={{ fontSize: 16, color: colors.white, fontWeight: "600", textAlign: "center", }}>Change</Text>
                    </TouchableOpacity>}
            </View>

            <TouchableOpacity onPress={() => { navigation.navigate("ChangePassword") }}
                style={{ backgroundColor: colors.green, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 40, width: "50%", marginLeft: "25%", marginBottom: "5%", }}>
                <Text style={{ fontSize: 16, color: colors.white, fontWeight: "600", textAlign: "center", }}>Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Blockeds") }}
                style={{ backgroundColor: colors.green, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 40, width: "50%", marginLeft: "25%", marginBottom: "5%", }}>
                <Text style={{ fontSize: 16, color: colors.white, fontWeight: "600", textAlign: "center", }}>Blocked Accounts</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setOpenAreYouSure(true); }}
                style={{ backgroundColor: colors.green, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 40, width: "50%", marginLeft: "25%", }}>
                <Text style={{ fontSize: 16, color: colors.white, fontWeight: "600", textAlign: "center", }}>Freeze my account</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Options