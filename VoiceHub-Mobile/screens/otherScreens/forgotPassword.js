import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import forgotPasswordStyle from "../../assets/styles/forgotPassword.style";

import { Dimensions } from "react-native";
import colors from '../../assets/colors';
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function ForgotPassword({ navigation }) {

    const [username, setusername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const Reset = () => {
        if (password1 === password2) {
            if (password1.length, password2.length != 0) {
                if (password1.length, password2.length >= 8) {
                    if (username.length >= 3) {
                        navigation.navigate("HomeScreen", { username })
                    }
                    else {
                        alert("kullanıcı adı en az 3 karakter olmalı");
                    }
                }
                else {
                    alert("şifreniz en az 8 karakter olmalı");
                }
            }
            else {
                alert("şifreler boş olmamalı");

            }
        }
        else {
            alert("şifreler birbirine eşit değil");
        }
    }

    return (
        <SafeAreaView style={[forgotPasswordStyle.container, { paddingTop: width * 0.08 }]}>

            <View style={{ marginBottom: "2.5%", marginLeft: "2.5%", flexDirection: "row", height: height * 0.07 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon type="ionicon" size={30} name={"arrow-back-outline"} style={{ marginRight: "1%", paddingTop: 7.5, }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: "500" }}>Forgot Password</Text>
            </View>

            <View style={{ height: height * 0.85, width: width * 0.7, marginLeft: width * 0.15, justifyContent: "center" }}>
                <Text style={forgotPasswordStyle.label}>User Name</Text>
                <TextInput
                    placeholder="User Name"
                    style={forgotPasswordStyle.input}
                    maxLength={18}
                    value={username}
                    onChangeText={username => setusername(username)}
                />

                <Text style={forgotPasswordStyle.label}>New Password</Text>
                <TextInput
                    placeholder="Min 8 Characters"
                    style={forgotPasswordStyle.input}
                    value={password1}
                    maxLength={18}
                    onChangeText={password1 => setPassword1(password1)}
                />

                <Text style={forgotPasswordStyle.label}>Confirm New Password</Text>
                <TextInput
                    placeholder="Min 8 Characters"
                    style={forgotPasswordStyle.input}
                    value={password2}
                    maxLength={18}
                    onChangeText={password2 => setPassword2(password2)}
                />


                <TouchableOpacity style={{ width: width * 0.5, marginLeft: width * 0.1 }}
                    onPress={Reset}>
                    <Text style={forgotPasswordStyle.ButtonText}>Reset Password</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}