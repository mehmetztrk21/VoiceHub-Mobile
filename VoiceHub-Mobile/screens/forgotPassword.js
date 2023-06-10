import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import forgotPasswordStyle from "../assets/styles/forgotPassword.style";

import { Dimensions } from "react-native";
import Alert from "./components/alert";
const { width, height } = Dimensions.get("window");

export default function ForgotPassword({ navigation }) {

    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const Reset = () => {
        if (password1 === password2) {
            if (password1.length, password2.length != 0) {
                if (password1.length, password2.length >= 8) {
                    if (username.length >= 3) {
                        navigation.navigate("HomeScreen")
                    }
                    else {
                        setAlertMessage("Username must be at least 3 characters.");
                        setShowAlert(true);
                    }
                }
                else {
                    setAlertMessage("Your password must be at least 8 characters");
                    setShowAlert(true);
                }
            }
            else {
                setAlertMessage("Password cannot be left blank.");
                setShowAlert(true);
            }
        }
        else {
            setAlertMessage("Passwords are not equal.");
            setShowAlert(true);
        }
    }

    return (
        <SafeAreaView style={[forgotPasswordStyle.container, { paddingTop: width * 0.08 }]}>

            <View style={{ marginBottom: "2.5%", marginLeft: "2.5%", flexDirection: "row", height: height * 0.07 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons type="ionicon" size={30} name={"arrow-back-outline"} style={{ marginRight: "1%", paddingTop: 7.5, }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: "500" }}>Forgot Password</Text>
            </View>

            <View style={{ height: height * 0.85, width: width * 0.7, marginLeft: width * 0.15, justifyContent: "center" }}>
                <Text style={forgotPasswordStyle.label}>User Name</Text>
                <TextInput
                    placeholder="User Name"
                    style={forgotPasswordStyle.input}
                    maxLength={18}
                    value={username}
                    onChangeText={username => setUsername(username)}
                />

                <Text style={forgotPasswordStyle.label}>New Password</Text>
                <TextInput
                    placeholder="Min 8 Characters"
                    style={forgotPasswordStyle.input}
                    value={password1}
                    maxLength={18}
                    onChangeText={password1 => setPassword1(password1)}
                />

                <Text style={forgotPasswordStyle.label}>Confirm New Password</Text>
                <TextInput
                    placeholder="Min 8 Characters"
                    style={forgotPasswordStyle.input}
                    value={password2}
                    maxLength={18}
                    onChangeText={password2 => setPassword2(password2)}
                />


                <TouchableOpacity style={{ width: width * 0.5, marginLeft: width * 0.1 }}
                    onPress={Reset}>
                    <Text style={forgotPasswordStyle.ButtonText}>Reset Password</Text>
                </TouchableOpacity>
            </View>

            <Alert showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />
        </SafeAreaView>
    );
}