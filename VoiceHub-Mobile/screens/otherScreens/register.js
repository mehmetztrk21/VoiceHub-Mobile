import React, { useState } from "react";
import { TouchableOpacity, TextInput, View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import registerStyle from "../../assets/styles/register.style";

import { register } from "../../services/authServices";
import { login } from "../../services/authServices";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { registerCondition } from "../../utils/registerCondition";

export default function Register({ navigation }) {
    const [firstName, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState("");
    const [gender, setGender] = useState("");

    let isGoHomePage = false

    const isRegister = async () => {
        isGoHomePage = registerCondition(firstName, lastName, userName, email, password1, password2);
        if (isGoHomePage) {

            const response1 = await register(
                {
                    name: firstName, surname: lastName, username: userName, password: password1,
                    email: email, phone: phone, birthDay: birth, gender: gender,
                })
            if (response1 && response1.success) {
                const response2 = await login({ username: userName, password: password1 })
                if (response2 && response2.success) {
                    await AsyncStorage.setItem('token', response2.data.accessToken)
                    await AsyncStorage.setItem('user', JSON.stringify(response2.data.user))
                    navigation.navigate("HomeScreen", { uName: userName })
                }
                else {
                    alert("Girdiğiniz Bilgiler Yanlış")
                }
            }
            else {
                alert("Girdiğiniz Bilgiler Yanlış")
            }
        }
    }

    return (
        <SafeAreaView style={registerStyle.container}>
            <View style={registerStyle.logoView}>
                <Image source={require("../../assets/images/VoiceHub-1.png")} style={registerStyle.logo} />
            </View>
            <ScrollView>
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

                <Text style={registerStyle.label}>Phone</Text>
                <TextInput
                    style={registerStyle.sbar}
                    maxLength={36}
                    value={phone}
                    onChangeText={phone => setPhone(phone)}
                />

                <Text style={registerStyle.label}>BirthDay</Text>
                <TextInput
                    style={registerStyle.sbar}
                    maxLength={36}
                    value={birth}
                    onChangeText={birth => setBirth(birth)}
                />

                <Text style={registerStyle.label}>Gender</Text>
                <TextInput
                    style={registerStyle.sbar}
                    maxLength={36}
                    value={gender}
                    onChangeText={gender => setGender(gender)}
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

                <TouchableOpacity style={registerStyle.touch} onPress={() => navigation.goBack()}>
                    <Text style={registerStyle.textButton}>Do you have accont? Go Log in</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}