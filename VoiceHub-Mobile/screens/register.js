import React from "react";
import { TouchableOpacity, View, TextInput, Text } from "react-native";
import registerStyle from "../../assets/styles/register.style";

export default function Register() {
    return (
        <View style={registerStyle.container}>

            <Text>Name</Text>
            <TextInput />

            <Text>Last Name</Text>
            <TextInput />

            <Text>E-Mail</Text>
            <TextInput keyboardType="email-address"/>

            <Text>User Name</Text>
            <TextInput />

            <Text>Password</Text>
            <TextInput keyboardType="visible-password"/>

            <Text>Password Repeat</Text>
            <TextInput keyboardType="visible-password"/>

            <TouchableOpacity>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    );
}
