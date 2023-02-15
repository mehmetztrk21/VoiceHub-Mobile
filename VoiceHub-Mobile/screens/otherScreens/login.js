import React from "react";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import loginStyle from "../../assets/styles/login.style";

export default function Login({navigation}) {
    return (
        <View style={loginStyle.container}>
            <Image source={ require("../../assets/images/VoiceHub-1.png")} style={loginStyle.logo}/>

            <Text style={loginStyle.label}>User Name</Text>
            <TextInput
                style={loginStyle.sbar}
            />

            <Text style={loginStyle.label}>Password</Text>
            <TextInput
                style={loginStyle.sbar}
            />

            <TouchableOpacity  style={loginStyle.touch} onPress={()=>navigation.push('HomeScreen')}>
                <Text style={loginStyle.loginButton}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={loginStyle.touch} onPress={()=>navigation.push('ForgotPassword')}>
                <Text style={loginStyle.textButton}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={loginStyle.touch} onPress={()=>navigation.push('Register')}>
                <Text style={loginStyle.textButton}>Do you have not account?</Text>
            </TouchableOpacity>
        </View>
    );
}
