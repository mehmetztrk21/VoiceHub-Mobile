import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import registerStyle from "../../assets/styles/register.style";
import { Searchbar } from "react-native-paper";

export default function Register() {
    return (
        <View style={registerStyle.container}>

            <Text style={registerStyle.label}>Name</Text>
            <Searchbar
                style={registerStyle.sbar}
            />

            <Text style={registerStyle.label}>Last Name</Text>
            <Searchbar
                style={registerStyle.sbar}
            />

            <Text style={registerStyle.label}>User Name</Text>
            <Searchbar
                style={registerStyle.sbar}
            />

            <Text style={registerStyle.label}>Email</Text>
            <Searchbar
                style={registerStyle.sbar}
            />

            <Text style={registerStyle.label}>Password</Text>
            <Searchbar
                style={registerStyle.sbar}
            />

            <Text style={registerStyle.label}>Password Repeat</Text>
            <Searchbar
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
