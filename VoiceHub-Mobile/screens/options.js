import React, { useEffect, useState } from "react";
import { Modal, SafeAreaView, Switch, Text, TextInput, View } from "react-native";
import colors from "../assets/colors";
import OtherHeader from "./components/otherHeader";

import { TouchableOpacity } from "react-native";
import optionsStyle from "../assets/styles/options.style";
import { getUserById, updateUserInfo } from "../services/userServices";
import { useUser } from "../utils/userContext";
import Loading from "./components/loading";
import AreYouSure from "./components/areYouSure";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AwesomeAlert from "react-native-awesome-alerts";

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

        const response = await updateUserInfo(formData);

        if (response && response.success) {
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
        const response = await updateUserInfo(formData);

        if (response && response.success) {
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
                <AreYouSure process={"Freeze"} navigation={navigation} setOpenAreYouSure={setOpenAreYouSure} />
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

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                message={alertMessage}
                messageStyle={{
                    fontSize: 15,
                    fontWeight: "500"
                }}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Okay"
                confirmButtonTextStyle={{ textAlign: "center", fontWeight: "600", fontSize: 16 }}
                confirmButtonStyle={{
                    backgroundColor: colors.green,
                    borderRadius: 30,
                    width: "50%",
                    marginTop: "5%",
                }}
                contentContainerStyle={{ borderRadius: 20 }}
                onConfirmPressed={() => {
                    setShowAlert(false)
                }}
            />

        </SafeAreaView>
    )
}

export default Options