import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import colors from "../assets/colors";
import OtherHeader from "../screens/components/otherHeader";
import { changePassword } from "../services/userServices";
import changePasswordStyle from "../assets/styles/changePassword.style";

import { checkInternetConnection } from "../utils/NetworkUtils"

import AsyncStorage from "@react-native-async-storage/async-storage";
import Alert from "./components/alert";

const ChangePassword = ({ navigation }) => {

    const [old, setOld] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");


    const confirm = async () => {

        if (password1 == password2) {
            checkInternetConnection(setShowAlert, setAlertMessage, setRefreshing, setLoading);
            await changePassword({ password: old, newPassword: password2 }).then(async (res) => {
                if (res?.data?.message == "Unauthorized") {
                    await AsyncStorage.clear();
                    navigation.navigate("Login");
                }
                else {
                    if (res?.success) {
                        setAlertMessage("Your password has been successfully changed!");
                        setShowAlert(true);
                    }
                    else {
                        setAlertMessage("You did not enter your old password correctly");
                        setShowAlert(true);
                    }
                }
            }).catch((err) => {
                console.log(err);
            })


        }
        else {
            setAlertMessage("The passwords you will create do not match.")
            setShowAlert(true);
        }
    };

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <SafeAreaView style={changePasswordStyle.container}>
            <OtherHeader navigation={navigation} HeaderTitle={"Change Password"} isTic={false} />
            <View style={{ marginTop: "25%" }}>
                <Text style={changePasswordStyle.oldPasswordHeader}>Old Password</Text>
                <View style={changePasswordStyle.oldPasswordInput}>
                    <TextInput
                        style={{ width: "80%" }}
                        maxLength={18}
                        value={old}
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={old => setOld(old)}
                    />
                    <TouchableOpacity onPress={handlePasswordVisibility}>
                        <Ionicons size={20} name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} color={colors.green} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: "5%" }}>
                <Text style={changePasswordStyle.newPasswordHeader}>New Password</Text>
                <TextInput
                    style={changePasswordStyle.newPasswordInput}
                    maxLength={18}
                    value={password1}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={password1 => setPassword1(password1)}
                />
            </View>

            <View style={{ marginTop: "5%" }}>
                <Text style={changePasswordStyle.repeatHeader}> New Password Repeat</Text>
                <TextInput
                    style={changePasswordStyle.newPasswordInput}
                    maxLength={18}
                    value={password2}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={password2 => setPassword2(password2)}
                />
            </View>

            <TouchableOpacity onPress={confirm}
                style={changePasswordStyle.confirmButton}>
                <Text style={changePasswordStyle.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>

            <Alert showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />
        </SafeAreaView>
    )
}

export default ChangePassword