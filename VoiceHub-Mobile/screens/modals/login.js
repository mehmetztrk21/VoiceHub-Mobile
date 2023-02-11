import React from "react";
import { TouchableOpacity, View, Text, Image, TextInput, Modal } from "react-native";
import loginStyle from "../../assets/styles/login.style";

export default function Login(logoutVisible) {
    return (
        <Modal style={{width:"100%"}} onRequestClose={()=>{!editVisible}}>
    <View>
    {logoutVisible.logoutVisible ?  (
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

            <TouchableOpacity  style={loginStyle.touch}>
                <Text style={loginStyle.loginButton}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={loginStyle.touch}>
                <Text style={loginStyle.textButton}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={loginStyle.touch}>
                <Text style={loginStyle.textButton}>Do you have not account?</Text>
            </TouchableOpacity>
        </View>
    ):null}
    </View>
    </Modal>
    );
}
