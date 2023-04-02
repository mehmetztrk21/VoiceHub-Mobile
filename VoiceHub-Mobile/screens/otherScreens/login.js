import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import loginStyle from "../../assets/styles/login.style";

import { login } from "../../services/authServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../components/loading";

export default function Login({ navigation }) {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const isLogin = async () => {
        setLoading(true);
        if (username !== "" && password !== "") {
            const response = await login({ username: username, password: password });
            if (response && response.success) {
                await AsyncStorage.setItem("token", response.data.accessToken);
                await AsyncStorage.setItem("user", JSON.stringify(response.data.user));

                setusername("");
                setPassword("");
                navigation.navigate("HomeScreen", { username: username });
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
            else {
                setLoading(false);
                alert("username or password is worng");
            }
        }
        else {
            setLoading(false);
            alert("Dont empty inputs");
        }
    }

    useEffect(() => {
        setLoading(true);
        AsyncStorage.getItem("token").then(async (token) => {
            const user = await AsyncStorage.getItem("user");
            if (user) {
                navigation.navigate("HomeScreen", { username: JSON.parse(user).username })
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
            else setLoading(false)
        }).catch(err => setLoading(false))
    }, [])
    if (loading) return <Loading />
    return (
        <SafeAreaView style={loginStyle.container}>
            <View style={loginStyle.logoView}>
                <Image source={require("../../assets/images/VoiceHub-1.png")} style={loginStyle.logo} />
            </View>

            <Text style={loginStyle.label}>User Name</Text>
            <TextInput
                style={loginStyle.sbar}
                value={username}
                onChangeText={(username) => setusername(username)}
            />

            <Text style={loginStyle.label}>Password</Text>
            <TextInput
                style={loginStyle.sbar}
                value={password}
                onChangeText={(password) => setPassword(password)}
            />

            <TouchableOpacity style={loginStyle.touch} onPress={() => isLogin()}>
                <Text style={loginStyle.loginButton}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={loginStyle.touch} onPress={() => navigation.navigate("ForgotPassword")}>
                <Text style={loginStyle.textButton}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={loginStyle.touch} onPress={() => navigation.navigate("Register")}>
                <Text style={loginStyle.textButton}>Do you have not account?</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}