import React, { useEffect, useState } from "react";
import { Modal, SafeAreaView, Switch, Text, TextInput, View } from "react-native";
import colors from "../../assets/colors";
import OtherHeader from "../components/OtherHeader";

import { TouchableOpacity } from "react-native";

import optionsStyle from "../../assets/styles/options.style";

import { getUserById, updateUserInfo } from "../services/userServices";

import { checkInternetConnection } from "../utils/NetworkUtils";
import { useUser } from "../utils/userContext";

import AreYouSure from "../components/AreYouSure";
import Loading from "../components/Loading";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Alert from "../components/Alert";

const Options = ({ navigation }) => {

    const { user, setUser } = useUser();

    const [loading, setLoading] = useState(false);
    const [openAreYouSure, setOpenAreYouSure] = useState(false);
    const [username, setUserName] = useState(user?.username);
    const [isSecretAccount, setIsSecretAccount] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        setIsSecretAccount(newIsSecretAccount);
    }, [])

    const toggleSwitch = async () => {
        setIsSecretAccount(previousState => !previousState);

        const formData = new FormData();
        formData.append("isSecretAccount", isSecretAccount);
        checkInternetConnection(setShowAlert, setAlertMessage, setLoading);
        const response = await updateUserInfo(formData);

        if (response && response.success) {
            checkInternetConnection(setShowAlert, setAlertMessage, setLoading);
            getUserById({ id: user?._id }).then(async (res) => {
                setUser(res?.data);
                await AsyncStorage.setItem("user", JSON.stringify(res?.data));
            }).catch((err) => {
                console.log(err);
            })

        }
        else {
            if (response?.data?.message == "Unauthorized") {
                await AsyncStorage.clear();
                navigation.navigate("Login");
            }
        }
    }

    const changeUsername = async () => {
        setLoading(true);
        const formData = new FormData();

        formData.append("username", username);
        checkInternetConnection(setShowAlert, setAlertMessage, setLoading);
        const response = await updateUserInfo(formData);

        if (response && response.success) {
            checkInternetConnection(setShowAlert, setAlertMessage, setLoading);
            getUserById({ id: user?._id }).then(async (res) => {
                setUser(res?.data);
            }).catch((err) => {
                console.log(err);
            })

            setAlertMessage("Change your username succesfully")
            setShowAlert(true)
        }
        else if ((!response.succes) && response.message == "Username or email already exists") {

            setAlertMessage("Username already exists")
            setShowAlert(true)
        }
        else {
            if (response?.data?.message == "Unauthorized") {
                await AsyncStorage.clear();
                navigation.navigate("Login");
            }
        }
        setLoading(false);
    }

    if (loading) {
        return <Loading />
    }


    const newIsSecretAccount = user?.isSecretAccount;

    return (
        <SafeAreaView style={optionsStyle.container}>
            <OtherHeader navigation={navigation} HeaderTitle={"Options"} isTic={false} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={openAreYouSure}
                onRequestClose={() => {
                    setOpenAreYouSure(false);
                }}
            >
                <AreYouSure process={"Freeze"} navigation={navigation} setOpenAreYouSure={setOpenAreYouSure}
                    openAreYouSure={openAreYouSure} setLoading={setLoading} />
            </Modal>

            <View style={optionsStyle.isSecretAccount}>
                <Text style={optionsStyle.label}>Secret Account</Text>

                <Switch
                    trackColor={{ false: "#767577", true: colors.green }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isSecretAccount}
                />
            </View>

            <View style={optionsStyle.changeUsernameHolder}>
                <View style={{ flexDirection: "column", width: "70%" }}>
                    <Text style={{
                        marginBottom: "1%",
                        marginHorizontal: "10%",
                        fontWeight: "500",
                    }}>Change User Name</Text>
                    <TextInput
                        value={username}
                        onChangeText={(username) => setUserName(username)}
                        style={optionsStyle.changeUsernameInput}
                    />
                </View>

                {username == user?.username ?
                    <TouchableOpacity disabled
                        style={[optionsStyle.changeUsernameButton, { opacity: 0.5 }]}>
                        <Text style={optionsStyle.changeUsernameButtonText}>Change</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={changeUsername}
                        style={optionsStyle.changeUsernameButton}>
                        <Text style={optionsStyle.changeUsernameButtonText}>Change</Text>
                    </TouchableOpacity>}
            </View>

            <TouchableOpacity onPress={() => { navigation.navigate("ChangePassword") }}
                style={optionsStyle.Button}>
                <Text style={optionsStyle.buttonTexts}>Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Blockeds") }}
                style={optionsStyle.Button}>
                <Text style={optionsStyle.buttonTexts}>Blocked Accounts</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setOpenAreYouSure(true); }}
                style={optionsStyle.Button}>
                <Text style={optionsStyle.buttonTexts}>Freeze my account</Text>
            </TouchableOpacity>

            <Alert showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />

        </SafeAreaView>
    )
}

export default Options