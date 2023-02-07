import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import loginStyle from "../assets/styles/login.style";
import { Searchbar } from "react-native-paper";

export default function Login() {
    return (
        <View style={loginStyle.container}>
            <Image source={{ require: ("../assets/images/mypost.jpg") }} />

            <Searchbar
                placeholder="User Name"
                style={loginStyle.sbar}
            />

            <Searchbar
                placeholder="Password"
                style={loginStyle.sbar}
            />

            <TouchableOpacity >
                <Text style={loginStyle.sbar}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={loginStyle.sbar}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={loginStyle.sbar}>Do you have not account?</Text>
            </TouchableOpacity>
        </View>
    );
}
