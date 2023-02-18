import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import forgotPasswordStyle from "../../assets/styles/forgotPassword.style";
import OtherHeader from "../components/otherHeader";
export default function ForgotPassword({ navigation }) {

    const [userName, setUserName] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const Reset = () => {
        if (password1 === password2){
            if(password1.length,password2.length!=0){
                if(password1.length, password2.length >= 8){
                    if(userName.length>=3){
                        navigation.navigate('HomeScreen', { userName })
                    }
                    else{
                        console.log("kullanıcı adı en az 3 karakter olmalı");
                    }
                }
                else{
                    console.log("şifreniz en az 8 karakter olmalı");
                }
            }
            else{
                console.log("şifreler boş olmamalı");
                
            }
        }
        else{
            console.log("şifreler birbirine eşit değil");
        }
    }

    return (
        <View style={forgotPasswordStyle.container}>
            <OtherHeader navigation={navigation} HeaderTitle={'Forgot Password'} />

            <View style={forgotPasswordStyle.inputs}>
                <Text style={forgotPasswordStyle.label}>User Name</Text>
                <TextInput
                    placeholder="User Name"
                    style={forgotPasswordStyle.input}
                    maxLength={18}
                    value={userName}
                    onChangeText={userName => setUserName(userName)}
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
            </View>

            <TouchableOpacity style={forgotPasswordStyle.ButtonTouch}
                onPress={Reset}>
                <Text style={forgotPasswordStyle.ButtonText}>Reset Password</Text>
            </TouchableOpacity>

        </View>
    );
}