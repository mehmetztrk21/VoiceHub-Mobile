import React, { useState } from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import loginStyle from "../../assets/styles/login.style";
import { login } from "../../services/authServices";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login({ navigation }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const isLogin = async () => {

        if (userName !== "" && password !== "") {
            const response = await login({ username: userName, password: password })
            console.log(response)
            if (response && response.success) {
                await AsyncStorage.setItem('token', response.data.accessToken)
                await AsyncStorage.setItem('user', JSON.stringify(response.data.user))
                navigation.navigate('HomeScreen', { uName: userName, isYourProfile: true })
            }
            else
                alert("Kullanıcı adı veya şifre hatalı")
        }
        else {
            alert("don't empty inputs")
        }
    }

    return (
        <SafeAreaView style={loginStyle.container}>
            <View style={loginStyle.logoView}>
                <Image source={require("../../assets/images/VoiceHub-1.png")} style={loginStyle.logo} />
            </View>

            <Text style={loginStyle.label}>User Name</Text>
            <TextInput
                style={loginStyle.sbar}
                value={userName}
                onChangeText={(userName) => setUserName(userName)}
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

            <TouchableOpacity style={loginStyle.touch} onPress={() => navigation.push('ForgotPassword')}>
                <Text style={loginStyle.textButton}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={loginStyle.touch} onPress={() => navigation.push('Register')}>
                <Text style={loginStyle.textButton}>Do you have not account?</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}