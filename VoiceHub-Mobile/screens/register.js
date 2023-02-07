import React from "react";
import { TouchableOpacity, View, TextInput, Text } from "react-native";
import registerStyle from "../../assets/styles/register.style";
import { Searchbar } from "react-native-paper";

export default function Register() {
    return (
        <View style={registerStyle.container}>

            <Searchbar
                placeholder="Name"
                style={registerStyle.sbar}
            />

            <Searchbar
                placeholder="Last Name"
                style={registerStyle.sbar}
            />

            <Searchbar
                placeholder="E-Mail"
                style={registerStyle.sbar}
            />

            <Searchbar
                placeholder="User Name"
                style={registerStyle.sbar}
            />

            <Searchbar
                placeholder="Password"
                style={registerStyle.sbar}
            />

            <Searchbar
                placeholder="Password Repeat"
                style={registerStyle.sbar}
            />

            <TouchableOpacity >
                <Text style={registerStyle.sbar}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={registerStyle.sbar}>Do you have accont? Go Log in</Text>
            </TouchableOpacity>
        </View>
    );
}
