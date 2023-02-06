import React from "react";
import { TouchableOpacity, View, TextInput, Text, Image } from "react-native";
import loginStyle from "../../assets/styles/login.style";

export default function Login() {
    return (
        <View style={loginStyle.container}>
            <Image source={{require:("../assets/images/mypost.jpg")}}/>

            <Text>User Name</Text>
            <TextInput />

            <Text>Password</Text>
            <TextInput />

            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Forgot Password</Text>
            </TouchableOpacity>
        </View>
    );
}
