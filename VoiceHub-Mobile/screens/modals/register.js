import React from "react";
import { TouchableOpacity,TextInput, View, Text } from "react-native";
import registerStyle from "../../assets/styles/register.style";

export default function Register() {
    return (
        <View style={registerStyle.container}>

            <Text style={registerStyle.label}>Name</Text>
            <TextInput
                style={registerStyle.sbar}
            />

            <Text style={registerStyle.label}>Last Name</Text>
            <TextInput
                style={registerStyle.sbar}
            />

            <Text style={registerStyle.label}>User Name</Text>
            <TextInput
                style={registerStyle.sbar}
            />

            <Text style={registerStyle.label}>Email</Text>
            <TextInput
                style={registerStyle.sbar}
            />

            <Text style={registerStyle.label}>Password</Text>
            <TextInput
                style={registerStyle.sbar}
            />

            <Text style={registerStyle.label}>Password Repeat</Text>
            <TextInput
                style={registerStyle.sbar}
            />

            <TouchableOpacity  style={registerStyle.touch}>
                <Text style={registerStyle.registerButton}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={registerStyle.touch}>
                <Text style={registerStyle.textButton}>Do you have accont? Go Log in</Text>
            </TouchableOpacity>
        </View>
    );
}
