import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image, TextInput, SafeAreaView } from "react-native";
import loginStyle from "../../assets/styles/login.style";
import { Login as LoginService } from "../../services/authServices";
export default function Login({ navigation }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const isLogin = async () => {

        if (userName !== "" && password !== "") {
            const result = await LoginService(userName, password);
            if (result) navigation.navigate('HomeScreen', { uName: JSON.parse(localStorage.getItem('user')).username, isYourProfile: true })
            else alert("Username or Password is wrong");
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