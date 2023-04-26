import React, { useEffect, useState } from 'react';
import { SafeAreaView, Switch, Text, TextInput, View } from 'react-native';
import colors from '../../assets/colors';
import OtherHeader from "../components/otherHeader";

import { Dimensions } from "react-native";
import optionsStyle from '../../assets/styles/options.style';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { changePassword, updateUserInfo } from '../../services/userServices';
import { useUser } from "../../utils/userContext"
const { width } = Dimensions.get("window");

const Options = ({ navigation }) => {

    const { user } = useUser();
    const [old, setOld] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [isSecretAccount, setIsSecretAccount] = useState(user?.isSecretAccount);

    const toggleSwitch = async () => {
        setIsSecretAccount(previousState => !previousState);
        const formData = new FormData();
        formData.append("isSecretAccount", isSecretAccount);
        await updateUserInfo(formData)

    }

    const confirm = async () => {

        if (password1 == password2) {
            await changePassword({ password: old, newPassword: password2 }).then(async (res) => {
                if (res?.success) {
                    alert("Şifreniz Başarı ile değiştirildi")
                }
                else {
                    alert("Eski şifrenizi doğru girmediniz")
                }
            }).catch((err) => {
                console.log(err);
            })
        }
        else {
            alert("Yeni oluşturacağınız şifreler birbiriyle uyuşmuyor")
        }

    };

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <SafeAreaView style={{ backgroundColor: colors.white, flex: 1, width: '100%' }}>
            <OtherHeader navigation={navigation} HeaderTitle={'Options'} isTic={false} />

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', marginTop: "30%", marginRight: "10%" }}>
                <Text style={optionsStyle.label}>Secret Account</Text>

                <Switch
                    trackColor={{ false: "#767577", true: colors.green }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isSecretAccount}
                />
            </View>

            <View style={{ marginTop: "5%" }}>
                <Text style={optionsStyle.label}>Old Password</Text>
                <View style={optionsStyle.passwordbar}>
                    <TextInput
                        style={{ width: "80%" }}
                        maxLength={18}
                        value={old}
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={old => setOld(old)}
                    />
                    <TouchableOpacity onPress={handlePasswordVisibility}>
                        <Icon type="font-awesome" size={20} name={isPasswordVisible ? "eye" : "eye-slash"} color={colors.green} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: "5%" }}>
                <Text style={optionsStyle.label}>New Password</Text>
                <TextInput
                    style={optionsStyle.passwordbar}
                    maxLength={18}
                    value={password1}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={password1 => setPassword1(password1)}
                />
            </View>

            <View style={{ marginTop: "5%" }}>
                <Text style={optionsStyle.label}> New Password Repeat</Text>
                <TextInput
                    style={optionsStyle.passwordbar}
                    maxLength={18}
                    value={password2}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={password2 => setPassword2(password2)}
                />
            </View>

            <TouchableOpacity onPress={confirm}
                style={{ backgroundColor: colors.green, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 40, width: "50%", marginLeft: "25%" }}>
                <Text style={{ fontSize: 16, color: colors.white, fontWeight: "600" }}> Confirm</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Options