import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";
import OtherHeader from "../../screens/components/otherHeader";
import { changePassword } from "../../services/userServices";

const ChangePassword = ({ navigation }) => {

    const [old, setOld] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const confirm = async () => {

        if (password1 == password2) {
            await changePassword({ password: old, newPassword: password2 }).then(async (res) => {
                if (res?.success) {
                    alert("Your password has been successfully changed!")
                }
                else {
                    alert("You did not enter your old password correctly")
                }
            }).catch((err) => {
                console.log(err);
            })
        }
        else {
            alert("The passwords you will create do not match.")
        }
    };

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <SafeAreaView style={{ backgroundColor: colors.white, flex: 1, width: "100%" }}>
            <OtherHeader navigation={navigation} HeaderTitle={"Change Password"} isTic={false} />
            <View style={{ marginTop: "25%" }}>
                <Text style={{
                    marginBottom: "0.5%",
                    marginTop: "1.5%",
                    marginLeft: "8%",
                    fontWeight: "500",
                    fontSize: 16,
                }}>Old Password</Text>
                <View style={{
                    backgroundColor: "lightgray",
                    borderRadius: 25,
                    paddingVertical: 10,
                    paddingHorizontal: "2%",
                    width: "80%",
                    marginLeft: "8%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
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
                <Text style={{
                    marginBottom: "0.5%",
                    marginTop: "1.5%",
                    marginLeft: "8%",
                    fontWeight: "500",
                    fontSize: 16,
                }}>New Password</Text>
                <TextInput
                    style={{
                        backgroundColor: "lightgray",
                        borderRadius: 25,
                        paddingVertical: 10,
                        paddingHorizontal: "2%",
                        width: "80%",
                        marginLeft: "8%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    maxLength={18}
                    value={password1}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={password1 => setPassword1(password1)}
                />
            </View>

            <View style={{ marginTop: "5%" }}>
                <Text style={{
                    marginBottom: "0.5%",
                    marginTop: "1.5%",
                    marginLeft: "8%",
                    fontWeight: "500",
                    fontSize: 16,
                }}> New Password Repeat</Text>
                <TextInput
                    style={{
                        backgroundColor: "lightgray",
                        borderRadius: 25,
                        paddingVertical: 10,
                        paddingHorizontal: "2%",
                        width: "80%",
                        marginLeft: "8%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    maxLength={18}
                    value={password2}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={password2 => setPassword2(password2)}
                />
            </View>

            <TouchableOpacity onPress={confirm}
                style={{ backgroundColor: colors.green, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 40, width: "50%", marginLeft: "25%", marginTop: "5%" }}>
                <Text style={{ fontSize: 16, color: colors.white, fontWeight: "600", textAlign: "center" }}>Confirm</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ChangePassword