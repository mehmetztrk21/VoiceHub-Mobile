import React, { useEffect, useState } from "react";
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";

import loginStyle from "../assets/styles/login.style";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from "react-native-elements";
import colors from "../assets/colors";
import { login } from "../services/authServices";
import { useUser } from "../utils/userContext";
import Loading from "./components/loading";
import AwesomeAlert from "react-native-awesome-alerts";

export default function Login({ navigation }) {

    const { user, setUser } = useUser();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };


    const isLogin = async () => {
        setLoading(true);
        if (username !== "" && password !== "") {
            const response = await login({ username: username, password: password });
            if (response && response.success) {
                await AsyncStorage.setItem("token", response.data.accessToken);
                await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
                setUser(response.data.user);
                setUsername("");
                setPassword("");
                navigation.navigate("HomeScreen");
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
            else {
                setLoading(false);
                setAlertMessage("Username or password is worng")
                setShowAlert(true)
            }
        }
        else {
            setLoading(false);
            setAlertMessage("Don't empty inputs")
            setShowAlert(true)
        }
    }

    useEffect(() => {
        setLoading(true);
        AsyncStorage.getItem("token").then(async (token) => {
            const user = await AsyncStorage.getItem("user");
            if (user) {
                navigation.navigate("HomeScreen");
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
            else setLoading(false)
        }).catch(err => setLoading(false))
    }, [])

    if (loading) return <Loading />

    return (
        <KeyboardAvoidingView style={loginStyle.container}>
            <View style={loginStyle.logoView}>
                <Image source={require("../assets/images/VoiceHub-1.png")} style={loginStyle.logo} />
            </View>

            <Text style={loginStyle.label}>User Name</Text>
            <TextInput
                style={loginStyle.sbar}
                value={username}
                onChangeText={(username) => setUsername(username)}
            />

            <Text style={loginStyle.label}>Password</Text>
            <View style={loginStyle.passwordbar}>
                <TextInput
                    style={{ width: "80%" }}
                    maxLength={18}
                    value={password}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={password => setPassword(password)}
                    autoCapitalize="none"
                />
                <TouchableOpacity onPress={handlePasswordVisibility}>
                    <Icon type="font-awesome" size={20} name={isPasswordVisible ? "eye" : "eye-slash"} color={colors.green} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={loginStyle.touch} onPress={() => isLogin()}>
                <Text style={loginStyle.loginButton}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={loginStyle.touch} onPress={() => navigation.navigate("ForgotPassword")}>
                <Text style={loginStyle.textButton}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={loginStyle.touch} onPress={() => navigation.navigate("Register")}>
                <Text style={loginStyle.textButton}>Do you have not account?</Text>
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

        </KeyboardAvoidingView>
    );
}