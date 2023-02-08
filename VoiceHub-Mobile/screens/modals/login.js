import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import loginStyle from "../../assets/styles/login.style";
import { Searchbar } from "react-native-paper";

export default function Login() {
    return (
        <View style={loginStyle.container}>
            <Image source={ require("../../assets/images/VoiceHub-1.png")} style={loginStyle.logo}/>

            <Text style={loginStyle.label}>User Name</Text>
            <Searchbar
                style={loginStyle.sbar}
            />

            <Text style={loginStyle.label}>Password</Text>
            <Searchbar
                style={loginStyle.sbar}
            />

            <TouchableOpacity  style={loginStyle.touch}>
                <Text style={loginStyle.loginButton}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={loginStyle.touch}>
                <Text style={loginStyle.textButton}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={loginStyle.touch}>
                <Text style={loginStyle.textButton}>Do you have not account?</Text>
            </TouchableOpacity>
        </View>
    );
}
