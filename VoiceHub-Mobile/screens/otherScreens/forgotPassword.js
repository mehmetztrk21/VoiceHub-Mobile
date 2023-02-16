import React from "react";
import { View } from "react-native";
import forgotPasswordStyle from "../../assets/styles/forgotPassword.style"
import OtherHeader from "../components/otherHeader";
export default function ForgotPassword({navigation}) {
        return (
            <View style={forgotPasswordStyle.container}>
                <OtherHeader navigation={navigation} HeaderTitle={'Forgot Password'}/>
            </View>
        );
    }