import React, { useState } from "react";
import { TouchableOpacity, TextInput, View, Text, Alert, Image } from "react-native";
import registerStyle from "../../assets/styles/register.style";

export default function Register({ navigation }) {
    const [firstName, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const isRegister = () => {
        if ((firstName, lastName, userName, email, password1, password2) !== "") {
            if (password1 == password2) {
                if (userName.length >= 3) {
                    if (password1.length >= 8) {
                        navigation.navigate('HomeScreen', { userName })
                    }
                    else {
                        Alert.alert("Password length may be 8 chart");
                    }
                }
                else {
                    Alert.alert("User Name length may be 8 chart");
                }
            }
            else {
                Alert.alert("Passwords don't equal");
            }
        }
        else {
            Alert.alert("don't boş bırakma");
        }
    }

    return (
        <View style={registerStyle.container}>
            <View style={registerStyle.logoView}>
                <Image source={require("../../assets/images/VoiceHub-1.png")} style={registerStyle.logo} />
            </View>

            <Text style={registerStyle.label}>Name</Text>
            <TextInput
                style={registerStyle.sbar}
                maxLength={24}
                value={firstName}
                onChangeText={firstName => setName(firstName)}
            />

            <Text style={registerStyle.label}>Last Name</Text>
            <TextInput
                style={registerStyle.sbar}
                maxLength={18}
                value={lastName}
                onChangeText={lastName => setLastName(lastName)}
            />

            <Text style={registerStyle.label}>User Name</Text>
            <TextInput
                style={registerStyle.sbar}
                maxLength={18}
                value={userName}
                onChangeText={userName => setUserName(userName)}
            />

            <Text style={registerStyle.label}>Email</Text>
            <TextInput
                style={registerStyle.sbar}
                maxLength={36}
                value={email}
                onChangeText={email => setEmail(email)}
            />

            <Text style={registerStyle.label}>Password</Text>
            <TextInput
                style={registerStyle.sbar}
                maxLength={18}
                value={password1}
                onChangeText={password1 => setPassword1(password1)}
            />

            <Text style={registerStyle.label}>Password Repeat</Text>
            <TextInput
                style={registerStyle.sbar}
                maxLength={18}
                value={password2}
                onChangeText={password2 => setPassword2(password2)}
            />

            <TouchableOpacity style={registerStyle.touch} onPress={() => isRegister()}>
                <Text style={registerStyle.registerButton}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={registerStyle.touch} onPress={() => navigation.goBack('Login')}>
                <Text style={registerStyle.textButton}>Do you have accont? Go Log in</Text>
            </TouchableOpacity>
        </View>
    );
}